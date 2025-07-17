// 获取 URL 参数
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// 多套题库（键为数字）
const questionBanks = {
  1: [
    "最近一段时间，你有没有觉得心情有点低落、闷闷不乐的时候？",
    "你觉得早上起床的时候，心情是开心的，还是有点沉重呢？",
    "你有没有想过要哭，或者有时候忍不住想哭？",
    "晚上睡觉的时候，你会不会经常睡不着，或者半夜醒来就很难再睡着了？",
    "最近吃饭的时候，你还像以前一样有胃口吗？",
    /**"你觉得自己身体状态还不错，还是感觉有点累？",
    "你有没有发现自己的体重变轻了，哪怕不是刻意减肥？",
    "你是不是最近总觉得肚子不舒服，比如便秘、拉不出便便？",
    "你有没有感觉心跳突然加快，像是要跳出来那种感觉？",
    "有时候明明没做什么事，但就是觉得好累，连动都不想动？",
    "你现在做事、听课、做作业的时候，脑子还能集中注意力吗？",
    "你做事情的时候，还像以前一样顺利，还是会觉得有点困难？",
    "你有没有坐不住、静不下来的感觉，就像心里有一只小兔子一样？",
    "你对未来有什么期待吗？比如长大以后想做什么，或者有什么梦想？",
    "你是不是比平时更容易生气，一点点小事就会让你很烦？",
    "当你需要做一个决定的时候，比如选什么课、要不要参加活动，你会觉得很难下决定吗？",
    "你有没有觉得自己很重要，别人也离不开你？",
    "你觉得现在的生活中，还有让你觉得有趣、有意思的事情吗？",
    "有时候你会不会觉得，如果自己不在了，别人都会过得更好一些？",
    "你以前喜欢做的事情，比如打游戏、画画、听歌，现在还像以前那么喜欢吗？",**/
  ],
  2: [
    "最近这一周，你有没有感觉特别容易紧张，或者总是坐立不安，内心有点焦躁不安？",
    "你有没有过那种突然觉得心里空空的，好像有什么不好的事情即将发生，但又说不清楚具体是什么的感觉？",
    "有没有因为一些小事，就突然感觉到心跳加速或者手心冒汗？",
    "你有没有过那种感觉，好像身体的某些部分有点奇怪地不协调，或者甚至感觉不太真实，好像跟自己有点分离？",
    "最近这一周，你有没有觉得做什么事情都特别顺利，很少遇到令人沮丧或不顺心的事？",
    "你有没有发现，在某些时候，自己的手会不由自主地微微颤抖，好像控制不住一样？",
    "最近是不是感觉头、脖子或者背部经常不舒服，这些地方的疼痛有没有频繁地困扰你？",
    "有没有感觉自己特别没力气，做什么事情都提不起劲，只想休息？",
    "最近你有没有感觉内心特别平静，能够很安静地坐着看书或者好好休息，不被外界打扰？",
    "你有没有觉得心跳特别快，快到像是要从胸口跳出来一样？",
    "有没有突然感到头晕目眩，视线模糊，甚至觉得有点站不稳的感觉？",
    "你有没有突然觉得好像快要晕倒了，有那种‘眼前一黑’的危险感觉？",
    "你呼吸的时候，有没有觉得特别顺畅，一点都不费力，很轻松？",
    "你的手指或者脚趾有没有经常感觉发麻，或者像针扎一样刺痛？",
    "最近你有没有感觉胃不太舒服，比如胃痛，或者吃完东西以后更容易感到不消化、胀气？",
    "你有没有发现自己最近上厕所（小号）的次数，比平时多很多？",
    "你的手是不是大部分时间都保持温暖，而且不容易出汗？",
    "你有没有突然感觉自己的脸部发烫，或者脸颊突然变得很红？",
    "晚上睡觉的时候，你有没有觉得特别轻松，可以一觉睡到天亮，醒来感觉特别精神？",
    "你做梦的时候，有没有经常梦到一些让你感到害怕或者不安的场景？",
  ],
  3: [
    "你写完作业后会反复检查好几遍吗？比如一道题写了又擦，总觉得哪里不对劲？",
    "有时候你会为了不出错，做事特别慢吗？比如写作业的时候总是很久才完成？",
    "你有没有特别在意衣服是否整齐，比如扣子没扣好就会一直调整？",
    "有没有过明明该做作业了，却突然想到一些无关紧要的事情，怎么也甩不开？",
    "你有没有反复洗手或者数数的习惯？比如洗手洗很多遍才觉得安心？",
    "考试前即使知道复习得差不多了，还是会忍不住担心考不好吗？",
    "你是不是经常觉得自己的想法和别人不太一样，甚至怀疑别人在针对你？",
    "你有没有觉得同学或朋友想占你便宜，比如拿走你的东西不还？",
    "有没有感觉有人在背后议论你，虽然可能只是你的猜测？",
    "你是不是觉得很难信任别人，即使是很熟的朋友？",
    "你有没有觉得别人对你的评价不太公平，比如老师给你打分太低了？",
    "有没有感觉别人总是跟你作对，比如故意找你麻烦？",
    "你有没有控制不住自己发脾气的情况，比如明明想忍住却还是大喊大叫？",
    "你有没有因为生气而大喊大叫，或者摔东西的情况？",
    "你是不是经常对自己很严格，总是责怪自己做得不够好？",
    "你是不是容易因为小事就激动或烦恼，比如和同学的小摩擦？",
    "有没有过特别生气的时候，想伤害别人或者打人？",
    "你有没有过想摔东西的冲动，即使最后没这么做？",
    "你有没有感觉同学们对你不太友好，或者觉得他们不喜欢你？",
    "当别人盯着你看或者讨论你的时候，会不会觉得特别不自在？",
    "有没有觉得别人不理解你，比如遇到困难时没人安慰你？",
    "你是不是容易因为别人的一句话或一个举动就感到受伤？",
    "和异性同学相处的时候，你会觉得害羞或不自在吗？",
    "你是不是对别人要求特别高，觉得他们必须做到完美？",
    "最近有没有觉得心情特别苦闷，做什么都没兴趣？",
    "你是不是最近特别容易哭，即使是一点小事？",
    "有没有觉得未来没什么希望，生活特别没劲？",
    "你是不是经常责怪自己，觉得自己做得不够好？",
    "有没有感觉每天都很累，做什么都提不起精神？",
    "你有没有过不想活的念头，觉得活着没意思？",
    "你是不是经常感到紧张，比如在陌生人面前说话会手心出汗？",
    "有没有过坐立不安的感觉，比如上课时一直想动，静不下心？",
    "有没有过突然感到害怕，即使周围什么都没发生？",
    "你是不是经常觉得心里烦躁，做什么都不顺心？",
    "有没有感觉心里空落落的，总觉得有什么事要发生？",
    "你是不是经常觉得心里有事，即使不知道具体是什么？",
    "你觉得现在的学习任务太重，经常熬夜做作业吗？",
    "上课时是不是总担心老师会突然提问到你？",
    "每次听到要考试，你会特别紧张吗？",
    "你是不是越来越讨厌做作业，觉得它很无聊？",
    "你有没有觉得上学很痛苦，不想去学校？",
    "你是不是特别讨厌考试，觉得它压力很大？",
    "你喜欢参加学校组织的课外活动，比如运动会或者文艺汇演吗？",
    "你有没有觉得现在的学校生活不太适应，比如课程安排太紧？",
    "你有没有觉得现在的社会风气不太对劲，比如同学之间攀比？",
    "你有没有觉得老师的教学方法不太适合你，比如讲课太快？",
    "你觉得家里环境影响你的学习，比如家人经常打扰你？",
    "你有没有觉得班里的风气不太好，比如同学之间勾心斗角？",
    "你的心情会突然变化吗，比如刚才还开心，现在就哭了？",
    "你学习的动力是不是时高时低，有时候特别认真，有时候又不想学？",
    "你做作业的时候，热情是不是忽高忽低，有时候特别积极，有时候又拖拉？",
    "你对同学的态度是不是有时候热情，有时候又冷淡？",
    "你对老师的态度是不是有时候很亲近，有时候又觉得疏远？",
    "你对父母的态度是不是有时候很好，有时候又特别冷淡？",
    "当同学考得比你好时，你会觉得难过吗？",
    "你有没有觉得老师对你不公平，比如评分不公正？",
    "当看到同学穿得比你好，或者更有钱时，你会不舒服吗？",
    "你有没有觉得父母对你不公平，比如偏心对待兄弟姐妹？",
    "当看到比你强的同学时，你会不服气吗？",
    "当同学考得比你好，但你觉得他们其实没你能力强时，你会怎么想？",
  ],
};

