document.addEventListener("DOMContentLoaded", () => {
  const guidePlaceholder = document.getElementById("guide-placeholder");
  const guideTitle = document.getElementById("guide-title");
  const guideAuthor = document.getElementById("guide-author");
  const guideBadge = document.getElementById("guide-badge");
  const guideDesc = document.getElementById("guide-desc");
  const guideAiContent = document.getElementById("guide-ai-content");
  const guideBack = document.getElementById("guide-back");
  const guideCollect = document.getElementById("guide-collect");
  const guideShare = document.getElementById("guide-share");
  const guideVoice = document.getElementById("guide-voice");

  const artworks = [
    {
      id: 1, title: "溪山行旅图", author: "范宽（北宋）", category: "landscape", emoji: "山",
      desc: "北宋山水画的巅峰之作，以雄浑壮阔的笔触描绘了北方山水的苍茫气势。主峰耸立，飞瀑如练，行旅商队穿行于山间小道，意境深远。",
      aiGuide: `<p>《溪山行旅图》是北宋画家范宽的代表作，现藏于台北故宫博物院。这幅画以"高远"构图法著称，主峰占据画面三分之二，给人以强烈的视觉冲击。</p>
<p><strong>构图分析：</strong>画面采用三段式构图——近景为行旅商队与溪流，中景为山腰林木，远景为主峰耸立。这种"高远"视角让观者仿佛置身于山脚仰望，感受到自然的雄伟与人的渺小。</p>
<p><strong>笔墨技法：</strong>范宽独创"雨点皴"（又称"豆瓣皴"），以密集的点状笔触表现山石的质感。这种技法使山体呈现出厚重坚实的视觉效果，与北方山水的苍茫气质完美契合。</p>
<p><strong>艺术价值：</strong>此画被誉为"宋画第一"，明代董其昌评其为"宋画第一"。它不仅代表了北宋山水画的最高成就，也体现了中国文人"天人合一"的哲学思想。</p>`
    },
    {
      id: 2, title: "清明上河图", author: "张择端（北宋）", category: "figure", emoji: "清",
      desc: "描绘北宋都城汴京清明时节的繁华景象，长卷中人物、舟车、建筑等细节丰富，是中国古代风俗画的巅峰之作。",
      aiGuide: `<p>《清明上河图》是北宋画家张择端的风俗画长卷，现藏于北京故宫博物院。全卷长528.7厘米，宽24.8厘米，描绘了汴京从郊外到城内的繁华景象。</p>
<p><strong>画面内容：</strong>全卷可分为三段——郊外春光、汴河码头、城内街市。画中共有814个人物、73匹牲畜、29艘船只、30多栋房屋，每一处细节都经过精心刻画。</p>
<p><strong>艺术特色：</strong>采用散点透视法，将不同时空的场景有机融合。人物虽小如豆粒，但神态各异、动作生动。建筑、桥梁、船只的描绘精确到可以作为历史研究的参考资料。</p>
<p><strong>历史价值：</strong>这幅画不仅是艺术杰作，更是研究北宋城市生活、经济状况、建筑形制的珍贵史料。它为我们展现了一个真实而生动的北宋汴京。</p>`
    },
    {
      id: 3, title: "墨竹图", author: "文同（北宋）", category: "flower", emoji: "竹",
      desc: "以书法笔意入画，竹竿劲挺，竹叶潇洒，将文人画的精神气质表现得淋漓尽致，是墨竹题材的经典之作。",
      aiGuide: `<p>文同（1018—1079），字与可，号笑笑先生，是北宋著名的文人画家，以画竹著称，开创了"湖州竹派"。</p>
<p><strong>创作理念：</strong>文同主张"胸有成竹"——在动笔之前，竹子的形象已在心中完整呈现。这一理念后来成为中国画创作的重要原则，强调"意在笔先"。</p>
<p><strong>笔墨特点：</strong>以书法笔意入画，竹竿用中锋直笔，挺拔有力；竹叶以侧锋撇出，潇洒飘逸。墨色浓淡相间，表现出竹子的阴阳向背。</p>
<p><strong>文化意蕴：</strong>在中国传统文化中，竹子象征着虚心、有节、坚韧的品格。文同画竹，不仅是艺术创作，更是人格理想的表达。苏轼曾赞其"与可画竹时，见竹不见人"。</p>`
    },
    {
      id: 4, title: "兰亭序", author: "王羲之（东晋）", category: "calligraphy", emoji: "书",
      desc: "天下第一行书，笔势委婉含蓄，遒美健秀。全篇324字，章法自然，气韵生动，是书法艺术的至高典范。",
      aiGuide: `<p>《兰亭序》是东晋书法家王羲之于永和九年（353年）在会稽山阴兰亭雅集时所作的序文手稿，被誉为"天下第一行书"。</p>
<p><strong>创作背景：</strong>永和九年三月初三，王羲之与谢安、孙绰等41位名士在兰亭举行修禊活动。众人饮酒赋诗，王羲之乘兴挥毫，写下了这篇千古名作。</p>
<p><strong>书法艺术：</strong>全篇324字，28行。字字精妙，笔笔到位。其中"之"字出现了20次，每个写法都不相同，展现了王羲之高超的书法技巧和丰富的变化能力。</p>
<p><strong>历史传奇：</strong>真迹据传随葬于唐太宗昭陵，现存均为摹本。唐代冯承素摹本（神龙本）最为著名，现藏于北京故宫博物院。历代书法家无不临习此帖，它对中国书法的影响深远而持久。</p>`
    },
    {
      id: 5, title: "富春山居图", author: "黄公望（元代）", category: "landscape", emoji: "水",
      desc: "描绘富春江两岸初秋景色，笔墨苍简清润，意境空灵悠远。全卷以披麻皴法勾勒山川脉络，被誉为画中之兰亭。",
      aiGuide: `<p>《富春山居图》是元代画家黄公望晚年的杰作，创作于1347年至1350年间，历时三四年方告完成。此画被誉为"画中之兰亭"，是中国山水画的巅峰之作。</p>
<p><strong>画面内容：</strong>全卷描绘了富春江两岸初秋的秀丽景色，从起笔的浅滩沙渚到收尾的远山平林，峰峦起伏、江水浩渺，展现了江南山水的无限风光。</p>
<p><strong>笔墨技法：</strong>黄公望以披麻皴法为主，辅以解索皴、牛毛皴等技法。笔墨苍简清润，干湿浓淡变化丰富。他善于用淡墨层层渲染，使画面呈现出空灵悠远的意境。</p>
<p><strong>传奇经历：</strong>此画在清代曾遭火焚，断为两段。前段称《剩山图》，现藏于浙江省博物馆；后段称《无用师卷》，现藏于台北故宫博物院。2011年，两段曾在台北合璧展出，轰动一时。</p>`
    },
    {
      id: 6, title: "簪花仕女图", author: "周昉（唐代）", category: "figure", emoji: "仕",
      desc: "描绘唐代宫廷贵妇的闲适生活，线条流畅，设色浓丽，人物体态丰，展现了盛唐气象与仕女画的独特魅力。",
      aiGuide: `<p>《花仕女图》是唐代画家周昉的代表作，现藏于辽宁省博物馆。这幅画描绘了六位宫廷贵妇在庭院中赏花游园的场景，是唐代仕女画的经典之作。</p>
<p><strong>画面内容：</strong>全卷分为三段——采花、看花、漫步。六位仕女体态丰腴、衣着华丽，头戴簪花，手执团扇，神态闲适优雅。画面中还点缀了仙鹤、小狗等动物，增添了生活气息。</p>
<p><strong>艺术特色：</strong>线条流畅圆润，采用"游丝描"技法，衣纹转折自然。设色浓丽而不俗，以朱砂、石绿、铅白等矿物颜料层层渲染。人物面部以"三白法"（额头、鼻梁、下巴施白粉）表现，是唐代仕女画的典型特征。</p>
<p><strong>历史价值：</strong>此画不仅具有极高的艺术价值，也是研究唐代服饰、妆容、生活方式的重要资料。画中仕女的服饰、发式、妆容，为我们还原了一个真实而华丽的盛唐。</p>`
    },
    {
      id: 7, title: "出水芙蓉图", author: "佚名（南宋）", category: "flower", emoji: "荷",
      desc: "以工笔重彩绘就一朵盛开的荷花，花瓣层层叠叠，设色清丽雅致，于方寸之间展现生命的华美与纯净。",
      aiGuide: `<p>《出水芙蓉图》是南宋佚名画家的工笔花鸟杰作，现藏于北京故宫博物院。这幅画以一朵盛开的荷花为主题，是宋代院体花鸟画的代表作之一。</p>
<p><strong>画面分析：</strong>画面仅绘一朵荷花，却层次丰富、细节精微。花瓣以淡粉色层层渲染，由外向内逐渐加深，表现出花瓣的质感和立体感。花蕊以细笔点出，金黄醒目。</p>
<p><strong>技法特点：</strong>采用工笔重彩技法，先以淡墨勾线，再以色彩层层渲染。花瓣的渲染讲究"薄中见厚"，每一遍颜色都极淡，数十遍后方能达到理想的色彩效果。荷叶以石绿渲染，与粉色荷花形成鲜明对比。</p>
<p><strong>文化意蕴：</strong>荷花在中国文化中象征着"出淤泥而不染"的高洁品格。宋代文人尤其喜爱荷花，周敦颐的《爱莲说》更是将荷花的品格推向了极致。这幅画以极简的构图表达了极深的文化内涵。</p>`
    },
    {
      id: 8, title: "祭侄文稿", author: "颜真卿（唐代）", category: "calligraphy", emoji: "祭",
      desc: "天下第二行书，于极度悲愤中一气呵成，笔墨浓淡干湿变化丰富，情感真挚感人，是书法与情感完美融合的杰作。",
      aiGuide: `<p>《祭侄文稿》是唐代书法家颜真卿于758年为其侄颜季明所作的祭文草稿，现藏于台北故宫博物院，被誉为"天下第二行书"。</p>
<p><strong>创作背景：</strong>安史之乱中，颜真卿的堂兄颜杲卿和侄子颜季明坚守常山，城破后壮烈殉国。颜真卿在极度悲愤中写下了这篇祭文，字字血泪，感人至深。</p>
<p><strong>书法特色：</strong>由于是草稿，全篇涂改多处，却恰恰成就了其独特的艺术魅力。笔墨随着情感的起伏而变化——起始尚能克制，中段悲愤交加，笔势奔放，墨色浓淡干湿变化极大，最后几行几乎泣不成声，字迹潦草难辨。</p>
<p><strong>艺术价值：</strong>《祭侄文稿》是书法史上"无意于佳乃佳"的典范。它证明了真正的艺术杰作往往诞生于真情实感的自然流露，而非刻意的技巧展示。苏轼评其"书至颜鲁公，天下之能事毕矣"。</p>`
    },
    {
      id: 9, title: "墨韵·新生", author: "徐冰（当代）", category: "modern", emoji: "墨",
      desc: "以传统水墨技法结合当代艺术语言，探索文字与图像的边界，在黑白之间构建出全新的视觉思考空间。",
      aiGuide: `<p>徐冰是当代中国最具国际影响力的艺术家之一，他的作品以独特的文字游戏和跨文化视角著称。《墨韵·新生》系列延续了他对文字与图像关系的持续探索。</p>
<p><strong>创作理念：</strong>徐冰善于将中国传统元素与当代艺术语言相结合。他的"天书"系列创造了数千个看似汉字实则无意义的"伪汉字"，挑战了人们对文字的认知习惯。</p>
<p><strong>艺术特色：</strong>在《墨韵·新生》中，徐冰以传统水墨的笔墨技法为基础，融入了当代艺术的观念表达。黑白之间的对比不仅是视觉上的，更是文化意义上的——传统与现代、东方与西方的对话。</p>
<p><strong>文化意义：</strong>徐冰的作品提醒我们，传统不是静止的遗产，而是可以被重新诠释和激活的活的文化资源。在全球化的语境下，中国艺术的当代转化是一个值得持续探索的课题。</p>`
    },
    {
      id: 10, title: "千里江山图", author: "王希孟（北宋）", category: "landscape", emoji: "青",
      desc: "青绿山水画的巅峰之作，以矿物颜料层层渲染，山峦叠嶂，江河浩渺，色彩绚丽而不失雅致，气象万千。",
      aiGuide: `<p>《千里江山图》是北宋画家王希孟18岁时创作的青绿山水长卷，现藏于北京故宫博物院。这幅画是中国青绿山水画的巅峰之作，也是故宫博物院的镇馆之宝之一。</p>
<p><strong>创作传奇：</strong>王希孟是宋徽宗画院的学生，年仅18岁便创作了这幅传世杰作。据记载，宋徽宗亲自指导他作画，可见其天赋异禀。然而关于他的生平记载极少，这幅画几乎是他留给世界的唯一作品。</p>
<p><strong>色彩技法：</strong>全卷以石青、石绿等矿物颜料为主，层层渲染，色彩绚丽而不失雅致。先用赭石打底，再施石绿，最后罩以石青，形成丰富的色彩层次。这种技法使画面历经千年依然色彩鲜艳。</p>
<p><strong>画面内容：</strong>全卷长近12米，描绘了连绵起伏的群山和浩渺的江河。山间点缀着村落、亭台、桥梁、舟船，人物虽小如豆粒，但姿态各异、生动自然。整幅画面气象万千，展现了北宋时期的大好河山。</p>`
    },
    {
      id: 11, title: "韩熙载夜宴图", author: "顾闳中（五代）", category: "figure", emoji: "宴",
      desc: "描绘南唐大臣韩熙载夜宴宾客的场景，以连环画式构图展现听乐、观舞、休息、清吹、送别五段，人物神态各异。",
      aiGuide: `<p>《韩熙载夜宴图》是五代南唐画家顾闳中的代表作，现藏于北京故宫博物院。这幅画以连环画式的构图，记录了南唐大臣韩熙载夜宴宾客的全过程。</p>
<p><strong>创作背景：</strong>南唐后主李煜听说韩熙载生活奢靡，便派画家顾闳中潜入韩府，暗中观察并记录夜宴场景。顾闳中凭借惊人的记忆力，回家后凭印象画出了这幅杰作。</p>
<p><strong>画面结构：</strong>全卷分为五段——听乐、观舞、休息、清吹、送别。每段以屏风相隔，既独立又连贯。画中共有40多人物，每个人物的神态、动作都刻画得栩栩如生。</p>
<p><strong>艺术价值：</strong>此画不仅是人物画的杰作，也是研究五代时期服饰、音乐、舞蹈、家具的重要史料。画中人物的服饰、乐器、家具等细节，为我们还原了一个真实而生动的南唐夜宴场景。</p>`
    },
    {
      id: 12, title: "寒雀图", author: "崔白（北宋）", category: "flower", emoji: "雀",
      desc: "以枯枝寒雀为题材，笔法疏放灵动，雀鸟姿态各异，栩栩如生。在萧瑟中透出无限生机，是花鸟画的革新之作。",
      aiGuide: `<p>《寒雀图》是北宋画家崔白的花鸟画代表作，现藏于北京故宫博物院。这幅画以枯枝寒雀为题材，是宋代花鸟画从工整向写意转变的重要标志。</p>
<p><strong>画面内容：</strong>画面描绘了一群麻雀在枯枝上栖息、飞翔的场景。九只麻雀姿态各异——有的静立枝头，有的振翅欲飞，有的低头觅食，有的相互嬉戏。枯枝以淡墨勾勒，苍劲有力。</p>
<p><strong>艺术革新：</strong>崔白打破了宋代院体花鸟画工整细致的传统，以更为自由奔放的笔法表现自然。他的花鸟画强调"写生"，注重捕捉物象的瞬间动态和自然神态，对后世写意花鸟画的发展产生了深远影响。</p>
<p><strong>意境营造：</strong>画面虽以"寒"为主题，却并不萧瑟凄凉。雀鸟的灵动与生机，使整个画面充满了生命的活力。这种"于萧瑟中见生机"的意境，体现了中国艺术"生生不息"的哲学思想。</p>`
    }
  ];

  const categoryLabels = {
    landscape: "山水",
    figure: "人物",
    flower: "花鸟",
    calligraphy: "书法",
    modern: "新水墨"
  };

  const params = new URLSearchParams(window.location.search);
  const artId = parseInt(params.get("id"));
  const art = artworks.find((a) => a.id === artId);

  if (!art) {
    window.location.href = "Gallary.html";
    return;
  }

  guidePlaceholder.className = "guide-placeholder " + art.category;
  guidePlaceholder.textContent = art.emoji;
  guideTitle.textContent = art.title;
  guideAuthor.textContent = art.author;
  guideBadge.textContent = categoryLabels[art.category] || art.category;
  guideDesc.textContent = art.desc;

  // Collect
  const collections = JSON.parse(localStorage.getItem("artstudio_collections") || "[]");
  const isCollected = collections.some((c) => c.id === art.id);
  if (isCollected) {
    guideCollect.classList.add("collected");
    guideCollect.querySelector("svg").setAttribute("fill", "currentColor");
  }

  guideCollect.addEventListener("click", () => {
    const idx = collections.findIndex((c) => c.id === art.id);
    if (idx >= 0) {
      collections.splice(idx, 1);
      guideCollect.classList.remove("collected");
      guideCollect.querySelector("svg").setAttribute("fill", "none");
    } else {
      collections.push({
        id: art.id,
        title: art.title,
        author: art.author,
        emoji: art.emoji,
        date: Date.now()
      });
      guideCollect.classList.add("collected");
      guideCollect.querySelector("svg").setAttribute("fill", "currentColor");
    }
    localStorage.setItem("artstudio_collections", JSON.stringify(collections));
  });

  // Record history
  const history = JSON.parse(localStorage.getItem("artstudio_history") || "[]");
  history.unshift({ title: art.title, type: "gallery", time: Date.now() });
  localStorage.setItem("artstudio_history", JSON.stringify(history.slice(0, 50)));

  // Share
  guideShare.addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: art.title + " — ArtLIVE · 画智体",
        text: art.desc,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const orig = guideShare.querySelector("span").textContent;
        guideShare.querySelector("span").textContent = "已复制";
        setTimeout(() => { guideShare.querySelector("span").textContent = orig; }, 1500);
      });
    }
  });

  // Voice
  let speaking = false;
  guideVoice.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      speechSynthesis.cancel();
      speaking = false;
      guideVoice.classList.remove("speaking");
      guideVoice.querySelector("span").textContent = "语音播放";
      return;
    }
    const text = art.title + "，" + art.author + "。" + art.desc + "。" + art.aiGuide.replace(/<[^>]*>/g, "");
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.9;

    // 确保使用中文语音
    const voices = speechSynthesis.getVoices();
    const zhVoice = voices.find((v) => v.lang.startsWith("zh"));
    if (zhVoice) utterance.voice = zhVoice;

    utterance.onend = () => {
      speaking = false;
      guideVoice.classList.remove("speaking");
      guideVoice.querySelector("span").textContent = "语音播放";
    };
    speechSynthesis.speak(utterance);
    speaking = true;
    guideVoice.classList.add("speaking");
    guideVoice.querySelector("span").textContent = "停止";
  });

  // 预加载语音列表
  if ("speechSynthesis" in window) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }

  // Start guide on button click
  const guideStartBtn = document.getElementById("guide-start-btn");
  if (guideStartBtn) {
    guideStartBtn.addEventListener("click", () => {
      guideAiContent.innerHTML =
        '<div class="guide-ai-loading">' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>' +
        "<span>智能评析正在分析作品…</span>" +
        "</div>";
      setTimeout(() => {
        guideAiContent.innerHTML = art.aiGuide;
        guideVoice.classList.remove("hidden");
      }, 1200);
    });
  }

  // Navigate
  guideBack.addEventListener("click", () => {
    window.location.href = "Gallary.html";
  });
});