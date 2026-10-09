(function () {
  const pages = [
    { key: "welcome", label: "首页", href: "../Welcome/Welcome.html" },
    { key: "gallery", label: "画廊", href: "../Gallary/Gallary.html" },
    { key: "knowledge", label: "知识库", href: "../KnowledgeBase/KnowledgeBase.html" },
    { key: "workshop", label: "工坊", href: "../Workshop/Workshop.html" },
    { key: "community", label: "社区", href: "../Community/Community.html" },
    { key: "assistant", label: "助手", href: "../Assistant/Assistant.html" },
    { key: "about", label: "关于", href: "../About/About.html" },
  ];

  const main = document.querySelector("main");
  const active = main ? main.dataset.active : "";

  const brand = '<div class="topbar-brand"><span class="topbar-brand-mark"></span><span>ArtLIVE</span></div>';

  const navLinks = pages
    .map(function (p) {
      if (p.key === active) {
        return '<span class="active disabled">' + p.label + "</span>";
      }
      return '<a href="' + p.href + '">' + p.label + "</a>";
    })
    .join("");

  const storedUser = localStorage.getItem("artstudio_user");
  const isLoggedIn = storedUser ? JSON.parse(storedUser) : null;
  const userLink = isLoggedIn ? "../Me/Me.html" : "../Login/Login.html";
  const userTitle = isLoggedIn ? "个人中心" : "登录 / 注册";

  const topbar = document.getElementById("topbar");
  if (topbar) {
    topbar.outerHTML =
      '<nav class="topbar glass-panel">' +
      brand +
      '<div class="topbar-nav">' +
      navLinks +
      "</div>" +
      '<div class="topbar-actions">' +
      '<a class="topbar-user" href="' + userLink + '" title="' + userTitle + '">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
      "</a>" +
      "</div>" +
      "</nav>";
  }
})();