const testId = parseInt(getQueryParam("test")) || 1;
const questions = questionBanks[testId] || questionBanks[1];

let current = 0;
let recordingState = 0; // 0 = 未录音，1 = 录音中

// DOM元素
const numberElem = document.getElementById("question-number");
const textElem = document.getElementById("question-text");
const replyBtn = document.getElementById("reply-btn");
const gray = document.getElementById("gray");
const countdownElem = document.getElementById("countdown");
const progressBar = document.getElementById("progress-bar");
const nextImg = document.getElementById("next-img");
const nextText = document.getElementById("next-text");

const replyText = replyBtn.querySelector(".btn-text");
const waveContainer = replyBtn.querySelector(".audio-wave-container");

let mediaRecorder = null;
let audioChunks = [];
let stream = null;
let countdownTimer = null;

let audioContext = null;
let analyser = null;
let dataArray = null;
let source = null;
let animationId = null;
let waveBars = [];

const totalBars = 40;

// 新增：保存所有录音段的 Blob
const allAudioBlobs = [];

// 显示题目
function showQuestion(index) {
  if (index < questions.length) {
    numberElem.innerText = index < 9 ? `0${index + 1}` : `${index + 1}`;
    textElem.innerText = questions[index];
    updateUIForState(0);
    updateProgress(index, questions.length);
  } else {
    numberElem.innerText = "完成";
    textElem.innerText = "答题完成，感谢参与！";
    replyBtn.style.display = "none";
    showNextButton(false);
    updateProgress(questions.length, questions.length);
  }
}

