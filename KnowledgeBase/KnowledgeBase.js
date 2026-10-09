var svgIcons = {
  painting: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  poetry: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  history: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="15" y2="6"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="13" y2="14"/></svg>',
  tools: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  theory: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M2 12h20"/></svg>'
};

document.addEventListener("DOMContentLoaded", () => {
  const articles = [
    {
      id: 1,
      title: "水墨画的笔墨五法",
      category: "painting",
      icon: svgIcons.painting,
      summary: "平、圆、留、重、变五种笔法，以及焦、浓、重、淡、清五种墨法，构成了中国水墨画的核心技法体系。",
      content: `<p>中国水墨画的笔墨技法博大精深，历代画家总结出"笔墨五法"作为核心技法体系。</p>
<p><strong>笔法五要：</strong></p>
<p>一曰平——运笔时力量均匀，如锥画沙，线条沉稳有力；<br>二曰圆——笔锋圆转，气韵贯通，如折钗股；<br>三曰留——笔意停留，力透纸背，如屋漏痕；<br>四曰重——下笔沉着，厚重而不滞；<br>五曰变——笔法变化多端，随物赋形。</p>
<p><strong>墨法五色：</strong></p>
<p>焦墨——最浓之墨，干枯苍劲；<br>浓墨——深黑而有光泽；<br>重墨——次于浓墨，沉稳厚重；<br>淡墨——浅淡清透，层次丰富；<br>清墨——最淡之墨，若有若无，意境悠远。</p>
<p>这五种笔法与五种墨色相互配合，产生了无穷无尽的变化，使中国水墨画在黑白之间展现出万千世界。</p>`
    },
    {
      id: 2,
      title: "唐诗中的山水意境",
      category: "poetry",
      icon: svgIcons.poetry,
      summary: "唐代诗人以精炼的语言描绘山水，创造了\"诗中有画，画中有诗\"的独特美学境界。",
      content: `<p>唐诗是中国诗歌的巅峰，其中山水诗更是将自然之美与人文情怀完美融合。</p>
<p><strong>王维——诗中有画</strong></p>
<p>"空山新雨后，天气晚来秋。明月松间照，清泉石上流。"王维以画家的眼光观察自然，用诗人的语言描绘山水，创造了独特的禅意美学。</p>
<p><strong>李白——豪放飘逸</strong></p>
<p>"飞流直下三千尺，疑是银河落九天。"李白的山水诗充满浪漫主义色彩，以夸张的笔法和奔放的想象，展现了天地间的壮阔之美。</p>
<p><strong>杜甫——沉郁顿挫</strong></p>
<p>"会当凌绝顶，一览众山小。"杜甫的山水诗饱含深沉的家国情怀，在写景中寄托了对人生和社会的深刻思考。</p>
<p>唐诗中的山水意境，影响了后世千年的中国画创作，使"诗画一律"成为东方美学的核心理念。</p>`
    },
    {
      id: 3,
      title: "宋代院体画与文人画的分野",
      category: "history",
      icon: svgIcons.history,
      summary: "宋代是中国绘画的黄金时代，院体画的精工与文人画的写意，形成了两种不同的艺术追求。",
      content: `<p>宋代是中国绘画史上最重要的时期之一，这一时期形成了院体画与文人画两大流派的分野。</p>
<p><strong>院体画——精工写实</strong></p>
<p>以宫廷画院为中心，画家们追求形神兼备、精工细腻的写实风格。代表画家有张择端、李唐、刘松年等。他们注重写生，讲究法度，画面工整精致，色彩富丽堂皇。</p>
<p><strong>文人画——写意抒情</strong></p>
<p>以苏轼、米芾等人为代表的文人画家，强调"不求形似"，追求笔墨情趣和个人意趣的表达。他们主张"书画同源"，将书法用笔引入绘画，开创了以水墨为主的写意画风。</p>
<p>这两种艺术追求看似对立，实则互补。院体画奠定了中国画的技法基础，文人画则拓展了中国画的精神境界。两者的交汇融合，共同塑造了中国绘画的独特面貌。</p>`
    },
    {
      id: 4,
      title: "文房四宝：笔墨纸砚",
      category: "tools",
      icon: svgIcons.tools,
      summary: "笔、墨、纸、砚是中国传统书画的四种基本工具，被誉为\"文房四宝\"，承载着深厚的文化内涵。",
      content: `<p>"文房四宝"是中国传统文化中对书画工具的雅称，体现了中国人对书写工具的珍视与审美追求。</p>
<p><strong>笔（湖笔）</strong></p>
<p>以浙江湖州所产最为著名。笔毫分为羊毫、狼毫、兼毫等，笔杆多用竹制。一支好笔需具备"尖、齐、圆、健"四德。选笔如择友，笔性与人性相通。</p>
<p><strong>墨（徽墨）</strong></p>
<p>以安徽徽州所产最为著名。上等墨锭以松烟或油烟为原料，加入麝香、冰片等名贵药材，经千锤百炼而成。墨色分为"焦、浓、重、淡、清"五色，层次丰富。</p>
<p><strong>纸（宣纸）</strong></p>
<p>以安徽泾县所产最为著名。宣纸质地绵韧、光洁如玉，有"纸寿千年"之誉。分为生宣、熟宣和半熟宣，适合不同的书画技法。</p>
<p><strong>砚（端砚）</strong></p>
<p>以广东肇庆（古端州）所产最为著名。端砚石质细腻温润，发墨快而不损毫。历代文人以砚为友，以砚为田，在砚台上寄托了无限的情思。</p>`
    },
    {
      id: 5,
      title: "谢赫六法：中国画的品评标准",
      category: "theory",
      icon: svgIcons.theory,
      summary: "南齐谢赫在《古画品录》中提出\"六法\"，成为中国画创作与品评的基本准则，影响深远至今。",
      content: `<p>南齐画家谢赫在其著作《古画品录》中提出了品评绘画的六条标准，被后世称为"谢赫六法"，是中国绘画理论的重要基石。</p>
<p><strong>一、气韵生动</strong></p>
<p>六法之首，也是最高标准。要求作品具有生动的精神气质和韵律感，画面要有"气"的流动，"韵"的回味。这是超越技法层面的精神追求。</p>
<p><strong>二、骨法用笔</strong></p>
<p>指用笔要有力度，线条要有骨力。中国画讲究"以书入画"，笔法的好坏直接关系到作品的质量。</p>
<p><strong>三、应物象形</strong></p>
<p>依据对象的特征来塑造形象，要求画家对描绘对象有深入的观察和理解，做到形神兼备。</p>
<p><strong>四、随类赋彩</strong></p>
<p>根据对象的类别来赋予色彩。中国画的色彩不是对自然的简单模仿，而是经过艺术提炼和概括的表现。</p>
<p><strong>五、经营位置</strong></p>
<p>即构图布局。中国画讲究"计白当黑"，经营位置不仅仅是安排物象，更是对画面空间的整体把握。</p>
<p><strong>六、传移模写</strong></p>
<p>通过临摹前人的优秀作品来学习传统技法，这是学习中国画的必经之路，也是传承文化的重要方式。</p>`
    },
    {
      id: 6,
      title: "宋词中的花间意境",
      category: "poetry",
      icon: svgIcons.poetry,
      summary: "宋词以婉约与豪放两大流派，在花间月下书写了中国人最细腻的情感世界。",
      content: `<p>宋词是继唐诗之后中国文学的又一座高峰，以其长短句的形式和丰富的音乐性，成为表达情感的最佳载体。</p>
<p><strong>婉约派——柔情似水</strong></p>
<p>以柳永、李清照、秦观为代表。柳永"今宵酒醒何处？杨柳岸，晓风残月"将离愁别绪写得缠绵悱恻。李清照"寻寻觅觅，冷冷清清，凄凄惨惨戚戚"以叠字开篇，写尽国破家亡的悲凉。</p>
<p><strong>豪放派——气吞山河</strong></p>
<p>以苏轼、辛弃疾为代表。苏轼"大江东去，浪淘尽，千古风流人物"以壮阔的笔触写历史沧桑。辛弃疾"醉里挑灯看剑，梦回吹角连营"将报国壮志与豪放词风融为一体。</p>
<p>宋词中的花间意境，无论是婉约的清丽还是豪放的雄浑，都为后世的中国画创作提供了丰富的意象和情感资源。</p>`
    },
    {
      id: 7,
      title: "元代山水画的变革",
      category: "history",
      icon: svgIcons.history,
      summary: "元代是山水画变革的关键时期，以黄公望、倪瓒为代表的元四家将文人山水画推向了新的高度。",
      content: `<p>元代是中国山水画的重要转折期，在异族统治的特殊历史背景下，文人画家们将山水画作为精神寄托，开创了全新的艺术境界。</p>
<p><strong>元四家</strong></p>
<p>黄公望——以《富春山居图》闻名，创披麻皴法，笔墨苍简清润，追求"平淡天真"的境界。<br>倪瓒——以"逸笔草草"著称，画面疏淡清寂，常作"一河两岸"式构图，意境空灵。<br>王蒙——以繁密见长，牛毛皴、解索皴等技法丰富，画面层峦叠嶂。<br>吴镇——善用湿墨，画面湿润苍茫，有"梅花道人"之号。</p>
<p><strong>艺术特色</strong></p>
<p>元代山水画强调"书画同源"，将书法用笔引入绘画；注重笔墨自身的表现力，追求"逸气"；画面多题诗，使诗书画印融为一体；整体风格从宋代的写实转向写意，从追求形似转向追求神似。</p>`
    },
    {
      id: 8,
      title: "中国画的构图法则",
      category: "painting",
      icon: svgIcons.painting,
      summary: "中国画的构图讲究\"经营位置\"，以虚实相生、疏密有致、开合呼应等法则构建画面空间。",
      content: `<p>中国画的构图是一门独特的空间艺术，它不同于西方绘画的焦点透视，而是以"散点透视"和"虚实相生"为核心，创造出独特的视觉语言。</p>
<p><strong>虚实相生</strong></p>
<p>中国画讲究"计白当黑"，空白不是"无"，而是"有"的延伸。画面中的留白可以是天空、水面、云雾，给人以无限想象的空间。</p>
<p><strong>疏密有致</strong></p>
<p>"疏可走马，密不透风"——疏处可以跑马，密处连风都透不过。疏密对比产生节奏感，使画面富有韵律。</p>
<p><strong>开合呼应</strong></p>
<p>画面要有"开"（展开、开放）和"合"（收拢、呼应），形成完整的视觉动线。景物之间要有呼应关系，使画面气脉贯通。</p>
<p><strong>三远法</strong></p>
<p>北宋郭熙提出"三远"：高远（仰视，表现山之高峻）、深远（俯视，表现山之前后层次）、平远（平视，表现山之间辽阔）。这三种透视法构成了中国山水画独特的空间表达方式。</p>`
    },
    {
      id: 9,
      title: "工笔画技法入门",
      category: "painting",
      icon: svgIcons.painting,
      summary: "工笔画以精谨细腻的笔法描绘物象，历经勾线、渲染、罩色等多道工序，是中国画中最为精致的表现手法。",
      content: `<p>工笔画是中国画的重要门类，以"工整细致、精雕细琢"著称，追求形神兼备、毫发毕现的艺术效果。</p>
<p><strong>勾线——骨法之本</strong></p>
<p>工笔画以线为骨，勾线是第一道关键工序。用笔需中锋行笔，线条要均匀有力、流畅自然。高古游丝描、铁线描、钉头鼠尾描等十八描法，各有其独特的审美效果。</p>
<p><strong>渲染——层次之魂</strong></p>
<p>渲染是工笔画的核心技法，通过层层叠加淡色，使物象产生立体感和质感。渲染讲究"薄中见厚"，每一遍颜色都极淡，数十遍后方能达到理想的色彩效果。分染、罩染、接染、点染等技法交替使用。</p>
<p><strong>设色——随类赋彩</strong></p>
<p>工笔画的设色遵循"随类赋彩"的原则，根据物象的固有色进行艺术化处理。传统颜料分为石色（矿物颜料）和草色（植物颜料），石色厚重覆盖力强，草色清透易于渲染。</p>
<p><strong>名作典范</strong></p>
<p>宋代赵佶《芙蓉锦鸡图》、唐代周昉《簪花仕女图》、明代仇英《汉宫春晓图》等，都是工笔画的经典之作，展现了这一技法的极致之美。</p>`
    },
    {
      id: 10,
      title: "写意花鸟画的笔墨情趣",
      category: "painting",
      icon: svgIcons.painting,
      summary: '写意花鸟画不拘泥于形似，而是以简练的笔墨传达花鸟的精神气韵，追求"妙在似与不似之间"的艺术境界。',
      content: `<p>写意花鸟画是中国画中最富生命力的门类之一，它以简驭繁、以少胜多，在寥寥数笔中展现花鸟的灵动与生机。</p>
<p><strong>徐渭——大写意的开创者</strong></p>
<p>明代徐渭以狂放的笔墨开创了大写意花鸟画风。他的墨葡萄、墨荷等作品，泼墨淋漓、气势磅礴，将个人情感与笔墨表现融为一体，对后世影响深远。</p>
<p><strong>八大山人——冷逸孤高</strong></p>
<p>清初八大山人（朱耷）笔下的鱼鸟，常作"白眼向天"之态，笔墨简练到了极致，却饱含着深沉的亡国之痛和孤傲的人格精神。他的画"笔简而意足"，是写意精神的最高体现。</p>
<p><strong>齐白石——大俗大雅</strong></p>
<p>近代齐白石将民间艺术的质朴与文人画的雅致相结合，创造了"妙在似与不似之间"的艺术理念。他笔下的虾、蟹、雏鸡等，寥寥数笔便栩栩如生，充满生活情趣。</p>
<p>写意花鸟画的核心在于"写"——以书法的笔意来"写"出物象的神韵，而非简单地"描摹"外形。一笔一墨之间，皆是画家心性的流露。</p>`
    },
    {
      id: 11,
      title: "诗经中的自然意象",
      category: "poetry",
      icon: svgIcons.poetry,
      summary: '《诗经》作为中国最早的诗歌总集，以"赋比兴"的手法创造了大批优美的自然意象，开启了东方诗画交融的先河。',
      content: `<p>《诗经》是中国文学的光辉起点，其中大量的自然意象不仅构成了诗歌的美感基础，也为后世的绘画创作提供了丰富的题材和灵感。</p>
<p><strong>比兴——托物言志</strong></p>
<p>"关关雎鸠，在河之洲"以水鸟的和鸣起兴，引出君子对淑女的思慕；"桃之夭夭，灼灼其华"以盛开的桃花比喻新娘的美丽。比兴手法将自然景物与人的情感巧妙关联，使自然意象具有了深刻的人文内涵。</p>
<p><strong>草木虫鱼——万物有灵</strong></p>
<p>《诗经》中出现了上百种植物和动物："蒹葭苍苍，白露为霜"的芦苇；"昔我往矣，杨柳依依"的柳树；"呦呦鹿鸣，食野之苹"的鹿。这些意象不仅是自然景物，更是情感的载体。</p>
<p><strong>四时流转——时序之美</strong></p>
<p>"七月流火，九月授衣"记录了农事节律中时间的流转；"春日迟迟，卉木萋萋"描绘了春天的生机盎然。四时更替的自然景象，成为后世中国画"四时山水"的重要母题。</p>
<p>《诗经》的自然意象，奠定了中国艺术"天人合一"的美学基础，影响了数千年的诗画创作。</p>`
    },
    {
      id: 12,
      title: "陶渊明与田园诗境",
      category: "poetry",
      icon: svgIcons.poetry,
      summary: '陶渊明以"采菊东篱下，悠然见南山"的恬淡笔触，开创了中国田园诗派，其诗意深远影响了中国山水画的意境追求。',
      content: `<p>陶渊明（约365—427年），东晋末年诗人，被誉为"古今隐逸诗人之宗"。他的田园诗不仅是文学的瑰宝，更是中国山水画精神的重要源头。</p>
<p><strong>归去来兮——隐逸精神的象征</strong></p>
<p>"归去来兮，田园将芜胡不归？"陶渊明辞官归隐，以躬耕田园的生活方式践行了自己的理想。他不为五斗米折腰的气节，成为后世文人画的精神象征。《归去来兮辞》更是历代画家反复描绘的经典题材。</p>
<p><strong>桃花源——理想世界的图景</strong></p>
<p>《桃花源记》描绘了一个与世隔绝、安宁祥和的理想世界。"忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷"——这段文字本身就是一幅绝美的山水画卷，激发了无数画家的创作灵感。</p>
<p><strong>田园即景——平淡中的诗意</strong></p>
<p>"采菊东篱下，悠然见南山"——在极平常的田园劳作中，与自然山水心领神会、物我两忘。这种"平淡"不是平庸，而是绚烂之极归于平淡的至高境界，深刻影响了中国山水画"平淡天真"的美学追求。</p>
<p>陶渊明的田园诗境，为中国画提供了一种远离尘嚣、回归自然的精神家园。</p>`
    },
    {
      id: 13,
      title: "唐代人物画的辉煌",
      category: "history",
      icon: svgIcons.history,
      summary: "唐代是中国人物画的鼎盛时期，阎立本、吴道子、张萱、周昉等大家辈出，创造了气度恢宏的人物画典范。",
      content: `<p>唐代人物画达到了中国绘画史上的一个高峰，无论宫廷肖像、宗教壁画还是仕女画，都展现出大气磅礴的时代精神。</p>
<p><strong>阎立本——帝王图像的典范</strong></p>
<p>阎立本的《步辇图》描绘了唐太宗接见吐蕃使者禄东赞的历史场景，人物神态各异、主次分明，以铁线描勾勒出庄重典雅的画风。《历代帝王图》更是以传神之笔刻画了十三位帝王的气度与性格。</p>
<p><strong>吴道子——画圣的笔法革命</strong></p>
<p>吴道子被誉为"画圣"，他创造了"吴带当风"的独特风格，人物衣纹如被风吹动，飘举飞扬。他作画以"莼菜条"式的笔法，一笔而成，气韵贯通，对后世白描和写意人物画产生了深远影响。</p>
<p><strong>张萱与周昉——仕女画的典范</strong></p>
<p>张萱《捣练图》、周昉《簪花仕女图》代表了唐代仕女画的最高成就。画中女子体态丰腴、衣饰华美，展现了盛唐时期雍容华贵的审美风尚。其"丰颊肥体"的造型成为唐代仕女画的典型特征。</p>
<p>唐代人物画以饱满的构图、流畅的线条和富丽的色彩，展现了大唐帝国的开放与自信。</p>`
    },
    {
      id: 14,
      title: "明代吴门画派",
      category: "history",
      icon: svgIcons.history,
      summary: '以沈周、文徵明、唐寅、仇英"明四家"为代表的吴门画派，融汇宋元传统，开创了文人画的黄金时代。',
      content: `<p>明代中期，以苏州（古称吴门）为中心，形成了一个影响深远的绘画流派——吴门画派。它将文人画的审美趣味推向了新的高度。</p>
<p><strong>沈周——吴门画派的开创者</strong></p>
<p>沈周是吴门画派的奠基人，他博学多才，终身不仕，以诗书画自娱。他的山水画从学元四家入手，而后融会贯通，形成了浑厚华滋的独特风格。代表作《庐山高图》是为其师贺寿所作，气势磅礴。</p>
<p><strong>文徵明——文人画的集大成者</strong></p>
<p>文徵明诗文书画无一不精，他的山水画有"粗文"和"细文"两种风格，既有粗笔写意的奔放，又有细笔工致的典雅。他活到九十岁，创作生涯长达七十余年，桃李满天下。</p>
<p><strong>唐寅与仇英——雅俗共赏</strong></p>
<p>唐寅（唐伯虎）才华横溢，山水、人物、花鸟皆精，画风潇洒飘逸，充满文人意趣。仇英出身工匠，却以精湛的技艺跻身"明四家"之列，他的青绿山水和工笔人物精妙绝伦，成为雅俗共赏的典范。</p>
<p>吴门画派将诗书画融为一体，强调画家的人品修养，使文人画成为明代绘画的主流。</p>`
    },
    {
      id: 15,
      title: "中国画的颜料与用色",
      category: "tools",
      icon: svgIcons.tools,
      summary: "中国画颜料分为石色与草色两大类，源自天然矿物和植物，其独特的材质特性决定了中国画色彩的审美体系。",
      content: `<p>中国画的色彩体系独具特色，它不追求对自然光影的写实再现，而是以"随类赋彩"为原则，通过材料的天然之美来表现物象。</p>
<p><strong>石色——沉稳厚重</strong></p>
<p>石色即矿物颜料，由天然矿石研磨而成。石青（蓝铜矿）色相沉静，石绿（孔雀石）清新华美，朱砂（辰砂）鲜艳厚重，赭石（赤铁矿）温暖古朴。石色覆盖力强，经久不变，在青绿山水和重彩人物画中大量使用。</p>
<p><strong>草色——清透灵动</strong></p>
<p>草色即植物颜料，从植物中提取。花青（靛蓝）清雅沉着，藤黄（海藤树树脂）明丽透明，胭脂（红花等）娇艳柔美。草色透明度高，适合层层渲染，与墨色融合能产生丰富的层次变化。</p>
<p><strong>金属色——富丽堂皇</strong></p>
<p>金粉、银粉在宗教绘画和宫廷绘画中大量使用，为画面增添了庄重华贵的气息。敦煌壁画中的"沥粉贴金"技法，使佛像和纹饰熠熠生辉。</p>
<p><strong>墨分五色</strong></p>
<p>在中国画中，墨不仅是黑色，更是包含万千变化的色彩体系。焦、浓、重、淡、清五色墨韵，配合石色与草色的运用，构成了中国画独特的色彩语言。</p>`
    },
    {
      id: 16,
      title: "印章艺术与书画的关系",
      category: "tools",
      icon: svgIcons.tools,
      summary: "印章是书画作品不可或缺的组成部分，诗书画印四位一体，印章在画面中起到了平衡构图、点醒精神的重要作用。",
      content: `<p>中国印章艺术源远流长，从秦汉的实用印章到明清的流派篆刻，印章与书画的关系日益密切，最终形成了"诗书画印"四位一体的艺术格局。</p>
<p><strong>印章的种类</strong></p>
<p>书画作品上常见的印章有：姓名印（作者署名）、斋馆印（书斋名号）、闲章（名言警句或诗词）、收藏印（历代藏家印记）、鉴赏印（鉴定收藏之印）。一方好的印章，方寸之间见天地。</p>
<p><strong>篆刻三法</strong></p>
<p>篆刻讲究"篆法、章法、刀法"三法。篆法即印文的篆书书写，要求文字结构优美；章法即印面布局，讲究疏密、轻重、呼应；刀法即运刀刻制，有冲刀、切刀等技法。三者相辅相成，缺一不可。</p>
<p><strong>印章在画面中的作用</strong></p>
<p>印章在画面中不仅能标明作者，还能起到平衡构图、调节节奏、点醒精神的作用。一方朱红印章在墨色为主的画面中，如同画龙点睛，使整幅作品顿时生动起来。因此钤印的位置、大小、数量都需精心安排。</p>
<p>印章虽小，却是中国书画艺术中不可或缺的"点睛之笔"，承载着深厚的文化内涵。</p>`
    },
    {
      id: 17,
      title: "中国画的气韵与意境",
      category: "theory",
      icon: svgIcons.theory,
      summary: "气韵与意境是中国画审美的核心范畴，气韵是作品的生命力所在，意境则是超越物象的精神境界，二者共同构成了中国画的灵魂。",
      content: `<p>"气韵"与"意境"是中国画美学中最重要的两个范畴，它们超越了对物象的简单描摹，指向了更为深远的艺术境界。</p>
<p><strong>气韵生动——生命的律动</strong></p>
<p>"气韵生动"是谢赫六法之首，也是中国画的最高审美标准。"气"是宇宙万物的生命能量，是贯穿画面的精神气息；"韵"是气的节奏和韵律，是画面中若有若无的余味。一幅画有了气韵，便有了生命；没有气韵，则只是死物。</p>
<p><strong>意境——象外之象</strong></p>
<p>意境是中国艺术特有的美学概念，指艺术作品所创造的超越具体物象的精神境界。好的画作，不仅画出了"眼中之竹"，更画出了"胸中之竹"和"手中之竹"。意境是实景与虚境、有限与无限、具体与抽象的统一。</p>
<p><strong>虚与实的辩证</strong></p>
<p>中国画讲究"虚实相生"。实处是笔墨所到之处，虚处是留白和省略之处。虚不是空无，而是"意"的所在。一幅好画，往往"妙在虚处"——那些未画出的部分，恰恰是意境最深远的地方。</p>
<p>气韵是画的"呼吸"，意境是画的"灵魂"，二者共同构成了中国画超越时空的艺术魅力。</p>`
    },
    {
      id: 18,
      title: "书画同源论",
      category: "theory",
      icon: svgIcons.theory,
      summary: '"书画同源"是中国艺术的重要理论，认为书法与绘画在起源、工具、用笔和审美上有着本质的共通性，二者相互滋养、相得益彰。',
      content: `<p>"书画同源"是中国艺术理论中的一个核心命题，它揭示了书法与绘画之间深刻的亲缘关系，是理解中国画独特审美的重要钥匙。</p>
<p><strong>同源——共同的起源</strong></p>
<p>从文字学的角度看，最早的汉字是象形文字，如"日"像太阳，"山"像山峰，这些文字本身就是简化的图画。唐代张彦远在《历代名画记》中首次明确提出"书画同体而未分"的观点，认为在远古时期，书与画本为一体。</p>
<p><strong>同法——共同的用笔</strong></p>
<p>书法与绘画使用相同的工具（毛笔）和相同的用笔法则。书法中的"永字八法"——侧、勒、努、趯、策、掠、啄、磔，与绘画中的勾、皴、擦、点、染等笔法一脉相通。元代赵孟頫诗云："石如飞白木如籀，写竹还应八法通"，精准地道出了书画用笔的共通性。</p>
<p><strong>同源异流——相互滋养</strong></p>
<p>虽然书画同源，但二者各有侧重。书法重在"写"，以文字为媒介表达心性；绘画重在"画"，以形象为媒介营造意境。然而在中国画的发展中，书法的"写意"精神不断渗透到绘画中，使"写意画"成为中国画的主流。同样，绘画的造型意识也丰富了书法的表现力。</p>
<p>理解"书画同源"，才能真正理解中国画为何强调"写"而不是"画"，为何把笔墨放在如此重要的位置。</p>`
    }
  ];

  const grid = document.getElementById("kb-grid");
  const searchInput = document.getElementById("kb-search");
  const catButtons = document.querySelectorAll(".kb-cat");
  const emptyState = document.getElementById("kb-empty");
  const detailOverlay = document.getElementById("kb-detail");
  const detailClose = document.getElementById("kb-detail-close");
  const detailIcon = document.getElementById("kb-detail-icon");
  const detailCat = document.getElementById("kb-detail-cat");
  const detailTitle = document.getElementById("kb-detail-title");
  const detailBody = document.getElementById("kb-detail-body");

  let currentCat = "all";
  let currentSearch = "";

  const catLabels = {
    painting: "国画技法",
    poetry: "诗词赏析",
    history: "艺术史话",
    tools: "文房四宝",
    theory: "美学理论"
  };

  function renderArticles() {
    const filtered = articles.filter((a) => {
      const matchCat = currentCat === "all" || a.category === currentCat;
      const keyword = currentSearch.toLowerCase();
      const matchSearch =
        !keyword ||
        a.title.toLowerCase().includes(keyword) ||
        a.summary.toLowerCase().includes(keyword);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState.classList.remove("hidden");
      return;
    }

    emptyState.classList.add("hidden");
    grid.innerHTML = filtered
      .map(
        (a) => `
      <article class="kb-card" data-id="${a.id}">
        <div class="kb-card-header">
          <span class="kb-card-icon">${a.icon}</span>
          <span class="kb-card-cat">${catLabels[a.category]}</span>
        </div>
        <h3>${a.title}</h3>
        <p>${a.summary}</p>
      </article>
    `
      )
      .join("");

    grid.querySelectorAll(".kb-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = parseInt(card.dataset.id);
        const article = articles.find((a) => a.id === id);
        if (article) openDetail(article);
      });
    });
  }

  function openDetail(article) {
    detailIcon.innerHTML = article.icon;
    detailCat.textContent = catLabels[article.category];
    detailTitle.textContent = article.title;
    detailBody.innerHTML = article.content;

    // Add related gallery link
    const relatedSection = document.getElementById("kb-detail-related");
    if (relatedSection) {
      const relatedArt = getRelatedArtworks(article.category);
      if (relatedArt.length > 0) {
        relatedSection.innerHTML =
          '<h4 class="title-sm">相关作品</h4>' +
          relatedArt
            .map(
              (art) =>
                '<a class="kb-related-art" href="../Gallary/Detail.html?id=' +
                art.id +
                '">' +
                '<span class="kb-related-emoji">' +
                art.emoji +
                "</span>" +
                "<div>" +
                "<h5>" +
                art.title +
                "</h5>" +
                "<p>" +
                art.author +
                "</p>" +
                "</div>" +
                "</a>"
            )
            .join("");
      } else {
        relatedSection.innerHTML = "";
      }
    }

    // Record history
    const history = JSON.parse(localStorage.getItem("artstudio_history") || "[]");
    history.unshift({ title: article.title, type: "knowledge", time: Date.now() });
    localStorage.setItem("artstudio_history", JSON.stringify(history.slice(0, 50)));

    detailOverlay.classList.remove("hidden");
    document.body.classList.add("overlay-open");
    document.documentElement.classList.add("overlay-open");
  }

  function getRelatedArtworks(category) {
    const categoryMap = {
      painting: ["landscape", "figure", "flower"],
      poetry: ["landscape", "flower", "calligraphy"],
      history: ["landscape", "figure", "calligraphy"],
      tools: ["calligraphy", "landscape"],
      theory: ["landscape", "figure", "flower", "calligraphy"]
    };
    const relatedCats = categoryMap[category] || [];
    try {
      const galleryPath = "../Gallary/Gallary.js";
      const allArts = [
        { id: 1, title: "溪山行旅图", author: "范宽（北宋）", category: "landscape", emoji: "山" },
        { id: 2, title: "千里江山图", author: "王希孟（北宋）", category: "landscape", emoji: "水" },
        { id: 3, title: "富春山居图", author: "黄公望（元）", category: "landscape", emoji: "峰" },
        { id: 4, title: "清明上河图", author: "张择端（北宋）", category: "figure", emoji: "桥" },
        { id: 5, title: "洛神赋图", author: "顾恺之（东晋）", category: "figure", emoji: "仙" },
        { id: 6, title: "韩熙载夜宴图", author: "顾闳中（南唐）", category: "figure", emoji: "宴" },
        { id: 7, title: "芙蓉锦鸡图", author: "赵佶（北宋）", category: "flower", emoji: "花" },
        { id: 8, title: "墨梅图", author: "王冕（元）", category: "flower", emoji: "梅" },
        { id: 9, title: "寒雀图", author: "崔白（北宋）", category: "flower", emoji: "雀" },
        { id: 10, title: "兰亭序", author: "王羲之（东晋）", category: "calligraphy", emoji: "书" },
        { id: 11, title: "祭侄文稿", author: "颜真卿（唐）", category: "calligraphy", emoji: "帖" },
        { id: 12, title: "黄州寒食诗帖", author: "苏轼（北宋）", category: "calligraphy", emoji: "诗" },
        { id: 13, title: "泼墨山水", author: "张大千（近现代）", category: "modern", emoji: "墨" },
        { id: 14, title: "虾", author: "齐白石（近现代）", category: "modern", emoji: "虾" }
      ];
      return allArts.filter((a) => relatedCats.includes(a.category)).slice(0, 3);
    } catch {
      return [];
    }
  }

  function closeDetail() {
    detailOverlay.classList.add("hidden");
    document.body.classList.remove("overlay-open");
    document.documentElement.classList.remove("overlay-open");
  }

  detailClose.addEventListener("click", closeDetail);
  detailOverlay.addEventListener("click", (e) => {
    if (e.target === detailOverlay) closeDetail();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !detailOverlay.classList.contains("hidden")) {
      closeDetail();
    }
  });

  catButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      catButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.dataset.cat;

      // Fade out, then re-render, then fade in
      grid.style.opacity = "0";
      grid.style.transform = "translateY(8px)";
      setTimeout(() => {
        renderArticles();
        requestAnimationFrame(() => {
          grid.style.opacity = "1";
          grid.style.transform = "translateY(0)";
        });
      }, 200);
    });
  });

  let searchTimeout;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentSearch = searchInput.value.trim();
      renderArticles();
    }, 300);
  });

  renderArticles();
  renderDataViz();

  function renderDataViz() {
    const vizContainer = document.getElementById("kb-viz-charts");
    if (!vizContainer) return;

    // Category distribution
    const catCounts = {};
    articles.forEach((a) => {
      catCounts[a.category] = (catCounts[a.category] || 0) + 1;
    });
    const maxCount = Math.max(...Object.values(catCounts));

    let html = '<div class="kb-viz-charts">';

    // Bar charts
    Object.entries(catCounts).forEach(([cat, count]) => {
      const pct = (count / maxCount) * 100;
      html +=
        '<div class="kb-viz-bar">' +
        '<span class="kb-viz-bar-label">' +
        (catLabels[cat] || cat) +
        "</span>" +
        '<div class="kb-viz-bar-track">' +
        '<div class="kb-viz-bar-fill ' +
        cat +
        '" style="width:' +
        pct +
        '%"></div>' +
        "</div>" +
        '<span class="kb-viz-bar-count">' +
        count +
        "</span>" +
        "</div>";
    });

    html += "</div>";

    vizContainer.innerHTML = html;
  }
});