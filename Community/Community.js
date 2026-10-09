document.addEventListener("DOMContentLoaded", () => {
  const waterfall = document.getElementById("waterfall");
  const feedEmpty = document.getElementById("feed-empty");
  const searchInput = document.getElementById("search-input");
  const categoryTabs = document.getElementById("category-tabs");
  const publishFab = document.getElementById("publish-fab");
  const publishOverlay = document.getElementById("publish-overlay");
  const publishClose = document.getElementById("publish-close");
  const submitPublish = document.getElementById("submit-publish");
  const publishTitle = document.getElementById("publish-title");
  const publishBody = document.getElementById("publish-body");
  const publishCategory = document.getElementById("publish-category");
  const coverPicker = document.getElementById("cover-picker");
  const detailOverlay = document.getElementById("detail-overlay");
  const detailClose = document.getElementById("detail-close");

  let selectedCover = "landscape";
  let currentCategory = "all";
  let currentSearch = "";

  const avatars = ["\u58A8", "\u5C71", "\u6C34", "\u7AF9", "\u862D", "\u677E", "\u96F2", "\u98A8", "\u6708", "\u96EA", "\u786F", "\u6CC9", "\u9DB4", "\u6885"];
  const authors = [
    "\u58A8\u5BA2\u5C71\u4EBA", "\u6E05\u98CE\u660E\u6708", "\u786F\u7530\u8015\u8005", "\u7AF9\u6797\u542C\u96E8", "\u677E\u98CE\u9601\u4E3B",
    "\u6C34\u58A8\u4E39\u9752", "\u5170\u4EAD\u5C45\u58EB", "\u4E91\u6C34\u7985\u5FC3", "\u6708\u4E0B\u72EC\u914C", "\u96EA\u6CE5\u9E3F\u722A",
    "\u5BD2\u6C5F\u9493\u96EA", "\u6EAA\u5C71\u884C\u65C5", "\u6885\u82B1\u4E09\u5F04", "\u9E64\u9E23\u4E5D\u768B"
  ];

  const coverHeights = ["short", "medium", "tall"];

  const coverMap = {
    landscape: "山",
    mountain: "峰",
    flower: "花",
    bamboo: "竹",
    brush: "墨",
    wave: "水",
    bird: "鸟",
    tower: "阁"
  };

  const seedPosts = [
    {
      author: "客居山人", avatar: "客", category: "山水画", cover: coverMap.landscape, coverHeight: "medium",
      title: "\u4E34\u6479\u300A\u5BCC\u6625\u5C71\u5C45\u56FE\u300B\u7684\u4E00\u70B9\u5FC3\u5F97",
      body: "\u6700\u8FD1\u5728\u4E34\u6479\u9EC4\u516C\u671B\u7684\u300A\u5BCC\u6625\u5C71\u5C45\u56FE\u300B\uFF0C\u6700\u5927\u7684\u611F\u53D7\u662F\u62AB\u9EBB\u7A34\u7684\u8FD0\u7528\u3002\u770B\u4F3C\u968F\u610F\u7684\u7EBF\u6761\uFF0C\u5B9E\u5219\u6BCF\u4E00\u7B14\u90FD\u6709\u8BB2\u7A76\u3002\u7EBF\u6761\u7684\u758F\u5BC6\u3001\u6D53\u6DE1\u3001\u5E72\u6E7F\u53D8\u5316\uFF0C\u6784\u6210\u4E86\u753B\u9762\u7684\u8282\u594F\u611F\u3002\u5EFA\u8BAE\u521D\u5B66\u8005\u5148\u4ECE\u5C40\u90E8\u5165\u624B\uFF0C\u4F53\u4F1A\u7B14\u6CD5\u540E\u518D\u5C1D\u8BD5\u6574\u4F53\u6784\u56FE\u3002",
      time: "2\u5C0F\u65F6\u524D", likes: 24, comments: 8, collects: 15, liked: false, collected: false
    },
    {
      author: "清风明月", avatar: "月", category: "诗词", cover: coverMap.flower, coverHeight: "tall",
      title: "\u4EE5\u8BD7\u5165\u753B\u2014\u2014\u8C08\u8C08\u6211\u7684\u521B\u4F5C\u4F53\u4F1A",
      body: "\u6700\u8FD1\u5C1D\u8BD5\u5C06\u738B\u7EF4\u7684\u300A\u5C71\u5C45\u79CB\u669D\u300B\u878D\u5165\u6C34\u58A8\u521B\u4F5C\u4E2D\u3002\u201C\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u201D\u2014\u2014\u6211\u9009\u62E9\u7528\u6DE1\u58A8\u6E32\u67D3\u8FDC\u5C71\uFF0C\u4EE5\u7559\u767D\u8868\u73B0\u96E8\u540E\u521D\u6674\u7684\u7A7A\u7075\u611F\u3002\u8BD7\u753B\u672C\u4E00\u5F8B\uFF0C\u5728\u521B\u4F5C\u4E2D\u66F4\u80FD\u4F53\u4F1A\u5230\u8FD9\u79CD\u76F8\u901A\u4E4B\u7F8E\u3002",
      time: "5\u5C0F\u65F6\u524D", likes: 18, comments: 5, collects: 9, liked: false, collected: false
    },
    {
      author: "福田耕者", avatar: "田", category: "水墨", cover: coverMap.wave, coverHeight: "short",
      title: "\u65B0\u5165\u624B\u4E00\u65B9\u7AEF\u786F\uFF0C\u5206\u4EAB\u4E0B\u4F7F\u7528\u611F\u53D7",
      body: "\u5728\u8087\u5E86\u6DD8\u5230\u4E00\u65B9\u8001\u5751\u7AEF\u786F\uFF0C\u77F3\u8D28\u6E29\u6DA6\u7EC6\u817B\uFF0C\u53D1\u58A8\u6781\u5FEB\u3002\u7528\u5B83\u4E0E\u4E4B\u524D\u7528\u7684\u6C59\u786F\u5BF9\u6BD4\uFF0C\u7AEF\u786F\u66F4\u9002\u5408\u5199\u5C0F\u6977\u548C\u5DE5\u7B14\u753B\u7684\u7EC6\u7EBF\uFF0C\u6C59\u786F\u5219\u66F4\u9002\u5408\u5927\u5199\u610F\u7684\u6CFC\u58A8\u3002\u5DE5\u5177\u7684\u9009\u62E9\u771F\u7684\u5F88\u5F71\u54CD\u521B\u4F5C\u4F53\u9A8C\u3002",
      time: "\u6628\u5929", likes: 32, comments: 12, collects: 20, liked: false, collected: false
    },
    {
      author: "竹林听雨", avatar: "竹", category: "花鸟画", cover: coverMap.bird, coverHeight: "medium",
      title: "\u5DE5\u7B14\u82B1\u9E1F\u5165\u95E8\u2014\u2014\u767D\u63CF\u7EBF\u6761\u7EC3\u4E60",
      body: "\u5DE5\u7B14\u82B1\u9E1F\u7684\u57FA\u7840\u662F\u767D\u63CF\u3002\u4E00\u6839\u597D\u7684\u7EBF\u6761\uFF0C\u8BB2\u7A76\u8D77\u7B14\u3001\u884C\u7B14\u3001\u6536\u7B14\u7684\u8282\u594F\u53D8\u5316\u3002\u7EC3\u4E60\u65F6\u53EF\u4EE5\u5148\u7528\u94C5\u7B14\u6253\u7A3F\uFF0C\u518D\u7528\u52FE\u7EBF\u7B14\u6162\u6162\u52FE\u52D2\u3002\u5173\u952E\u5728\u4E8E\u624B\u8981\u7A33\uFF0C\u5FC3\u8981\u9759\u3002\u63A8\u8350\u4ECE\u7B80\u5355\u7684\u82B1\u5349\u5F00\u59CB\uFF0C\u5982\u6885\u82B1\u3001\u5170\u82B1\u3002",
      time: "3\u5929\u524D", likes: 41, comments: 15, collects: 28, liked: false, collected: false
    },
    {
      author: "李风居士", avatar: "李", category: "书法", cover: coverMap.brush, coverHeight: "tall",
      title: "\u989C\u4F53\u6977\u4E66\u5165\u95E8\u2014\u2014\u4ECE\u300A\u591A\u5B9D\u5854\u7891\u300B\u5F00\u59CB",
      body: "\u989C\u771F\u537F\u7684\u6977\u4E66\u4EE5\u96C4\u6D51\u539A\u91CD\u8457\u79F0\uFF0C\u300A\u591A\u5B9D\u5854\u7891\u300B\u662F\u5176\u65E9\u671F\u4EE3\u8868\u4F5C\uFF0C\u7ED3\u6784\u4E25\u8C28\uFF0C\u7B14\u6CD5\u6E05\u6670\uFF0C\u975E\u5E38\u9002\u5408\u521D\u5B66\u8005\u3002\u7EC3\u4E60\u65F6\u6CE8\u610F\u6A2A\u7EC6\u7AD6\u7C97\u7684\u7279\u70B9\uFF0C\u4EE5\u53CA\u637E\u753B\u7684\u8695\u5934\u71D5\u5C3E\u3002\u6BCF\u5929\u575A\u6301\u4E00\u5C0F\u65F6\uFF0C\u4E09\u4E2A\u6708\u5FC5\u6709\u5C0F\u6210\u3002",
      time: "4\u5929\u524D", likes: 56, comments: 22, collects: 35, liked: false, collected: false
    },
    {
      author: "云水禅心", avatar: "云", category: "山水画", cover: coverMap.mountain, coverHeight: "short",
      title: "\u6D45\u8C08\u4E2D\u56FD\u753B\u7684\u7559\u767D\u827A\u672F",
      body: "\u201C\u8BA1\u767D\u5F53\u9ED1\u201D\u662F\u4E2D\u56FD\u753B\u6700\u91CD\u8981\u7684\u7F8E\u5B66\u539F\u5219\u4E4B\u4E00\u3002\u7559\u767D\u4E0D\u662F\u7A7A\u767D\uFF0C\u800C\u662F\u753B\u9762\u547C\u5438\u7684\u7A7A\u95F4\u3002\u516B\u5927\u5C71\u4EBA\u7684\u753B\u4E2D\uFF0C\u4E00\u9E1F\u4E00\u77F3\uFF0C\u5927\u7247\u7559\u767D\uFF0C\u5374\u8BA9\u4EBA\u611F\u5230\u5929\u5730\u8FBD\u9614\u3002\u5728\u521B\u4F5C\u4E2D\uFF0C\u8981\u6562\u4E8E\u7559\u767D\uFF0C\u5584\u4E8E\u7559\u767D\u3002",
      time: "5\u5929\u524D", likes: 67, comments: 18, collects: 42, liked: false, collected: false
    },
    {
      author: "兰汀居士", avatar: "兰", category: "工笔", cover: coverMap.flower, coverHeight: "medium",
      title: "\u5DE5\u7B14\u4ED5\u5973\u753B\u7684\u67D3\u8272\u6280\u6CD5\u8BE6\u89E3",
      body: "\u5DE5\u7B14\u4ED5\u5973\u753B\u7684\u67D3\u8272\u8BB2\u7A76\u201C\u4E09\u77FE\u4E5D\u67D3\u201D\u3002\u5148\u4EE5\u6DE1\u58A8\u52FE\u7EBF\uFF0C\u518D\u7528\u6DE1\u8272\u5C42\u5C42\u6E32\u67D3\uFF0C\u6BCF\u67D3\u4E00\u4E24\u904D\u5C31\u8981\u5237\u4E00\u5C42\u77FE\u6C34\u56FA\u5B9A\u989C\u8272\u3002\u9762\u90E8\u7528\u201C\u5F00\u8138\u201D\u6CD5\uFF0C\u5148\u67D3\u4E24\u988A\uFF0C\u518D\u70B9\u5507\uFF0C\u6700\u540E\u5F00\u773C\u3002\u6574\u4E2A\u8FC7\u7A0B\u9700\u8981\u6781\u5927\u7684\u8010\u5FC3\u3002",
      time: "1\u5468\u524D", likes: 39, comments: 10, collects: 25, liked: false, collected: false
    },
    {
      author: "春江钓雪", avatar: "春", category: "篆刻", cover: coverMap.brush, coverHeight: "short",
      title: "\u7BC6\u523B\u5165\u95E8\u2014\u2014\u4ECE\u6C49\u5370\u4E34\u6479\u5F00\u59CB",
      body: "\u5B66\u4E60\u7BC6\u523B\uFF0C\u4ECE\u4E34\u6479\u6C49\u5370\u5165\u624B\u662F\u6700\u597D\u7684\u9009\u62E9\u3002\u6C49\u5370\u5E03\u5C40\u5300\u79F0\uFF0C\u7EBF\u6761\u6D51\u539A\uFF0C\u662F\u7BC6\u523B\u7684\u6B63\u5B97\u3002\u63A8\u8350\u5148\u4E34\u6479\u201C\u519B\u53F8\u9A6C\u5370\u201D\u201C\u5047\u53F8\u9A6C\u5370\u201D\u7B49\u7ECF\u5178\u6C49\u5370\u3002\u5DE5\u5177\u65B9\u9762\uFF0C\u521D\u5B66\u7528\u9752\u7530\u77F3\u5373\u53EF\uFF0C\u4EF7\u683C\u5B9E\u60E0\u4E14\u6613\u4E8E\u4E0B\u5200\u3002",
      time: "1\u5468\u524D", likes: 28, comments: 7, collects: 18, liked: false, collected: false
    }
  ];

  let posts;
  try {
    const stored = localStorage.getItem("artstudio_feed_posts");
    posts = stored ? JSON.parse(stored) : null;
  } catch (e) {
    posts = null;
  }

  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    posts = seedPosts.slice();
    localStorage.setItem("artstudio_feed_posts", JSON.stringify(posts));
  } else {
    seedPosts.forEach((s) => {
      if (!posts.some((p) => p.title === s.title && p.author === s.author)) {
        posts.push(s);
      }
    });
  }

  function savePosts() {
    try {
      localStorage.setItem("artstudio_feed_posts", JSON.stringify(posts));
    } catch (e) {
      // localStorage full or unavailable
    }
  }

  function getFilteredPosts() {
    return posts.filter((p) => {
      const matchCategory = currentCategory === "all" || p.category === currentCategory;
      const matchSearch =
        !currentSearch ||
        p.title.includes(currentSearch) ||
        p.body.includes(currentSearch) ||
        p.author.includes(currentSearch) ||
        (p.category && p.category.includes(currentSearch));
      return matchCategory && matchSearch;
    });
  }

  function getColCount() {
    const width = window.innerWidth;
    if (width >= 1200) return 4;
    if (width >= 900) return 3;
    return 2;
  }

  function renderWaterfall() {
    const filtered = getFilteredPosts();

    if (filtered.length === 0) {
      waterfall.style.display = "none";
      feedEmpty.classList.remove("hidden");
      return;
    }

    waterfall.style.display = "";
    feedEmpty.classList.add("hidden");

    const colCount = getColCount();

    var cols = [];
    for (var i = 0; i < 4; i++) {
      var col = document.getElementById("col-" + i);
      if (col) {
        col.innerHTML = "";
        if (i < colCount) {
          col.classList.remove("hidden-col");
        } else {
          col.classList.add("hidden-col");
        }
        cols.push(col);
      }
    }

    var colHeights = [];
    for (var j = 0; j < colCount; j++) {
      colHeights.push(0);
    }

    var cardIndex = 0;
    filtered.forEach(function(p) {
      var titleLines = 1;
      if (p.title) {
        var len = p.title.length;
        var colWidth = colCount <= 2 ? 14 : (colCount === 3 ? 11 : 9);
        if (len > colWidth) titleLines = 2;
      }
      var heightOrder = { short: 1.0, medium: 1.6, tall: 2.0 };
      var coverH = heightOrder[p.coverHeight] || 1.6;
      p._estHeight = coverH + titleLines * 0.35;

      var minIdx = 0;
      for (var k = 1; k < colCount; k++) {
        if (colHeights[k] < colHeights[minIdx]) {
          minIdx = k;
        }
      }
      colHeights[minIdx] += p._estHeight;
      const card = createCard(p);
      card.style.animation = "cardStagger 0.4s ease-out " + (cardIndex * 0.06) + "s both";
      cols[minIdx].appendChild(card);
      cardIndex++;
    });

    function createCard(p) {
      const card = document.createElement("div");
      card.className = "feed-card";
      card.innerHTML =
        '<div class="feed-card-cover ' + (p.coverHeight || "medium") + '" data-cover="' + (p.cover || "") + '">' +
          '<span class="feed-card-cover-char">' + (p.cover || "") + '</span>' +
        '</div>' +
        '<div class="feed-card-info">' +
          '<div class="feed-card-title-row">' +
            '<span class="feed-card-category">' + (p.category || "") + '</span>' +
            '<span class="feed-card-title">' + (p.title || "") + '</span>' +
          '</div>' +
          '<div class="feed-card-footer">' +
            '<div class="feed-card-author">' +
              '<div class="feed-card-avatar">' + (p.avatar || "") + '</div>' +
              '<span class="feed-card-name">' + (p.author || "") + '</span>' +
            '</div>' +
            '<div class="feed-card-stats">' +
              '<button class="feed-stat feed-card-like' + (p.liked ? " liked" : "") + '">' +
                (p.liked
                  ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
                  : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>') +
                ' ' + (p.likes || 0) +
              '</button>' +
              '<span class="feed-stat feed-collect-stat' + (p.collected ? " collected" : "") + '">' +
                (p.collected
                  ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> '
                  : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ') +
                (p.collects || 0) + '</span>' +
              '<span class="feed-stat"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> ' + (p.comments || 0) + '</span>' +
            '</div>' +
          '</div>' +
        '</div>';

      var cover = card.querySelector(".feed-card-cover");
      if (cover) {
        cover.addEventListener("click", function(e) {
          openDetail(p);
        });
      }

      var info = card.querySelector(".feed-card-info");
      if (info) {
        info.addEventListener("click", function() {
          openDetail(p);
        });
      }

      var likeBtn = card.querySelector(".feed-card-like");
      if (likeBtn) {
        likeBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          var postIndex = posts.indexOf(p);
          if (postIndex === -1) return;
          if (posts[postIndex].liked) {
            posts[postIndex].likes--;
            posts[postIndex].liked = false;
          } else {
            posts[postIndex].likes++;
            posts[postIndex].liked = true;
          }
          savePosts();
          renderWaterfall();
        });
      }

      var collectStat = card.querySelector(".feed-collect-stat");
      if (collectStat) {
        collectStat.addEventListener("click", function(e) {
          e.stopPropagation();
          var postIndex = posts.indexOf(p);
          if (postIndex === -1) return;
          if (posts[postIndex].collected) {
            posts[postIndex].collects--;
            posts[postIndex].collected = false;
          } else {
            posts[postIndex].collects++;
            posts[postIndex].collected = true;
          }
          savePosts();
          renderWaterfall();
        });
      }

      return card;
    }

  }

  function openDetail(p) {
    var detailCover = document.getElementById("detail-cover");
    if (detailCover) {
      detailCover.setAttribute("data-cover", p.cover || "");
      detailCover.innerHTML = '<span style="font-size:5rem;opacity:0.85">' + (p.cover || "") + '</span>';
    }

    var detailAvatar = document.getElementById("detail-avatar");
    if (detailAvatar) detailAvatar.textContent = p.avatar || "";

    var detailAuthor = document.getElementById("detail-author");
    if (detailAuthor) detailAuthor.textContent = p.author || "";

    var detailTime = document.getElementById("detail-time");
    if (detailTime) detailTime.textContent = p.time || "";

    var detailTitle = document.getElementById("detail-title");
    if (detailTitle) detailTitle.textContent = p.title || "";

    var detailBody = document.getElementById("detail-body");
    if (detailBody) detailBody.textContent = p.body || "";

    var detailLikeCount = document.getElementById("detail-like-count");
    if (detailLikeCount) detailLikeCount.textContent = p.likes || 0;

    var detailCollectCount = document.getElementById("detail-collect-count");
    if (detailCollectCount) detailCollectCount.textContent = p.collects || 0;

    var detailCommentCount = document.getElementById("detail-comment-count");
    if (detailCommentCount) detailCommentCount.textContent = p.comments || 0;

    var likeIcon = document.getElementById("detail-like-icon");
    var likeBtn = document.getElementById("detail-like");
    var collectIcon = document.getElementById("detail-collect-icon");
    var collectBtn = document.getElementById("detail-collect");

    if (likeIcon) likeIcon.innerHTML = p.liked
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    if (likeBtn) likeBtn.classList.toggle("liked", !!p.liked);
    if (collectIcon) collectIcon.innerHTML = p.collected
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    if (collectBtn) collectBtn.classList.toggle("collected", !!p.collected);

    var postIndex = posts.indexOf(p);

    if (likeBtn) {
      likeBtn.onclick = function() {
        if (postIndex === -1) return;
        if (posts[postIndex].liked) {
          posts[postIndex].likes--;
          posts[postIndex].liked = false;
        } else {
          posts[postIndex].likes++;
          posts[postIndex].liked = true;
        }
        savePosts();
        if (detailLikeCount) detailLikeCount.textContent = posts[postIndex].likes;
        if (likeIcon) likeIcon.innerHTML = posts[postIndex].liked
          ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
          : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
        if (likeBtn) likeBtn.classList.toggle("liked", posts[postIndex].liked);
        renderWaterfall();
      };
    }

    if (collectBtn) {
      collectBtn.onclick = function() {
        if (postIndex === -1) return;
        posts[postIndex].collected = !posts[postIndex].collected;
        if (posts[postIndex].collected) {
          posts[postIndex].collects = (posts[postIndex].collects || 0) + 1;
        } else {
          posts[postIndex].collects = Math.max((posts[postIndex].collects || 1) - 1, 0);
        }
        savePosts();
        if (detailCollectCount) detailCollectCount.textContent = posts[postIndex].collects;
        if (collectIcon) collectIcon.innerHTML = posts[postIndex].collected
          ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
          : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
        if (collectBtn) collectBtn.classList.toggle("collected", posts[postIndex].collected);
        renderWaterfall();
      };
    }

    // Comment submission
    var detailCommentInput = document.getElementById("detail-comment-input");
    var detailCommentSubmit = document.getElementById("detail-comment-submit");
    if (detailCommentSubmit && detailCommentInput) {
      detailCommentSubmit.onclick = function() {
        var text = detailCommentInput.value.trim();
        if (!text) return;
        if (postIndex === -1) return;
        posts[postIndex].comments = (posts[postIndex].comments || 0) + 1;
        savePosts();
        if (detailCommentCount) detailCommentCount.textContent = posts[postIndex].comments;
        detailCommentInput.value = "";
        renderWaterfall();
      };
      detailCommentInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          detailCommentSubmit.click();
        }
      });
    }

    // AI auto-comment
    var aiCommentBtn = document.getElementById("ai-comment-btn");
    if (aiCommentBtn && detailCommentInput) {
      aiCommentBtn.onclick = function() {
        var aiComments = [
          "笔法精妙，意境深远，令人叹为观止。",
          "构图巧妙，墨色层次丰富，可见功底深厚。",
          "此作颇有古人遗风，又不失时代新意。",
          "气韵生动，笔墨酣畅，值得细细品味。",
          "从这篇分享中感受到了作者对传统艺术的深刻理解。",
          "线条流畅自然，墨色浓淡相宜，颇具匠心。",
          "好文！对技法的分析很到位，受益良多。",
          "读罢此文，更添对国画艺术的敬畏之心。"
        ];
        detailCommentInput.value = aiComments[Math.floor(Math.random() * aiComments.length)];
      };
    }

    // Quote post
    var quoteBtn = document.getElementById("quote-btn");
    if (quoteBtn) {
      quoteBtn.onclick = function() {
        closeDetail();
        window.quotePost(p);
      };
    }

    detailOverlay.classList.remove("hidden");
    document.body.classList.add("overlay-open");
    document.documentElement.classList.add("overlay-open");
  }

  function closeDetail() {
    detailOverlay.classList.add("hidden");
    document.body.classList.remove("overlay-open");
    document.documentElement.classList.remove("overlay-open");
  }

  detailClose.addEventListener("click", closeDetail);
  detailOverlay.addEventListener("click", function(e) {
    if (e.target === detailOverlay) closeDetail();
  });

  searchInput.addEventListener("input", function() {
    currentSearch = searchInput.value.trim();
    renderWaterfall();
  });

  // Quote post functionality
  window.quotePost = function(post) {
    publishTitle.value = "引用 · " + post.title;
    publishBody.value = "> " + post.author + "：" + post.body.substring(0, 100) + (post.body.length > 100 ? "…" : "") + "\n\n";
    publishCategory.value = post.category || "综合";
    publishOverlay.classList.remove("hidden");
    document.body.classList.add("overlay-open");
    document.documentElement.classList.add("overlay-open");
  };

  categoryTabs.addEventListener("click", function(e) {
    if (e.target.classList.contains("feed-tab")) {
      var tabs = document.querySelectorAll(".feed-tab");
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
      }
      e.target.classList.add("active");
      currentCategory = e.target.dataset.category;
      renderWaterfall();
    }
  });

  publishFab.addEventListener("click", function() {
    publishOverlay.classList.remove("hidden");
    document.body.classList.add("overlay-open");
    document.documentElement.classList.add("overlay-open");
  });

  function closePublish() {
    publishOverlay.classList.add("hidden");
    document.body.classList.remove("overlay-open");
    document.documentElement.classList.remove("overlay-open");
    if (publishTitle) publishTitle.value = "";
    if (publishBody) publishBody.value = "";
  }

  publishClose.addEventListener("click", closePublish);
  publishOverlay.addEventListener("click", function(e) {
    if (e.target === publishOverlay) closePublish();
  });

  coverPicker.addEventListener("click", function(e) {
    if (e.target.classList.contains("feed-cover-option")) {
      var opts = document.querySelectorAll(".feed-cover-option");
      for (var i = 0; i < opts.length; i++) {
        opts[i].classList.remove("selected");
      }
      e.target.classList.add("selected");
      selectedCover = e.target.dataset.cover;
    }
  });

  submitPublish.addEventListener("click", function() {
    var title = publishTitle.value.trim();
    var body = publishBody.value.trim();

    if (!title) {
      alert("\u8BF7\u8F93\u5165\u7B14\u8BB0\u6807\u9898");
      return;
    }
    if (!body) {
      alert("\u8BF7\u8F93\u5165\u7B14\u8BB0\u5185\u5BB9");
      return;
    }

    var newPost = {
      author: authors[Math.floor(Math.random() * authors.length)],
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      category: publishCategory.value,
      cover: selectedCover,
      coverHeight: coverHeights[Math.floor(Math.random() * coverHeights.length)],
      title: title,
      body: body,
      time: "\u521A\u521A",
      likes: 0,
      comments: 0,
      collects: 0,
      liked: false,
      collected: false
    };

    posts.unshift(newPost);
    savePosts();
    closePublish();
    renderWaterfall();
  });

  renderWaterfall();

  var resizeTimeout;
  window.addEventListener("resize", function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(renderWaterfall, 200);
  });
});