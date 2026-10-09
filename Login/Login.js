document.addEventListener("DOMContentLoaded", () => {
  const ADMIN_ACCOUNT = "Admin";
  const ADMIN_PASSWORD = "12345678";

  const tabs = document.querySelectorAll(".login-tab");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const passwordToggles = document.querySelectorAll(".password-toggle");
  const headerTitle = document.getElementById("login-title");
  const headerSubtitle = document.getElementById("login-subtitle");

  let activeMode = "login";
  let currentStep = 1;
  let totalSteps = 2;

  function showError(message) {
    const errorId = activeMode === "login" ? "login-error" : "register-error";
    const errorEl = document.getElementById(errorId);
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
    // 重新触发动画
    errorEl.style.animation = "none";
    void errorEl.offsetWidth;
    errorEl.style.animation = "";
    clearTimeout(errorEl._timeout);
    errorEl._timeout = setTimeout(() => {
      errorEl.classList.add("hidden");
    }, 3000);
  }

  function showToast(message, isError = false) {
    const toast = document.createElement("div");
    toast.className = "toast" + (isError ? " error" : "");
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }

  function getActiveIndicator() {
    return activeMode === "login"
      ? document.getElementById("login-step-indicator")
      : document.getElementById("register-step-indicator");
  }

  function getActivePanels() {
    return activeMode === "login"
      ? document.getElementById("login-step-panels")
      : document.getElementById("register-step-panels");
  }

  // ===== 选项卡切换 =====
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.tab;
      if (target === "login") {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        activeMode = "login";
        totalSteps = 2;
        if (headerTitle) headerTitle.textContent = "欢迎回来";
        if (headerSubtitle) headerSubtitle.textContent = "登录你的账号";
      } else {
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
        activeMode = "register";
        totalSteps = 3;
        if (headerTitle) headerTitle.textContent = "加入我们";
        if (headerSubtitle) headerSubtitle.textContent = "只需三步，开启你的艺术之旅";
      }
      resetSteps();
    });
  });

  // ===== 密码可见切换 =====
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = toggle.parentElement.querySelector("input");
      if (!input) return;
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      toggle.querySelector(".toggle-icon").innerHTML = isPassword
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
    });
  });

  // ===== 步骤导航 =====
  function resetSteps() {
    currentStep = 1;
    updateStepUI(1);
  }

  function updateStepUI(step) {
    const indicator = getActiveIndicator();
    const panels = getActivePanels();
    if (!indicator || !panels) return;

    const dots = indicator.querySelectorAll(".step-dot");
    const lines = indicator.querySelectorAll(".step-line");

    dots.forEach((dot) => {
      const dotStep = parseInt(dot.dataset.step);
      dot.classList.remove("active", "done");
      if (dotStep < step) dot.classList.add("done");
      if (dotStep === step) dot.classList.add("active");
    });

    lines.forEach((line) => {
      const lineStep = parseInt(line.dataset.line);
      line.classList.toggle("done", lineStep < step);
    });

    const panelEls = panels.querySelectorAll(".step-panel");
    panelEls.forEach((panel) => {
      const panelStep = parseInt(panel.dataset.step);
      if (panelStep === step) {
        panel.classList.add("active");
        panel.classList.remove("slide-out");
      } else {
        panel.classList.remove("active");
        panel.classList.remove("slide-out");
      }
    });

    const activePanel = panels.querySelector(".step-panel.active");
    if (activePanel) {
      const firstInput = activePanel.querySelector("input");
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }
  }

  function goToStep(step) {
    if (step < 1 || step > totalSteps) return;

    const panels = getActivePanels();
    if (!panels) return;

    const currentPanel = panels.querySelector(`.step-panel[data-step="${currentStep}"]`);
    if (currentPanel) {
      currentPanel.classList.add("slide-out");
    }

    setTimeout(() => {
      currentStep = step;
      updateStepUI(step);
    }, 200);
  }

  // ===== 登录验证 =====
  function validateLoginStep1() {
    const email = document.getElementById("login-email").value.trim();
    if (!email) {
      showError("请输入账号");
      return false;
    }
    return true;
  }

  function validateLoginSubmit() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email) {
      showError("请输入账号");
      return false;
    }
    if (!password) {
      showError("请输入密码");
      return false;
    }

    if (email === ADMIN_ACCOUNT && password === ADMIN_PASSWORD) {
      localStorage.setItem("artstudio_user", JSON.stringify({ account: email, role: "admin" }));
      showToast("管理员登录成功，即将跳转…");
      setTimeout(() => {
        window.location.href = "../Welcome/Welcome.html";
      }, 1000);
      return true;
    } else {
      showError("账号或密码错误");
      return false;
    }
  }

  // ===== 注册验证 =====
  function validateRegisterStep1() {
    const name = document.getElementById("register-name").value.trim();
    if (!name) {
      showError("请输入用户名");
      return false;
    }
    if (name.length < 2) {
      showError("用户名至少需要2个字符");
      return false;
    }
    return true;
  }

  function validateRegisterStep2() {
    const password = document.getElementById("register-password").value;
    const confirm = document.getElementById("register-confirm").value;

    if (!password) {
      showError("请设置密码");
      return false;
    }
    if (password.length < 6) {
      showError("密码至少需要6位");
      return false;
    }
    if (!confirm) {
      showError("请确认密码");
      return false;
    }
    if (password !== confirm) {
      showError("两次密码输入不一致");
      return false;
    }
    return true;
  }

  function populateReview() {
    const name = document.getElementById("register-name").value.trim();
    const password = document.getElementById("register-password").value;
    document.getElementById("review-name").textContent = name;
    document.getElementById("review-password").textContent = "•".repeat(Math.min(password.length, 12));
  }

  function validateRegisterSubmit() {
    const name = document.getElementById("register-name").value.trim();
    const password = document.getElementById("register-password").value;
    const confirm = document.getElementById("register-confirm").value;

    if (!name || !password || password !== confirm) {
      showError("注册信息不完整，请返回检查");
      return false;
    }

    showToast("注册成功，即将跳转…");
    setTimeout(() => {
      window.location.href = "../Welcome/Welcome.html";
    }, 1000);
    return true;
  }

  // ===== 统一步骤按钮事件（事件委托） =====
  document.addEventListener("click", (e) => {
    // 下一步
    const nextBtn = e.target.closest(".step-next");
    if (nextBtn) {
      const nextStep = parseInt(nextBtn.dataset.next);

      if (activeMode === "login") {
        if (currentStep === 1 && !validateLoginStep1()) return;
      } else {
        if (currentStep === 1 && !validateRegisterStep1()) return;
        if (currentStep === 2 && !validateRegisterStep2()) return;
        if (nextStep === 3) populateReview();
      }

      goToStep(nextStep);
      return;
    }

    // 上一步
    const prevBtn = e.target.closest(".step-prev");
    if (prevBtn) {
      const prevStep = parseInt(prevBtn.dataset.prev);
      goToStep(prevStep);
      return;
    }

    // 登录提交
    if (e.target.closest("#login-submit")) {
      e.preventDefault();
      validateLoginSubmit();
      return;
    }

    // 注册提交
    if (e.target.closest("#register-submit")) {
      e.preventDefault();
      validateRegisterSubmit();
      return;
    }
  });

  // ===== 键盘导航：Enter 跳到下一步 =====
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if (activeMode === "login" && currentStep === 2) return;

    const input = e.target.closest("input");
    if (!input) return;

    const panel = input.closest(".step-panel");
    if (!panel || !panel.classList.contains("active")) return;

    e.preventDefault();
    const nextBtn = panel.querySelector(".step-next");
    if (nextBtn) nextBtn.click();
  });

  // ===== 登录表单 Enter 提交 =====
  document.getElementById("login-password")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const submitBtn = document.getElementById("login-submit");
      if (submitBtn) submitBtn.click();
    }
  });
});