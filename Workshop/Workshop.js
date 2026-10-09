document.addEventListener("DOMContentLoaded", () => {
  const inputTabs = document.querySelectorAll(".input-tab");
  const textPanel = document.getElementById("text-panel");
  const poetryPanel = document.getElementById("poetry-panel");
  const imagePanel = document.getElementById("image-panel");

  const outputTypes = document.querySelectorAll(".output-type");
  let selectedOutput = "poetry";
  let selectedInput = "text";

  const promptInput = document.getElementById("prompt-input");
  const promptTags = document.querySelectorAll(".prompt-tag");
  const generateBtn = document.getElementById("generate-btn");

  const resultPanel = document.getElementById("result-panel");
  const resultEmpty = document.getElementById("result-empty");
  const resultGrid = document.getElementById("result-grid");

  let results = [];

  resultPanel.hidden = true;

  // Input/output type conflict map
  const conflictMap = {
    poetry: "poetry"
  };

  function updateOutputAvailability() {
    const conflictOutput = conflictMap[selectedInput];
    outputTypes.forEach((btn) => {
      const outputType = btn.dataset.output;
      if (outputType === conflictOutput) {
        btn.classList.add("disabled");
        btn.disabled = true;
        if (selectedOutput === conflictOutput) {
          const nextAvailable = outputTypes.find((b) => !b.classList.contains("disabled"));
          if (nextAvailable) {
            nextAvailable.click();
          }
        }
      } else {
        btn.classList.remove("disabled");
        btn.disabled = false;
      }
    });
  }

  inputTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      inputTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      selectedInput = tab.dataset.tab;
      textPanel.classList.toggle("active", selectedInput === "text");
      poetryPanel.classList.toggle("active", selectedInput === "poetry");
      imagePanel.classList.toggle("active", selectedInput === "image");
      updateOutputAvailability();
    });
  });

  outputTypes.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("disabled")) return;
      outputTypes.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedOutput = btn.dataset.output;
    });
  });

  promptTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      promptInput.value = tag.dataset.prompt;
      promptInput.focus();
    });
  });

  function setupUpload(zoneId, inputId, previewId, removeId) {
    const zone = document.getElementById(zoneId);
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const remove = document.getElementById(removeId);

    if (!zone || !input || !preview || !remove) return;

    zone.addEventListener("click", () => input.click());

    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("drag-over");
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        handleFile(file, preview, zone);
      }
    });

    input.addEventListener("change", () => {
      const file = input.files[0];
      if (file) handleFile(file, preview, zone);
    });

    remove.addEventListener("click", (e) => {
      e.stopPropagation();
      preview.hidden = true;
      zone.hidden = false;
      input.value = "";
    });
  }

  function handleFile(file, preview, zone) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = preview.querySelector("img");
      img.src = e.target.result;
      preview.hidden = false;
      zone.hidden = true;
    };
    reader.readAsDataURL(file);
  }

  setupUpload("upload-zone", "image-upload", "image-preview", "image-remove");

  generateBtn.addEventListener("click", () => {
    const activeTab = document.querySelector(".input-tab.active");
    const tabName = activeTab ? activeTab.dataset.tab : "text";

    let prompt = "";
    if (tabName === "text") {
      prompt = promptInput.value.trim();
    } else if (tabName === "image") {
      prompt = document.getElementById("image-prompt").value.trim();
    } else if (tabName === "painting") {
      prompt = document.getElementById("painting-prompt").value.trim();
    }

    if (!prompt && tabName === "text") {
      promptInput.focus();
      promptInput.style.borderColor = "rgba(220, 80, 60, 0.4)";
      setTimeout(() => {
        promptInput.style.borderColor = "";
      }, 1500);
      return;
    }

    resultPanel.hidden = true;

    generateBtn.classList.add("generating");
    generateBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>生成中...</span>';

    setTimeout(() => {
      const result = createResult(tabName, prompt, selectedOutput);
      results.unshift(result);
      renderResults();
      resetGenerateBtn();
    }, 2000);
  });

  function createResult(tabName, prompt, outputType) {
    const titles = {
      painting: ["山水清韵", "墨染春秋", "烟雨江南", "松壑鸣泉", "竹石幽兰"],
      music: ["古琴·流水", "琵琶·春江", "笛箫·幽兰", "筝曲·山水", "琴箫·渔樵"],
      video: ["水墨动画·山水", "国风短片·花鸟", "动态画卷·人物", "诗意视频·四季", "书法演绎·行草"]
    };

    const titleArr = titles[outputType] || titles.painting;
    const title = titleArr[Math.floor(Math.random() * titleArr.length)];
    const time = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });

    return {
      title,
      prompt,
      type: outputType,
      time,
      id: Date.now()
    };
  }

  function renderResults() {
    if (results.length === 0) {
      resultEmpty.hidden = false;
      resultGrid.hidden = true;
      resultPanel.hidden = true;
      return;
    }

    resultPanel.hidden = false;
    resultEmpty.hidden = true;
    resultGrid.hidden = false;

    resultGrid.innerHTML = results
      .map(
        (r) => `
      <div class="result-card" data-id="${r.id}">
        <div class="result-card-media ${r.type === "music" ? "audio" : ""}">
          ${getMediaContent(r)}
          <span class="result-card-type">${getTypeLabel(r.type)}</span>
          ${r.type === "music" || r.type === "video" ? getPlayButton(r.type) : ""}
        </div>
        <div class="result-card-info">
          <h4>${r.title}</h4>
          <span>${r.time}</span>
        </div>
        <div class="result-card-actions">
          <button class="btn-sm result-card-btn" data-action="save" data-result-id="${r.id}">保存</button>
          <button class="btn-sm result-card-btn" data-action="share" data-result-id="${r.id}">分享</button>
          <button class="btn-sm result-card-btn" data-action="export" data-result-id="${r.id}">导出</button>
        </div>
      </div>
    `
      )
      .join("");

    // Bind action buttons
    resultGrid.querySelectorAll(".result-card-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const resultId = parseInt(btn.dataset.resultId);
        const result = results.find((r) => r.id === resultId);
        if (!result) return;

        if (action === "save") {
          const works = JSON.parse(localStorage.getItem("artstudio_works") || "[]");
          works.unshift({ ...result, savedAt: Date.now() });
          localStorage.setItem("artstudio_works", JSON.stringify(works));
          showToast("已保存到我的作品");
        } else if (action === "share") {
          showToast("分享链接已复制");
        } else if (action === "export") {
          exportResult(result);
        }
      });
    });
  }

  function getMediaContent(r) {
    const placeholders = {
      painting:
        '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, #e8e0d0 0%, #f0ebe0 50%, #e0d8c8 100%);font-size:2.5rem;color:var(--accent-strong);font-weight:bold;">' +
        r.title.charAt(0) +
        "</div>",
      music:
        '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;background:linear-gradient(135deg, #f0ebe0, #e8e0d0);">' +
        '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-strong)" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>' +
        '<span style="font-size:0.8rem;color:var(--text-soft);">' +
        r.title +
        "</span>" +
        "</div>",
      video:
        '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, #d8d0c0 0%, #e8e0d0 50%, #d0c8b8 100%);">' +
        '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-strong)" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>' +
        "</div>"
    };
    return placeholders[r.type] || placeholders.painting;
  }

  function getPlayButton(type) {
    const icon =
      type === "music"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
    return `<button class="result-card-play">${icon}</button>`;
  }

  function getTypeLabel(type) {
    const labels = { painting: "国画", music: "音乐", video: "视频" };
    return labels[type] || "国画";
  }

  function resetGenerateBtn() {
    generateBtn.classList.remove("generating");
    generateBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span>开始创作</span>';
  }

  function exportResult(r) {
    const content = `作品名称：${r.title}\n创作时间：${r.time}\n作品类型：${getTypeLabel(r.type)}\n创作描述：${r.prompt || "无"}\n\n—— ArtLIVE · 画智体`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = r.title + ".txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("已导出作品信息");
  }

  function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "me-toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

  // Record history
  generateBtn.addEventListener("click", () => {
    const history = JSON.parse(localStorage.getItem("artstudio_history") || "[]");
    history.unshift({ title: "创作" + getTypeLabel(selectedOutput), type: "workshop", subtype: getTypeLabel(selectedOutput), time: Date.now() });
    localStorage.setItem("artstudio_history", JSON.stringify(history.slice(0, 50)));
  });
});