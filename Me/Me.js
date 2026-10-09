document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".me-nav-item");
  const sections = document.querySelectorAll(".me-section");
  const collectionCount = document.getElementById("collection-count");
  const workCount = document.getElementById("work-count");
  const postCount = document.getElementById("post-count");
  const collectionsGrid = document.getElementById("collections-grid");
  const meWorksGrid = document.getElementById("me-works-grid");
  const mePostsList = document.getElementById("me-posts-list");
  const meLikedList = document.getElementById("me-liked-list");
  const saveSettings = document.getElementById("save-settings");
  const settingsName = document.getElementById("settings-name");
  const settingsBio = document.getElementById("settings-bio");
  const settingsAvatar = document.getElementById("settings-avatar");
  const toastContainer = document.getElementById("me-toast");
  const confirmOverlay = document.getElementById("me-confirm");
  const confirmMsg = document.getElementById("me-confirm-msg");
  const confirmCancel = document.getElementById("me-confirm-cancel");
  const confirmOk = document.getElementById("me-confirm-ok");

  let confirmCallback = null;

  const sectionMap = {
    collections: "section-collections",
    works: "section-works",
    posts: "section-posts",
    liked: "section-liked",
    history: "section-history",
    settings: "section-settings"
  };

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((n) => n.classList.remove("active"));
      item.classList.add("active");

      const target = item.dataset.section;
      sections.forEach((s) => s.classList.add("hidden"));
      const targetSection = document.getElementById(sectionMap[target]);
      if (targetSection) {
        targetSection.classList.remove("hidden");
      }
    });
  });

  function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "me-toast";
    toast.textContent = msg;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

  function showConfirm(msg, callback) {
    confirmMsg.textContent = msg;
    confirmOverlay.classList.remove("hidden");
    document.body.classList.add("overlay-open");
    document.documentElement.classList.add("overlay-open");
    confirmCallback = callback;
  }

  confirmCancel.addEventListener("click", () => {
    confirmOverlay.classList.add("hidden");
    document.body.classList.remove("overlay-open");
    document.documentElement.classList.remove("overlay-open");
    confirmCallback = null;
  });

  confirmOk.addEventListener("click", () => {
    confirmOverlay.classList.add("hidden");
    document.body.classList.remove("overlay-open");
    document.documentElement.classList.remove("overlay-open");
    if (confirmCallback) confirmCallback();
    confirmCallback = null;
  });

  function formatDate(ts) {
    if (!ts) return "";
    const d = new Date(ts);
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }

  function loadCollections() {
    const collections = JSON.parse(localStorage.getItem("artstudio_collections") || "[]");
    collectionCount.textContent = collections.length;

    if (collections.length === 0) {
      collectionsGrid.innerHTML = `
        <div class="me-empty">
          <p>还没有收藏任何作品</p>
          <span>去画廊发现你喜欢的作品吧</span>
        </div>`;
      return;
    }

    collectionsGrid.innerHTML = collections
      .map(
        (c, i) => `
      <div class="me-collection-card" data-index="${i}">
        <button class="me-card-remove" data-action="remove-collection" data-index="${i}" title="取消收藏">&times;</button>
        <div class="card-img">${c.emoji || "画"}</div>
        <div class="card-info">
          <h4>${c.title}</h4>
          <span>${c.author}</span>
          ${c.date ? '<span class="card-date">' + formatDate(c.date) + '</span>' : ""}
        </div>
      </div>`
      )
      .join("");

    collectionsGrid.querySelectorAll(".me-card-remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        const item = collections[idx];
        showConfirm("确认取消收藏「" + (item.title || "作品") + "」？", () => {
          collections.splice(idx, 1);
          localStorage.setItem("artstudio_collections", JSON.stringify(collections));
          loadCollections();
          showToast("已取消收藏");
        });
      });
    });
  }

  function loadWorks() {
    const works = JSON.parse(localStorage.getItem("artstudio_works") || "[]");
    workCount.textContent = works.length;

    if (works.length === 0) {
      meWorksGrid.innerHTML = `
        <div class="me-empty">
          <p>还没有保存作品</p>
          <span>去工坊开始创作吧</span>
        </div>`;
      return;
    }

    meWorksGrid.innerHTML = works
      .map(
        (w, i) => `
      <div class="me-collection-card" data-index="${i}">
        <button class="me-card-remove" data-action="remove-work" data-index="${i}" title="删除作品">&times;</button>
        <img src="${w.data || w}" alt="作品 ${i + 1}" style="width:100%;aspect-ratio:4/3;object-fit:contain;background:#fffefb;" />
        <div class="card-info">
          <h4>作品 ${i + 1}</h4>
          <span>工坊创作</span>
          ${w.date ? '<span class="card-date">' + formatDate(w.date) + '</span>' : ""}
        </div>
      </div>`
      )
      .join("");

    meWorksGrid.querySelectorAll(".me-card-remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        showConfirm("确认删除「作品 " + (idx + 1) + "」？删除后不可恢复。", () => {
          works.splice(idx, 1);
          localStorage.setItem("artstudio_works", JSON.stringify(works));
          loadWorks();
          showToast("作品已删除");
        });
      });
    });
  }

  function loadPosts() {
    const posts = JSON.parse(localStorage.getItem("artstudio_posts") || "[]");
    postCount.textContent = posts.length;

    if (posts.length === 0) {
      mePostsList.innerHTML = `
        <div class="me-empty">
          <p>还没有发布帖子</p>
          <span>去社区分享你的想法吧</span>
        </div>`;
      return;
    }

    mePostsList.innerHTML = posts
      .map(
        (p, i) => `
      <div class="me-post-card" data-index="${i}">
        <div class="me-post-card-header">
          <div>
            <h4>${p.title}</h4>
            <p>${p.body.substring(0, 100)}${p.body.length > 100 ? "…" : ""}</p>
            <div class="post-meta">
              ${p.date ? '<span>' + formatDate(p.date) + '</span>' : ""}
              <span>${p.likes || 0} 赞</span>
              <span>${p.comments || 0} 评论</span>
            </div>
          </div>
          <div class="me-post-card-actions">
            <button class="btn-post-edit" data-index="${i}">编辑</button>
            <button class="btn-post-delete" data-index="${i}">删除</button>
          </div>
        </div>
      </div>`
      )
      .join("");

    mePostsList.querySelectorAll(".btn-post-delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.index);
        const post = posts[idx];
        showConfirm("确认删除帖子「" + (post.title || "无标题") + "」？删除后不可恢复。", () => {
          posts.splice(idx, 1);
          localStorage.setItem("artstudio_posts", JSON.stringify(posts));
          loadPosts();
          showToast("帖子已删除");
        });
      });
    });

    mePostsList.querySelectorAll(".btn-post-edit").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.index);
        const post = posts[idx];
        const newTitle = prompt("编辑标题", post.title);
        if (newTitle === null) return;
        const newBody = prompt("编辑内容", post.body);
        if (newBody === null) return;
        posts[idx].title = newTitle.trim() || post.title;
        posts[idx].body = newBody.trim() || post.body;
        localStorage.setItem("artstudio_posts", JSON.stringify(posts));
        loadPosts();
        showToast("帖子已更新");
      });
    });
  }

  function loadLiked() {
    const posts = JSON.parse(localStorage.getItem("artstudio_posts") || "[]");
    const likedPosts = posts.filter((p) => p.liked);

    if (likedPosts.length === 0) {
      meLikedList.innerHTML = `
        <div class="me-empty">
          <p>还没有点赞任何帖子</p>
          <span>去社区发现精彩内容吧</span>
        </div>`;
      return;
    }

    meLikedList.innerHTML = likedPosts
      .map(
        (p) => `
      <div class="me-post-card">
        <div class="me-post-card-header">
          <div>
            <h4>${p.title}</h4>
            <p>${p.body.substring(0, 100)}${p.body.length > 100 ? "…" : ""}</p>
            <div class="post-meta">
              ${p.date ? '<span>' + formatDate(p.date) + '</span>' : ""}
              <span>${p.likes || 0} 赞</span>
              <span>${p.comments || 0} 评论</span>
            </div>
          </div>
        </div>
      </div>`
      )
      .join("");
  }

  loadCollections();
  loadWorks();
  loadPosts();
  loadLiked();
  loadHistory();

  const clearHistoryBtn = document.getElementById("clear-history");
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
      const history = JSON.parse(localStorage.getItem("artstudio_history") || "[]");
      if (history.length === 0) return;
      showConfirm("确认清空所有历史记录吗？此操作不可撤销。", () => {
        localStorage.removeItem("artstudio_history");
        loadHistory();
        showToast("历史记录已清空");
      });
    });
  }

  saveSettings.addEventListener("click", () => {
    const name = settingsName.value.trim();
    const bio = settingsBio.value.trim();
    const avatarChar = settingsAvatar.value.trim() || name.charAt(0) || "墨";

    if (!name) {
      showToast("用户名不能为空");
      return;
    }

    localStorage.setItem("artstudio_profile", JSON.stringify({ name, bio, avatar: avatarChar }));

    const avatar = document.querySelector(".me-avatar");
    const nameEl = document.querySelector(".me-avatar-section .title-sm");
    const bioEl = document.querySelector(".me-bio");

    if (avatar) avatar.textContent = avatarChar;
    if (nameEl) nameEl.textContent = name;
    if (bioEl) bioEl.textContent = bio || "国风艺术爱好者";

    showToast("设置已保存");
  });

  // Password change
  const changePassword = document.getElementById("change-password");
  const settingsPassword = document.getElementById("settings-password");
  if (changePassword && settingsPassword) {
    changePassword.addEventListener("click", () => {
      const pw = settingsPassword.value.trim();
      if (!pw) {
        showToast("请输入新密码");
        return;
      }
      if (pw.length < 6) {
        showToast("密码长度不能少于6位");
        return;
      }
      localStorage.setItem("artstudio_password", pw);
      settingsPassword.value = "";
      showToast("密码已修改");
    });
  }

  // Logout
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      showConfirm("确认退出登录？", () => {
        localStorage.removeItem("artstudio_user");
        window.location.href = "../Login/Login.html";
      });
    });
  }

  // Switch account
  const switchAccountBtn = document.getElementById("switch-account-btn");
  if (switchAccountBtn) {
    switchAccountBtn.addEventListener("click", () => {
      showConfirm("切换账号将清除当前登录状态，是否继续？", () => {
        localStorage.removeItem("artstudio_user");
        window.location.href = "../Login/Login.html";
      });
    });
  }

  const profile = JSON.parse(localStorage.getItem("artstudio_profile"));
  if (profile) {
    const avatar = document.querySelector(".me-avatar");
    const nameEl = document.querySelector(".me-avatar-section .title-sm");
    const bioEl = document.querySelector(".me-bio");
    if (avatar && profile.avatar) avatar.textContent = profile.avatar;
    else if (avatar && profile.name) avatar.textContent = profile.name.charAt(0);
    if (nameEl && profile.name) nameEl.textContent = profile.name;
    if (bioEl && profile.bio) bioEl.textContent = profile.bio;
    if (settingsName && profile.name) settingsName.value = profile.name;
    if (settingsBio && profile.bio) settingsBio.value = profile.bio;
    if (settingsAvatar && profile.avatar) settingsAvatar.value = profile.avatar;
  }

  function formatTime(ts) {
    if (!ts) return "";
    const d = new Date(ts);
    const now = new Date();
    const diff = now - d;
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (mins < 1) return "刚刚";
    if (mins < 60) return mins + "分钟前";
    if (hours < 24) return hours + "小时前";
    if (days < 7) return days + "天前";
    return d.getFullYear() + "/" + String(d.getMonth() + 1).padStart(2, "0") + "/" + String(d.getDate()).padStart(2, "0");
  }

  function loadHistory() {
    const historyList = document.getElementById("me-history-list");
    if (!historyList) return;

    const history = JSON.parse(localStorage.getItem("artstudio_history") || "[]");
    const clearBtn = document.getElementById("clear-history");

    if (history.length === 0) {
      historyList.innerHTML = `
        <div class="me-empty">
          <p>还没有浏览记录</p>
          <span>去画廊和工坊探索吧</span>
        </div>`;
      if (clearBtn) clearBtn.disabled = true;
      return;
    }

    if (clearBtn) clearBtn.disabled = false;

    historyList.innerHTML = history
      .slice(0, 20)
      .map(
        (h) => `
      <div class="me-post-card">
        <div class="me-post-card-header">
          <div>
            <h4>${h.title}</h4>
            <p>${h.type === "gallery" ? "浏览了画廊作品" : h.type === "workshop" ? "创作了" + h.subtype + "作品" : h.type === "knowledge" ? "阅读了知识条目" : ""}</p>
            <div class="post-meta">
              <span>${formatTime(h.time)}</span>
            </div>
          </div>
        </div>
      </div>`
      )
      .join("");
  }
});