document.addEventListener("DOMContentLoaded", () => {
  const artworks = [
    {
      id: 1,
      title: "溪山行旅图",
      author: "范宽（北宋）",
      category: "landscape",
      emoji: "山",
      desc: "北宋山水画的巅峰之作，以雄浑壮阔的笔触描绘了北方山水的苍茫气势。主峰耸立，飞瀑如练，行旅商队穿行于山间小道，意境深远。"
    },
    {
      id: 2,
      title: "清明上河图",
      author: "张择端（北宋）",
      category: "figure",
      emoji: "清",
      desc: "描绘北宋都城汴京清明时节的繁华景象，长卷中人物、舟车、建筑等细节丰富，是中国古代风俗画的巅峰之作。"
    },
    {
      id: 3,
      title: "墨竹图",
      author: "文同（北宋）",
      category: "flower",
      emoji: "竹",
      desc: "以书法笔意入画，竹竿劲挺，竹叶潇洒，将文人画的精神气质表现得淋漓尽致，是墨竹题材的经典之作。"
    },
    {
      id: 4,
      title: "兰亭序",
      author: "王羲之（东晋）",
      category: "calligraphy",
      emoji: "书",
      desc: "天下第一行书，笔势委婉含蓄，遒美健秀。全篇324字，章法自然，气韵生动，是书法艺术的至高典范。"
    },
    {
      id: 5,
      title: "富春山居图",
      author: "黄公望（元代）",
      category: "landscape",
      emoji: "水",
      desc: "描绘富春江两岸初秋景色，笔墨苍简清润，意境空灵悠远。全卷以披麻皴法勾勒山川脉络，被誉为画中之兰亭。"
    },
    {
      id: 6,
      title: "簪花仕女图",
      author: "周昉（唐代）",
      category: "figure",
      emoji: "仕",
      desc: "描绘唐代宫廷贵妇的闲适生活，线条流畅，设色浓丽，人物体态丰腴，展现了盛唐气象与仕女画的独特魅力。"
    },
    {
      id: 7,
      title: "出水芙蓉图",
      author: "佚名（南宋）",
      category: "flower",
      emoji: "荷",
      desc: "以工笔重彩绘就一朵盛开的荷花，花瓣层层叠叠，设色清丽雅致，于方寸之间展现生命的华美与纯净。"
    },
    {
      id: 8,
      title: "祭侄文稿",
      author: "颜真卿（唐代）",
      category: "calligraphy",
      emoji: "祭",
      desc: "天下第二行书，于极度悲愤中一气呵成，笔墨浓淡干湿变化丰富，情感真挚感人，是书法与情感完美融合的杰作。"
    },
    {
      id: 9,
      title: "墨韵·新生",
      author: "徐冰（当代）",
      category: "modern",
      emoji: "墨",
      desc: "以传统水墨技法结合当代艺术语言，探索文字与图像的边界，在黑白之间构建出全新的视觉思考空间。"
    },
    {
      id: 10,
      title: "千里江山图",
      author: "王希孟（北宋）",
      category: "landscape",
      emoji: "青",
      desc: "青绿山水画的巅峰之作，以矿物颜料层层渲染，山峦叠嶂，江河浩渺，色彩绚丽而不失雅致，气象万千。"
    },
    {
      id: 11,
      title: "韩熙载夜宴图",
      author: "顾闳中（五代）",
      category: "figure",
      emoji: "宴",
      desc: "描绘南唐大臣韩熙载夜宴宾客的场景，以连环画式构图展现听乐、观舞、休息、清吹、送别五段，人物神态各异。"
    },
    {
      id: 12,
      title: "寒雀图",
      author: "崔白（北宋）",
      category: "flower",
      emoji: "雀",
      desc: "以枯枝寒雀为题材，笔法疏放灵动，雀鸟姿态各异，栩栩如生。在萧瑟中透出无限生机，是花鸟画的革新之作。"
    }
  ];

  const grid = document.getElementById("gallery-grid");
  const searchInput = document.getElementById("gallery-search");
  const filterChips = document.querySelectorAll(".filter-chip");
  const emptyState = document.getElementById("gallery-empty");

  let currentFilter = "all";
  let currentSearch = "";

  const categoryLabels = {
    landscape: "山水",
    figure: "人物",
    flower: "花鸟",
    calligraphy: "书法",
    modern: "新水墨"
  };

  function renderGallery() {
    const filtered = artworks.filter((art) => {
      const matchFilter = currentFilter === "all" || art.category === currentFilter;
      const keyword = currentSearch.toLowerCase();
      const matchSearch =
        !keyword ||
        art.title.toLowerCase().includes(keyword) ||
        art.author.toLowerCase().includes(keyword) ||
        art.desc.toLowerCase().includes(keyword);
      return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState.classList.remove("hidden");
      return;
    }

    emptyState.classList.add("hidden");
    grid.innerHTML = filtered
      .map(
        (art, i) => `
      <article class="art-card" data-id="${art.id}" style="animation: cardStagger 0.4s ease-out ${i * 0.06}s both;">
        <div class="art-card-image ${art.category}">
          <span class="art-emoji">${art.emoji}</span>
          <span class="art-card-badge">${categoryLabels[art.category] || art.category}</span>
        </div>
        <div class="art-card-body">
          <h3>${art.title}</h3>
          <p class="art-author">${art.author}</p>
          <p class="art-desc">${art.desc}</p>
        </div>
      </article>
    `
      )
      .join("");

    grid.querySelectorAll(".art-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = parseInt(card.dataset.id);
        const art = artworks.find((a) => a.id === id);
        if (art) {
          // Record history
          const history = JSON.parse(localStorage.getItem("artstudio_history") || "[]");
          history.unshift({ title: art.title, type: "gallery", time: Date.now() });
          localStorage.setItem("artstudio_history", JSON.stringify(history.slice(0, 50)));
          window.location.href = "Detail.html?id=" + id;
        }
      });
    });
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.dataset.filter;
      renderGallery();
    });
  });

  let searchTimeout;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentSearch = searchInput.value.trim();
      renderGallery();
    }, 300);
  });

  // Guide FAB and panel
  const guideFab = document.getElementById("guide-fab");
  const guidePanel = document.getElementById("guide-panel");
  const guidePanelBody = document.getElementById("guide-panel-body");
  const guidePanelContent = document.getElementById("guide-panel-content");
  let guideActive = false;

  if (guideFab && guidePanel) {
    guideFab.addEventListener("click", () => {
      guideActive = !guideActive;
      guideFab.classList.toggle("active", guideActive);
      if (guideActive) {
        guidePanel.classList.remove("hidden", "closing");
        guidePanelContent.innerHTML =
          '<div class="guide-panel-placeholder"><p>将鼠标悬停在作品上</p><span>即可查看作品简介</span></div>';
        guidePanelContent.style.opacity = "1";
        guidePanelContent.style.transform = "translateY(0)";
      } else {
        guidePanel.classList.add("closing");
        setTimeout(() => {
          guidePanel.classList.remove("closing");
          guidePanel.classList.add("hidden");
        }, 250);
      }
    });
  }

  // Hover guide on art cards
  let hoverTimeout = null;

  function swapContent(html) {
    guidePanelContent.style.opacity = "0";
    guidePanelContent.style.transform = "translateY(6px)";
    if (hoverTimeout) clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      guidePanelContent.innerHTML = html;
      // Measure new content height and animate
      const newHeight = guidePanelContent.scrollHeight;
      guidePanelBody.style.height = guidePanelContent.scrollHeight + "px";
      requestAnimationFrame(() => {
        guidePanelContent.style.opacity = "1";
        guidePanelContent.style.transform = "translateY(0)";
      });
    }, 250);
  }

  grid.addEventListener("mouseover", (e) => {
    if (!guideActive) return;
    const card = e.target.closest(".art-card");
    if (!card) return;
    const id = parseInt(card.dataset.id);
    const art = artworks.find((a) => a.id === id);
    if (!art) return;

    swapContent(
      '<div class="guide-panel-art-emoji">' + art.emoji + '</div>' +
      '<h4 class="guide-panel-art-title">' + art.title + '</h4>' +
      '<p class="guide-panel-art-author">' + art.author + '</p>' +
      '<p class="guide-panel-art-desc">' + art.desc + '</p>' +
      '<span class="guide-panel-art-cat">' + (categoryLabels[art.category] || art.category) + '</span>'
    );
  });

  grid.addEventListener("mouseout", (e) => {
    if (!guideActive) return;
    const card = e.target.closest(".art-card");
    if (!card) return;
    const related = e.relatedTarget;
    if (related && related.closest && related.closest(".art-card")) return;

    swapContent(
      '<div class="guide-panel-placeholder"><p>将鼠标悬停在作品上</p><span>即可查看作品简介</span></div>'
    );
  });

  renderGallery();

  // Daily recommendation
  const dailyCard = document.getElementById("daily-card");
  const dailyDate = document.getElementById("daily-date");
  if (dailyCard && dailyDate) {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const dailyArt = artworks[dayOfYear % artworks.length];
    dailyDate.textContent = today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日";
    dailyCard.innerHTML =
      '<div class="daily-recommend-img ' + dailyArt.category + '">' + dailyArt.emoji + '</div>' +
      '<div class="daily-recommend-info"><h4>' + dailyArt.title + '</h4><p>' + dailyArt.author + " · " + dailyArt.desc.substring(0, 60) + "…</p></div>";
    dailyCard.addEventListener("click", () => {
      const history = JSON.parse(localStorage.getItem("artstudio_history") || "[]");
      history.unshift({ title: dailyArt.title, type: "gallery", time: Date.now() });
      localStorage.setItem("artstudio_history", JSON.stringify(history.slice(0, 50)));
      window.location.href = "Detail.html?id=" + dailyArt.id;
    });
  }
});