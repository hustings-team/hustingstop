// 所有学生账号信息
const studentAccounts = [
  { user: "zhangxm001", pass: "hust888" },
  { user: "lixh002", pass: "hust888" },
  { user: "wangdg003", pass: "hust888" },
  { user: "zhaoll004", pass: "hust888" },
  { user: "liuzh005", pass: "hust888" },
  { user: "chenss006", pass: "hust888" },
  { user: "yangf007", pass: "hust888" },
  { user: "wujw008", pass: "hust888" },
  { user: "zhouj009", pass: "hust888" },
  { user: "zhengxw010", pass: "hust888" },
  { user: "sunhy011", pass: "hust888" },
  { user: "zhull012", pass: "hust888" },
  { user: "xuwb013", pass: "hust888" },
  { user: "guoxt014", pass: "hust888" },
  { user: "linzy015", pass: "hust888" },
  { user: "hejy016", pass: "hust888" },
  { user: "gaom017", pass: "hust888" },
  { user: "dengy018", pass: "hust888" },
  { user: "panl019", pass: "hust888" },
  { user: "caisy020", pass: "hust888" },
  { user: "fengy021", pass: "hust888" },
  { user: "dingyx022", pass: "hust888" },
  { user: "jiangt023", pass: "hust888" },
  { user: "hanx024", pass: "hust888" },
  { user: "xiaor025", pass: "hust888" },
  { user: "chengzh026", pass: "hust888" },
];

// 绑定登录事件
document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const matched = studentAccounts.find(
    (acc) => acc.user === username && acc.pass === password
  );

  if (matched) {
    errorMsg.textContent = "";
    // 登录成功，跳转到学生主页
    window.location.href = "/index.html"; // 根据你的页面路径调整
  } else {
    errorMsg.textContent = "用户名或密码错误，请重试";
    errorMsg.style.display = "block";
    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 3000);
  }
});
