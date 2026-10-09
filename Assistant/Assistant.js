document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chat-messages");
  const chatMessagesInner = document.getElementById("chat-messages-inner");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const newChatBtn = document.getElementById("new-chat");
  const clearChatsBtn = document.getElementById("clear-chats");
  const quickPrompts = document.querySelectorAll(".quick-prompt");
  const chatHistory = document.getElementById("chat-history");

  let currentChatId = "new";
  let chats = JSON.parse(localStorage.getItem("artstudio_chats") || "{}");

  const aiResponses = {
    "水墨画技法": {
      "介绍一下水墨画的基本技法":
        "水墨画的基本技法主要包括：\n\n1. **用笔**：中锋、侧锋、逆锋、拖笔等，不同笔法产生不同的线条效果。\n\n2. **用墨**：墨分五色——焦、浓、重、淡、清。通过控制水分来表现不同的墨色层次。\n\n3. **皴法**：表现山石纹理的技法，如披麻皴、斧劈皴、雨点皴等。\n\n4. **渲染**：用水墨晕染，营造虚实相生的意境。\n\n5. **留白**：水墨画中\u201c计白当黑\u201d，空白处即是意境所在。\n\n建议从临摹《芥子园画谱》开始学习基础技法。",
    },
    "推荐几幅适合初学者临摹的国画":
      "推荐以下适合初学者的临摹作品：\n\n1. **《芥子园画谱》**（清·王概）—— 国画入门的经典教材，涵盖山水、花鸟、人物各类题材。\n\n2. **齐白石《虾》**—— 笔墨简练，造型生动，适合练习用笔用墨。\n\n3. **郑板桥《竹石图》**—— 竹子是国画基础练习的好题材，有助于掌握中锋用笔。\n\n4. **徐悲鸿《马》**—— 造型准确，笔墨酣畅，适合练习造型与墨色结合。\n\n建议从简单的花鸟鱼虫开始，逐步过渡到山水人物。",
    "文房四宝怎么选？":
      "文房四宝（笔、墨、纸、砚）的选择建议：\n\n**笔**：初学者可选兼毫（羊毫+狼毫混合），弹性适中。推荐型号：中白云、大兰竹。\n\n**墨**：初学者用优质墨汁即可，如\u201c一得阁\u201d墨汁。进阶后可尝试研墨。\n\n**纸**：生宣适合写意画，熟宣适合工笔画。初学推荐半生熟宣纸。\n\n**砚**：端砚、歙砚为上品。初学者可用普通石砚或瓷碟替代。\n\n总的来说，不必追求名贵，实用顺手最重要。",
    "中国画和西方油画的主要区别是什么？":
      "中国画与西方油画的主要区别：\n\n1. **透视法**：西画用焦点透视，国画用散点透视，如《清明上河图》可同时展现多个视角。\n\n2. **造型观**：西画重写实，追求光影体积；国画重写意，讲究\u201c以形写神\u201d。\n\n3. **色彩**：西画色彩丰富，追求自然的色彩关系；国画以墨为主，色彩为辅，\u201c墨分五色\u201d。\n\n4. **构图**：西画多为满构图；国画讲究留白，虚实相生。\n\n5. **材料**：西画用油画布和油彩；国画用宣纸、绢和墨、颜料。\n\n两者各有千秋，都是人类艺术的瑰宝。",
  };

  function getAIResponse(prompt) {
    for (const category of Object.values(aiResponses)) {
      if (category[prompt]) return category[prompt];
    }
    return (
      "感谢您的提问！关于「" +
      prompt +
      "」，这是一个很好的话题。\n\n作为国风艺术助手，我建议你可以从以下几个方面来了解：\n\n1. 查阅《中国美术史》相关的经典著作\n2. 在知识库中搜索相关的文章和教程\n3. 多观摩名家作品，培养审美眼光\n\n如果你想了解更多细节，欢迎继续提问！"
    );
  }

  function renderMessages() {
    const current = chats[currentChatId];
    if (!current || current.messages.length === 0) {
      chatMessagesInner.innerHTML = `
        <div class="chat-welcome">
          <span class="chat-welcome-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/></svg></span>
          <h3>国风艺术助手</h3>
          <p>您好！我是ArtLIVE · 画智体的智能助手，可以回答关于国画、书法、诗词、艺术史等方面的问题。有什么我可以帮助您的吗？</p>
          <div class="quick-prompts">
            <button class="quick-prompt" data-prompt="介绍一下水墨画的基本技法">水墨画技法</button>
            <button class="quick-prompt" data-prompt="推荐几幅适合初学者临摹的国画">临摹推荐</button>
            <button class="quick-prompt" data-prompt="文房四宝怎么选？">文房四宝</button>
            <button class="quick-prompt" data-prompt="中国画和西方油画的主要区别是什么？">中西对比</button>
          </div>
        </div>`;
      chatMessagesInner.classList.add("welcome-mode");
      bindQuickPrompts();
      return;
    }

    chatMessagesInner.classList.remove("welcome-mode");

    chatMessagesInner.innerHTML = current.messages
      .map(
        (msg) => `
      <div class="chat-message ${msg.role}">
        <div class="msg-avatar">${msg.role === "user" ? "我" : "墨"}</div>
        <div class="msg-bubble">${msg.content
          .split("\n")
          .map((line) => `<p>${line}</p>`)
          .join("")}</div>
      </div>`
      )
      .join("");
  }

  function bindQuickPrompts() {
    document.querySelectorAll(".quick-prompt").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prompt = btn.dataset.prompt;
        sendMessage(prompt);
      });
    });
  }

  function sendMessage(text) {
    if (!text) return;

    if (currentChatId === "new") {
      currentChatId = Date.now().toString();
      chats[currentChatId] = { title: text.substring(0, 20), messages: [], createdAt: new Date().toISOString() };
    }

    chats[currentChatId].messages.push({ role: "user", content: text });

    const welcome = chatMessagesInner.querySelector(".chat-welcome");
    if (welcome) welcome.remove();

    const userMsg = document.createElement("div");
    userMsg.className = "chat-message user";
    userMsg.innerHTML = `
      <div class="msg-avatar">我</div>
      <div class="msg-bubble"><p>${text}</p></div>`;
    chatMessagesInner.appendChild(userMsg);

    const typingMsg = document.createElement("div");
    typingMsg.className = "chat-message assistant";
    typingMsg.innerHTML = `
      <div class="msg-avatar">墨</div>
      <div class="msg-bubble">
        <div class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
      </div>`;
    chatMessagesInner.appendChild(typingMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      typingMsg.remove();
      const response = getAIResponse(text);
      chats[currentChatId].messages.push({ role: "assistant", content: response });

      const assistantMsg = document.createElement("div");
      assistantMsg.className = "chat-message assistant";
      assistantMsg.innerHTML = `
        <div class="msg-avatar">墨</div>
        <div class="msg-bubble">${response
          .split("\n")
          .map((line) => `<p>${line}</p>`)
          .join("")}</div>`;
      chatMessagesInner.appendChild(assistantMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      saveChats();
      renderHistory();
    }, 1000 + Math.random() * 1500);
  }

  function saveChats() {
    localStorage.setItem("artstudio_chats", JSON.stringify(chats));
  }

  function formatTime(iso) {
    if (!iso) return "";
    const d = new Date(iso);
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

  function renderHistory() {
    chatHistory.innerHTML = "";

    const newBtn = document.createElement("button");
    newBtn.className = "history-item" + (currentChatId === "new" ? " active" : "");
    newBtn.dataset.id = "new";
    newBtn.innerHTML = "<span><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z\"/></svg></span><span>新会话</span>";
    newBtn.addEventListener("click", () => switchChat("new"));
    chatHistory.appendChild(newBtn);

    Object.entries(chats).forEach(([id, chat]) => {
      const btn = document.createElement("button");
      btn.className = "history-item" + (id === currentChatId ? " active" : "");
      btn.dataset.id = id;
      const timeStr = formatTime(chat.createdAt);
      btn.innerHTML = `<span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span><span>${chat.title}</span><span class="history-time">${timeStr}</span>`;
      btn.addEventListener("click", () => switchChat(id));

      const delBtn = document.createElement("span");
      delBtn.className = "history-delete";
      delBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      delBtn.title = "删除会话";
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteChat(id);
      });
      btn.appendChild(delBtn);

      chatHistory.appendChild(btn);
    });

    const clearBtn = document.getElementById("clear-chats");
    if (clearBtn) {
      if (Object.keys(chats).length === 0) {
        clearBtn.disabled = true;
      } else {
        clearBtn.disabled = false;
      }
    }
  }

  function switchChat(id) {
    currentChatId = id;
    renderMessages();
    renderHistory();
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (text) {
      sendMessage(text);
      chatInput.value = "";
    }
  });

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const text = chatInput.value.trim();
      if (text) {
        sendMessage(text);
        chatInput.value = "";
      }
    }
  });

  newChatBtn.addEventListener("click", () => switchChat("new"));

  function deleteChat(id) {
    delete chats[id];
    if (currentChatId === id) {
      currentChatId = "new";
      renderMessages();
    }
    saveChats();
    renderHistory();
  }

  clearChatsBtn.addEventListener("click", () => {
    if (Object.keys(chats).length === 0) return;
    if (confirm("确定要清空所有会话记录吗？此操作不可撤销。")) {
      chats = {};
      currentChatId = "new";
      saveChats();
      renderMessages();
      renderHistory();
    }
  });

  bindQuickPrompts();
  renderHistory();
});