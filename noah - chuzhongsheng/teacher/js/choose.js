document.addEventListener("DOMContentLoaded", () => {
  // 绑定所有 .check-icon 点击事件
  const checkIcons = document.querySelectorAll(".check-icon");

  function updateSelectedCount() {
    const count = document.querySelectorAll(".check-icon.checked").length;
    const display = document.getElementById("selected-count");
    if (display) {
      display.textContent = count;
    }
  }

  checkIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation(); // 防止触发父元素事件
      icon.classList.toggle("checked");
      updateSelectedCount();
    });
  });

  // 页面加载完也统计一次
  updateSelectedCount();
});
