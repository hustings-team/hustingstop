let mediaStream = null;
let mediaRecorder = null;
let recordedChunks = [];
let isVideoEnabled = true; // 设置为 false 可只录音

export async function startRecording() {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: isVideoEnabled,
    });

    // 给预览video赋值流
    const previewVideo = document.getElementById("preview-video");
    if (previewVideo) previewVideo.srcObject = mediaStream;

    recordedChunks = [];
    mediaRecorder = new MediaRecorder(mediaStream, {
      mimeType: isVideoEnabled ? "video/webm" : "audio/webm",
    });

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, {
        type: isVideoEnabled ? "video/webm" : "audio/webm",
      });

      const url = URL.createObjectURL(blob);
      console.log("录制完成，地址:", url);

      // 创建下载链接以保存文件
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = isVideoEnabled
        ? "recorded-video.webm"
        : "recorded-audio.webm";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // 停止摄像头/麦克风
      mediaStream.getTracks().forEach((track) => track.stop());

      // 清除预览video流
      if (previewVideo) previewVideo.srcObject = null;
    };

    mediaRecorder.start();
    console.log("开始录制...");
  } catch (err) {
    alert("获取摄像头/麦克风失败：" + err.message);
  }
}

export function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    console.log("停止录制...");
  }
}