// 更新进度条
function updateProgress(index, total) {
  const percent = ((index + 1) / total) * 100;
  progressBar.style.width = percent + "%";
}

// 控制下一题按钮显示
function showNextButton(show) {
  const display = show ? "inline-block" : "none";
  nextImg.style.display = display;
  nextText.style.display = display;
}

// 创建波纹柱子
function createAudioWaveBars() {
  if (!waveContainer) return;
  waveContainer.innerHTML = "";
  waveBars = [];
  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement("div");
    bar.className = "audio-wave";
    waveContainer.appendChild(bar);
    waveBars.push(bar);
  }
}

// 启动波纹动画
function startAudioVisualization() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 64;
  const bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);
  source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);

  if (waveBars.length === 0) createAudioWaveBars();

  if (replyText) replyText.style.display = "none";
  waveContainer.style.display = "flex";

  function animate() {
    animationId = requestAnimationFrame(animate);
    analyser.getByteFrequencyData(dataArray);

    const mid = totalBars / 2;
    for (let i = 0; i < mid; i++) {
      let leftIndex = Math.floor(
        bufferLength / 2 - i * (bufferLength / (2 * mid))
      );
      let rightIndex = Math.floor(
        bufferLength / 2 + i * (bufferLength / (2 * mid))
      );

      leftIndex = Math.min(Math.max(leftIndex, 0), bufferLength - 1);
      rightIndex = Math.min(Math.max(rightIndex, 0), bufferLength - 1);

      const leftVal = dataArray[leftIndex];
      const rightVal = dataArray[rightIndex];

      const leftHeight = Math.max(5, (leftVal / 255) * 80);
      const rightHeight = Math.max(5, (rightVal / 255) * 80);

      waveBars[mid - 1 - i].style.height = leftHeight + "px";
      waveBars[mid - 1 - i].style.backgroundColor = `rgba(255,0,0,${
        0.3 + (leftVal / 255) * 0.7
      })`;

      waveBars[mid + i].style.height = rightHeight + "px";
      waveBars[mid + i].style.backgroundColor = `rgba(255,0,0,${
        0.3 + (rightVal / 255) * 0.7
      })`;
    }
  }
  animate();
}

