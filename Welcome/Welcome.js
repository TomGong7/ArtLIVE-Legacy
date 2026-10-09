document.addEventListener("DOMContentLoaded", () => {
  // ===== 首页通透顶栏 =====
  const topbar = document.querySelector(".topbar");
  if (topbar) {
    topbar.classList.add("topbar-welcome");
  }

  const timeNode = document.getElementById("current-time");

  if (timeNode) {
    const updateTime = () => {
      const now = new Date();
      timeNode.textContent = now.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    };

    updateTime();
    setInterval(updateTime, 60000);
  }

  // ===== 国画轮播 =====
  const slides = document.querySelectorAll(".painting-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  if (slides.length < 2) return;

  let currentIndex = 0;
  let timer = null;
  const INTERVAL = 5000;

  function goTo(index) {
    if (index === currentIndex || index < 0 || index >= slides.length) return;
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = index;
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function next() {
    goTo((currentIndex + 1) % slides.length);
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(next, INTERVAL);
  }

  function stopTimer() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      goTo(parseInt(dot.dataset.index, 10));
      startTimer();
    });
  });

  startTimer();
});