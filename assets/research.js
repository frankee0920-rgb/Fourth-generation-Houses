const W={
  tradeoffs:[
    ['可用面积与场景','大尺度露台把会客、亲子、园艺等活动移到室外，室内外可形成LDKBG联动。','出挑空间增加结构荷载、围护长度和建造成本；“得房率”还受当地计容规则影响。','核对建筑面积计算书、净使用面积表及露台产权边界。'],
    ['采光与景观','边厅、转角窗与错层庭院可扩大景观面，形成270°视野。','上层挑板会遮挡下层；进深越大、出挑越深，室内深处采光风险越高。','提交冬至日照、室内采光模拟及典型户型剖面。'],
    ['私密与开放','空中庭院提供比普通阳台更完整的半户外空间。','上下层、斜对层及邻栋之间可能产生俯视、对视和噪声干扰。','用真实视点高度画视线剖面，不能只画立面绿化。'],
    ['绿化与微气候','植物可遮阳、改善近人尺度感受，并提供季相体验。','覆土、积水、落叶、蚊虫、风沙和越冬都转化为长期运维任务。','明确植物表、覆土厚度、灌溉、排水、养护责任和年度预算。'],
    ['产品辨识度','错层挑台能形成强烈立面识别，并支持差异化改善产品。','形体碎片化会增加节点数量；后期封闭、堆物和植物失养会迅速破坏立面。','把栏板、设备、晾晒、家具、封闭治理纳入立面全生命周期设计。'],
    ['市场溢价','专业文章普遍将高得房率和花园体验视为去化卖点。','营销价值不能替代安全、耐久和物业可执行性；高成本也可能转嫁给购房者。','将产品承诺逐项对应审批图、合同附件、交付标准和物业公约。']
  ],
  strategies:[
    {title:'采光：先控制出挑，再谈花园尺度',text:'徐辉设计提出点式/错位布局、大面宽和边厅户型，以增加侧向入光。策略有效性取决于朝向、楼间距和进深，必须用本项目模拟验证。',imgs:['article-02-06.png','article-02-07.png','article-02-08.png']},
    {title:'隐私：用视线剖面确定挡板，不凭感觉遮挡',text:'文章建议在上下层间设置视线挡板，并结合艺术玻璃、格栅或绿化；挡得越多也可能损失采光和通风，因此要做多目标校核。',imgs:['article-02-10.png','article-02-11.png','article-02-12.png']},
    {title:'结构：庭院尺度必须服从受力与抗震条件',text:'文章披露，完整四代住宅相较传统住宅可能显著增加钢筋、混凝土和单方造价；具体增量是其数据库测算，不应直接套用于驻马店。高烈度区、建筑高度、覆土和悬挑长度都会改变结果。',imgs:['article-02-14.png']},
    {title:'防水排水：种植屋面是系统，不是多刷一层涂料',text:'专业文章主张耐根穿刺防水、多道设防、雨水口与溢流组织。本站进一步要求给出检修路径、闭水试验、堵塞后的安全溢流和渗漏责任界面。',imgs:['article-02-16.png']},
    {title:'户型：奇偶层必须成套阅读',text:'错层庭院往往导致奇偶层户型、挑空和花园位置不同。单看“明星层”会遗漏另一层的采光、私密和功能代价。',imgs:['article-06-04.png','article-06-06.png','article-06-08.png','article-06-09.png']},
    {title:'运营：把植物、设备和禁止封闭写进交付体系',text:'灌溉、蚊虫、冻融、风沙、植物更换和高空坠物都不是景观效果图能回答的问题，应形成设计、施工、物业和业主共同执行的管理文件。',imgs:['article-06-13.png','article-06-16.png']}
  ],
  studies:[
    {city:'南阳',name:'筑建方城四代住宅方案',source:'筑建方城设计研究院',claim:'资料展示总图、流线、立面生成与多套户型，适合观察小高层空中庭院如何嵌入真实基地。',read:'可确认：项目采用错层花园与大面宽策略。待验证：审批状态、计容、结构与交付构造。',imgs:['article-03-02.png','article-03-09.png','article-03-14.png','article-03-15.png','article-03-16.png','article-03-17.png','article-03-19.png'],url:'https://mp.weixin.qq.com/s/E2jjW9OVKDep35FvTt9I8w?scene=334'},
    {city:'郑州',name:'复式四代宅产品样本',source:'新微设计 / Line+孟凡浩设计',claim:'文章展示约230㎡复式及多组约139—176㎡户型，突出挑空客厅、奇偶层花园和立面一体化。',read:'优势是室内外空间组织完整；代价是产品总价、奇偶层差异、结构复杂度和庭院维护。面积与层高以原文及后续审批资料复核。',imgs:['article-06-02.jpg','article-06-03.png','article-06-04.png','article-06-07.png','article-06-10.png'],url:'https://mp.weixin.qq.com/s/ADSt1rMMsaUjFjc0dFQu8A?scene=334'},
    {city:'项城',name:'博群·悦玺湾',source:'CTD上海芊清 / 搜建筑',claim:'三四线城市首置首改样本，文章给出约118%得房率表述，并展示120、139、150㎡等产品及最高约125㎡空中花园。',read:'它说明四代住宅不只面向顶豪；但超大庭院的结构、产权、维护和实际使用率仍需施工图与交付后评估。',imgs:['article-07-07.jpg','article-07-11.jpg','article-07-12.jpg','article-07-13.jpg','article-07-15.png','article-07-16.png','article-07-17.png'],url:'https://mp.weixin.qq.com/s/N1ALMSyKHPYnVyDH51nvKQ?scene=334'},
    {city:'驻马店',name:'御都·珑水雲',source:'徐辉设计 / 搜建筑',claim:'项目位于驻马店，文章展示错层庭院、LDKBG一体化、200㎡一梯一户和144㎡边厅等产品信息。',read:'这是最直接的本地参照。文章为设计发布且项目状态标注“建成”，但仍需补充实景交付、住户使用、渗漏维护和物业访谈。',imgs:['article-09-06.png','article-09-07.png','article-09-09.png','article-09-11.jpg','article-09-12.jpg','article-09-14.png','article-09-15.png'],url:'https://mp.weixin.qq.com/s/o6r6m95OXBjJH1rOkvNqUg?scene=334'}
  ],
  sources:[
    ['鲜房','“四代宅”突袭郑州，是果断入手还是持续观望？','郑州市场与优缺点综述','https://mp.weixin.qq.com/s/DNvW5m8gxyyzScxWTEsqNg'],
    ['搜建筑 / 徐辉设计','四代住宅：产品体系研究，现实痛点＋解决策略','核心技术证据','https://mp.weixin.qq.com/s/Y9OagjT_PLFE9UC9jCdR4A'],
    ['筑建方城设计研究院','园境共生，空中墅居：南阳市四代住宅设计','南阳方案案例','https://mp.weixin.qq.com/s/E2jjW9OVKDep35FvTt9I8w?scene=334'],
    ['搜建筑','全景舱·四代宅：六大核心优势与LDKG一体化','产品案例线索','https://mp.weixin.qq.com/s/RLAxzPAbmKTC_S2LaL0eMA?scene=334'],
    ['筑善舍 Studio','郑州北龙湖四代住宅户型产品全维度解析','郑州案例线索','https://mp.weixin.qq.com/s/ZZpfBHKsPzzWG2zFBYQAvQ?scene=334'],
    ['新微设计','复式四代宅与郑州项目设计','郑州户型与立面','https://mp.weixin.qq.com/s/ADSt1rMMsaUjFjc0dFQu8A?scene=334'],
    ['搜建筑','三四线城市四代宅设计策略','项城案例','https://mp.weixin.qq.com/s/N1ALMSyKHPYnVyDH51nvKQ?scene=334'],
    ['设计气象台','第四代住宅行业资料综述','背景线索，不作主证据','https://mp.weixin.qq.com/s/xMfejPVa_5Fw1Ye_8xsrRA?scene=334'],
    ['搜建筑 / 徐辉设计','御都·珑水雲：一梯一户的户型','驻马店直接案例','https://mp.weixin.qq.com/s/o6r6m95OXBjJH1rOkvNqUg?scene=334']
  ]
};
const img=n=>`assets/wechat/${n}`;
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('tradeoff-grid').innerHTML=W.tradeoffs.map((x,i)=>`<article class="tradeoff-card"><span class="tradeoff-no">0${i+1}</span><h3>${x[0]}</h3><div class="gain"><b>获得</b><p>${x[1]}</p></div><div class="cost"><b>代价</b><p>${x[2]}</p></div><div class="check"><b>必须核验</b><p>${x[3]}</p></div></article>`).join('');
  document.getElementById('strategy-list').innerHTML=W.strategies.map((x,i)=>`<article class="strategy-row"><div class="strategy-copy"><span>策略 ${i+1}</span><h3>${x.title}</h3><p>${x.text}</p></div><div class="strategy-images">${x.imgs.map((a,j)=>`<figure><img src="${img(a)}" loading="lazy" alt="${x.title}图解 ${j+1}"><figcaption>原文图解 ${j+1}</figcaption></figure>`).join('')}</div></article>`).join('');
  document.getElementById('henan-studies').innerHTML=W.studies.map(x=>`<article class="henan-study"><div class="study-heading"><span>${x.city}</span><div><h3>${x.name}</h3><p>${x.source}</p></div><a href="${x.url}" target="_blank" rel="noopener">查看原文 ↗</a></div><div class="study-gallery">${x.imgs.map((a,j)=>`<figure><img src="${img(a)}" loading="lazy" alt="${x.name}资料图 ${j+1}"></figure>`).join('')}</div><div class="study-analysis"><p><b>原文提供</b>${x.claim}</p><p><b>研究解读</b>${x.read}</p></div></article>`).join('');
  document.getElementById('source-register').innerHTML=W.sources.map((x,i)=>`<a class="source-item" href="${x[3]}" target="_blank" rel="noopener"><span>${String(i+1).padStart(2,'0')}</span><div><b>${x[1]}</b><small>${x[0]} · ${x[2]}</small></div><i>原文 ↗</i></a>`).join('');
});