// 停止波纹动画
function stopAudioVisualization() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
  waveBars.forEach((bar) => {
    bar.style.height = "5px";
    bar.style.backgroundColor = "rgba(255, 255, 255, 0.67)";
  });
  if (replyText) replyText.style.display = "inline";
  if (waveContainer) waveContainer.style.display = "none";
}

// 更新UI根据录音状态
function updateUIForState(state) {
  recordingState = state;
  if (state === 0) {
    replyBtn.disabled = false;
    if (replyText) replyText.style.display = "inline";
    if (waveContainer) waveContainer.style.display = "none";
    showNextButton(false);
  } else if (state === 1) {
    replyBtn.disabled = true;
    if (replyText) replyText.style.display = "none";
    if (waveContainer) waveContainer.style.display = "flex";
    showNextButton(true);
  }
}

// 开始倒计时并录音
function startCountdownAndRecord() {
  let count = 3;
  countdownElem.textContent = count;
  gray.classList.remove("hidden");
  replyBtn.disabled = true;

  countdownTimer = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(countdownTimer);
      gray.classList.add("hidden");
      startRecording();
    } else {
      countdownElem.textContent = count;
    }
  }, 800);
}

// 开始录音
async function startRecording() {
  try {
    if (!stream) {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }
    if (!audioContext) {
      audioContext = new AudioContext();
    }

    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) audioChunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      allAudioBlobs.push(audioBlob); // 保存当前段录音Blob到数组
      const audioUrl = URL.createObjectURL(audioBlob);
      console.log("当前段录音文件地址:", audioUrl);
      // 这里可以单独上传或存储每段录音
    };

    mediaRecorder.start();

    updateUIForState(1);
    startAudioVisualization();
  } catch (err) {
    alert("请授权麦克风权限，否则无法录音！");
    replyBtn.disabled = false;
    showNextButton(false);
    updateUIForState(0);
  }
}

// 暂停录音（这里改为停止当前录音）
function pauseRecording() {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop(); // 停止录音触发onstop事件，保存Blob
  }
  stopAudioVisualization();
  updateUIForState(0);
}

// 停止录音并导出（合并所有录音Blob）
async function stopRecordingAndExport() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
  stopAudioVisualization();
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
  updateUIForState(0);

  if (allAudioBlobs.length === 0) {
    alert("没有录音数据");
    return;
  }

  // 合并所有录音Blob并导出
  const mergedBlob = await mergeAudioBlobs(allAudioBlobs);
  const mergedUrl = URL.createObjectURL(mergedBlob);
  console.log("合并后音频文件地址:", mergedUrl);

  // 触发下载
  const a = document.createElement("a");
  a.href = mergedUrl;
  a.download = `merged_audio_${testId}.wav`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// 合并多个Blob成一个Blob（Web Audio API实现）
async function mergeAudioBlobs(blobs) {
  if (!blobs || blobs.length === 0) return null;

  const context = new AudioContext();
  let buffers = [];

  // 读取每个Blob为ArrayBuffer再解码为AudioBuffer
  for (const blob of blobs) {
    const arrayBuffer = await blob.arrayBuffer();
    const audioBuffer = await context.decodeAudioData(arrayBuffer);
    buffers.push(audioBuffer);
  }

  // 计算合并后的总时长
  let totalLength = buffers.reduce((sum, buf) => sum + buf.length, 0);

  // 创建一个目标AudioBuffer
  const numberOfChannels = Math.max(
    ...buffers.map((buf) => buf.numberOfChannels)
  );
  const sampleRate = buffers[0].sampleRate;
  const outputBuffer = context.createBuffer(
    numberOfChannels,
    totalLength,
    sampleRate
  );

  // 拷贝数据
  let offset = 0;
  for (const buffer of buffers) {
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const outputData = outputBuffer.getChannelData(channel);
      const inputData = buffer.getChannelData(
        channel < buffer.numberOfChannels ? channel : 0
      );
      outputData.set(inputData, offset);
    }
    offset += buffer.length;
  }

  // 导出为wav格式Blob
  const wavBlob = audioBufferToWavBlob(outputBuffer);

  context.close();

  return wavBlob;
}

// AudioBuffer转wav Blob函数（简单实现）
function audioBufferToWavBlob(buffer) {
  const numOfChan = buffer.numberOfChannels,
    length = buffer.length * numOfChan * 2 + 44,
    bufferArray = new ArrayBuffer(length),
    view = new DataView(bufferArray),
    channels = [],
    sampleRate = buffer.sampleRate;

  // 写WAV头
  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  let offset = 0;

  writeString(view, offset, "RIFF");
  offset += 4;
  view.setUint32(offset, length - 8, true);
  offset += 4;
  writeString(view, offset, "WAVE");
  offset += 4;
  writeString(view, offset, "fmt ");
  offset += 4;
  view.setUint32(offset, 16, true);
  offset += 4; // SubChunk1Size
  view.setUint16(offset, 1, true);
  offset += 2; // AudioFormat PCM = 1
  view.setUint16(offset, numOfChan, true);
  offset += 2;
  view.setUint32(offset, sampleRate, true);
  offset += 4;
  view.setUint32(offset, sampleRate * numOfChan * 2, true);
  offset += 4; // ByteRate
  view.setUint16(offset, numOfChan * 2, true);
  offset += 2; // BlockAlign
  view.setUint16(offset, 16, true);
  offset += 2; // BitsPerSample

  writeString(view, offset, "data");
  offset += 4;
  view.setUint32(offset, length - offset - 4, true);
  offset += 4;

  // 写入PCM样本
  for (let i = 0; i < buffer.numberOfChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }

  let pos = offset;
  for (let i = 0; i < buffer.length; i++) {
    for (let ch = 0; ch < numOfChan; ch++) {
      let sample = Math.max(-1, Math.min(1, channels[ch][i]));
      sample = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
      view.setInt16(pos, sample, true);
      pos += 2;
    }
  }

  return new Blob([view], { type: "audio/wav" });
}

// 下一题跳转
function goToNextQuestion() {
  if (recordingState !== 1) return; // 录音没开始则不跳转
  pauseRecording();
  current++;
  if (current < questions.length) {
    showQuestion(current);
  } else {
    stopRecordingAndExport();
    document.body.style.transition = "opacity 0.8s";
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = `testover.html?test=${encodeURIComponent(testId)}`;
    }, 800);
  }
}

// 事件绑定
replyBtn.addEventListener("click", () => {
  if (replyBtn.disabled) return;
  if (recordingState === 0) {
    startCountdownAndRecord();
  }
});

[nextImg, nextText].forEach((el) =>
  el.addEventListener("click", () => {
    goToNextQuestion();
  })
);

// 初始化
window.onload = () => {
  showQuestion(current);
  updateUIForState(0);
};
