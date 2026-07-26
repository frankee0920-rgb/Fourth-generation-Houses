document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(location.search).get("id") || D.cases[0].id;
  const c = getCase(id);
  const root = document.getElementById("detail");
  if (!c) {
    root.innerHTML = '<div class="empty">未找到案例。</div>';
    return;
  }
  document.title = `${c.name}｜${D.meta.title}`;
  root.innerHTML = c.id === "huahong-yunshu" ? renderHuahong(c)
    : ["jianzhong-jiuyue-yunzhu","shangqiu-weilai-tianjing","longji-future-forest"].includes(c.id) ? renderHenanCase(c)
    : renderGeneric(c);
});

function renderGeneric(c) {
  return `
    <div class="breadcrumb"><a href="cases.html">案例库</a><span>/</span><span>${c.name}</span></div>
    <section class="detail-hero">
      <div class="detail-copy">
        <span class="eyebrow">${c.region} · ${c.status} · 证据等级 ${c.confidence}</span>
        <h1>${c.name}</h1><p>${c.summary}</p>
      </div>
    </section>
    <div class="detail-grid">
      <article class="info-card"><h3>项目概览</h3><div class="kv-grid">
        ${[["城市",c.city],["开发主体",c.developer],["交付状态",c.delivery],["面积段",c.area],
        ["产品类型",c.type],["庭院形式",c.garden],["气候条件",c.climate],["证据等级",c.confidence]]
        .map(([k,v])=>`<div class="kv"><span>${k}</span><strong>${v}</strong></div>`).join("")}
      </div></article>
      <article class="info-card"><h3>为什么值得研究</h3><p>${c.why}</p><div class="tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>
      <article class="info-card"><h3>空间观察</h3><ul class="list-clean">${c.spatial.map(x=>`<li>${x}</li>`).join("")}</ul></article>
      <article class="info-card"><h3>技术与运营</h3><ul class="list-clean">${[...c.technical,...c.operation].map(x=>`<li>${x}</li>`).join("")}</ul></article>
      <article class="info-card research-only" style="grid-column:1/-1"><h3>资料状态</h3><p>${c.sourceNote}</p></article>
    </div>`;
}

function fig(src, title, note) {
  return `<figure class="case-figure"><a href="${src}" target="_blank"><img src="${src}" alt="${title}" loading="lazy"></a><figcaption><strong>${title}</strong><span>${note}</span></figcaption></figure>`;
}

function renderHenanCase(c) {
  const configs = {
    "jianzhong-jiuyue-yunzhu": {
      no:"02", year:"2025", designer:"徐辉设计", base:"assets/cases/jiuyue-yunzhu/",
      source:"https://www.archina.com/index.php?a=show&g=works&id=159646&m=index",
      lead:"郑州市域立体生态建筑试点：从280㎡奇偶层平面，核对挑空客厅、环绕庭院与立面花池如何协同。",
      facts:[["项目地点","郑州南站片区"],["项目身份","市域立体生态建筑试点"],["重点图纸","280㎡ 4+1室"],["庭院组织","奇偶层换位"],["资料时间","2025-12"],["建成证据","公开资料未覆盖"]],
      plans:[
        ["odd-plan.jpg","280㎡奇数层平面","原图标注LDKB+1巨厅、客厅与阳台洄游、下层挑空区域及约8.7m庭院边长。"],
        ["even-plan.jpg","280㎡偶数层平面","原图显示公共空间和挑空换位，卧室、核心筒及主要湿区基本保持对应。"]
      ],
      planNotes:[
        ["设计方陈述","徐辉设计将户型概括为“挑高空间、LDKB+1巨厅”，强调客厅与阳台充分洄游。"],
        ["原图可核","奇偶层均标出客厅、餐厅、厨房、书房/茶桌与空中花园的连接关系，并以虚线标示挑空范围。"],
        ["仍然缺失","公开页未提供完整标准层组合、剖面、结构体系、消防专项和庭院排水节点，因此不评价工程性能。"]
      ],
      other:[
        ["planning.jpg","规划与景观展示","设计方以中十字轴组织住区；该图用于理解公共空间结构，不代替报批总图。"],
        ["facade.jpg","立面设计表达","设计方称通过控制横向线脚截面、圆弧转角和错层露台减轻体量感。"],
        ["garden.png","空中庭院效果表达","效果图说明设计意图；不是交付实景，也不能证明植物、排水或维护结果。"]
      ],
      audit:[
        ["户型关系","奇偶层原始平面可查","完整标准层及套型组合缺失"],
        ["空间尺度","庭院及公共空间有尺寸标注","净活动面积、层高与剖面缺失"],
        ["立面策略","设计方说明花池、出挑与线脚协同","节点大样及材料耐久性缺失"],
        ["建成运营","无入住后专业资料","不能评价渗漏、养护和使用率"]
      ],
      transfer:"它提供了河南气候区内“公共空间与庭院换位”的直接户型样本；对驻马店真正可转移的是奇偶层协同方法，而不是280㎡面积和郑州试点政策。"
    },
    "shangqiu-weilai-tianjing": {
      no:"03", year:"2025", designer:"基准方中", base:"assets/cases/weilai-tianjing/",
      source:"https://www.archina.com/index.php?a=show&g=works&id=158680&m=index",
      lead:"河南地级市的多面积段样本：从总图、标准层、户型到BIM与现场照片，核对“6米庭院”怎样进入工程协同。",
      facts:[["项目地点","河南商丘"],["产品范围","122–244㎡"],["户型数量","13种大平层"],["庭院组织","奇偶层错位"],["公开阶段","设计+在建"],["设计周期","约8个月（设计方）"]],
      plans:[
        ["type-plan-a.png","典型奇偶层户型组 A","同一套型的阳台和露台在奇偶层换位，图中同时标出面宽、进深与设备平台。"],
        ["type-plan-b.png","跃层/挑空产品组 B","原图包含224㎡与186㎡等不同组合，显示该项目不是单一户型复制。"]
      ],
      planNotes:[
        ["设计方陈述","基准方中称项目设置122–244㎡、13种大平层产品，采用奇偶错层形成约6m私人空中庭院。"],
        ["原图可核","公开户型可见不同面积段、露台换位、端厅及局部挑空，但小字信息仍需原始PDF或施工图复核。"],
        ["仍然缺失","公开页未给出每个户型的完整剖面、日照计算、消防论证及空中花园排水种植节点。"]
      ],
      other:[
        ["masterplan.jpg","总平面及主要指标表","图中披露规划用地、容积率、建筑密度、户数等；仍应以后续规划许可文件复核。"],
        ["standard-floor.jpg","标准层平面原图","可用于核对多户组合、核心筒、连廊与奇偶层露台关系。"],
        ["garden-detail.png","庭院与立面节点推敲","设计方展示不同节点方案比选，证明项目进行了构造协同，不等于节点已经通过全部专项审查。"],
        ["bim.png","BIM综合模型","原文展示结构、外装、分缝及成模的协同流程。"],
        ["coordination.png","建模协同步骤","资料明确列出结构建模、外装建模、分缝建模和综合成模。"],
        ["construction.png","施工阶段照片","照片可确认部分主体及外围护处于实施阶段，但不能代表整体竣工交付。"]
      ],
      audit:[
        ["规划组织","总图及指标表公开","规划许可原件仍待核"],
        ["产品体系","多种户型与标准层图公开","户型编号、销售面积对应关系待核"],
        ["工程协同","BIM、节点比选和现场照片公开","防水、排水、消防专项资料缺失"],
        ["建成运营","可确认进入施工阶段","整体交付、入住和维护资料缺失"]
      ],
      transfer:"商丘与驻马店同属河南地级市，气候和市场层级更接近。该案例可用于比较122–244㎡产品梯度、奇偶层组织及工程协同深度，但不能直接推导驻马店的总价接受度。"
    },
    "longji-future-forest": {
      no:"04", year:"2022", designer:"徐辉设计", base:"assets/cases/longji-forest/",
      source:"https://www.archina.com/index.php/works/index/show/id/13531",
      lead:"主流改善面积段的“类四代住宅”：把116–135㎡、T3/T4楼型、3.15m层高和两层通高庭院放进同一套住区系统。",
      facts:[["设计机构","徐辉设计"],["户型面积","116–135㎡"],["楼型","T3 / T4"],["标准层高","3.15m"],["公开时间","2022"],["建成证据","公开资料未覆盖"]],
      plans:[
        ["plan.png","典型户型原图","原图展示三/四开间住宅与南向空中庭院的直接关系。"],
        ["section.png","两层通高庭院剖面","剖面连续展示层间庭院及上下户关系，是判断“通高”而非普通阳台的直接图纸。"]
      ],
      planNotes:[
        ["设计方陈述","徐辉设计称项目以T4与T3的116–135㎡产品为主，采用私家电梯厅、3.15m层高和两层通高空中花园。"],
        ["原图可复核","公开平面与剖面支持户型面积段、南向庭院及层间错位关系的基本阅读。"],
        ["仍然缺失","奇偶层完整成对户型、结构节点、防水排水、消防专项和建成实景未公开。"]
      ],
      other:[
        ["planning-process.png","规划生成过程","原图展示从场地容量到景观中心和楼栋组织的推演。"],
        ["landscape-system.png","地面与层间复合景观","设计方提出“地面绿化+层间绿化”的多维景观结构。"],
        ["facade.jpg","单体立面效果","两层通高庭院形成错落的立面节奏；该图为效果表达。"],
        ["garden.gif","庭院空间效果","用于理解室内外关系，不作为交付证明。"]
      ],
      audit:[
        ["面积与楼型","设计方明确116–135㎡、T3/T4","各户型面积表与标准层组合待补"],
        ["平面剖面","公开一张户型及连续剖面","奇偶层成套图纸待补"],
        ["景观系统","规划生成和层间绿化示意公开","植物、荷载、排水与维护方案待补"],
        ["建成运营","无专业交付后资料","不能评价施工一致性和长期使用"]
      ],
      transfer:"相比280㎡超大户型，本案116–135㎡面积段更接近驻马店主流改善研究的现实区间。可以用于讨论庭院尺度与总面积的平衡，但西安都市圈的政策、日照和市场条件仍需重新核对。"
    }
  };
  const x=configs[c.id];
  return `
  <div class="breadcrumb"><a href="cases.html">案例库</a><span>/</span><span>专业深度案例 ${x.no}</span></div>
  <section class="case-study-hero henan-hero"><div><span class="eyebrow">HENAN CASE ${x.no} · ${x.year}</span><h1>${c.name}</h1><p class="hero-lead">${x.lead}</p>
  <div class="tags"><span class="tag">${c.city}</span><span class="tag">${x.designer}</span><span class="tag">专业设计资料</span><span class="tag">建成结论待核</span></div></div>
  <aside class="evidence-panel"><div><span>设计资料</span><strong>A</strong><small>设计机构原始发布</small></div><div><span>工程状态</span><strong>B/C</strong><small>按公开照片限定</small></div><div><span>入住反馈</span><strong>—</strong><small>尚无专业评估</small></div></aside></section>
  <nav class="case-toc"><a href="#facts">项目边界</a><a href="#plan">户型图纸</a><a href="#system">设计系统</a><a href="#audit">证据审计</a><a href="#zmd">驻马店参照</a><a href="#sources">来源</a></nav>
  <section id="facts" class="study-section"><div class="section-kicker">01 / SCOPE</div><h2>先界定公开资料能够说明什么</h2><div class="fact-strip">${x.facts.map(([k,v])=>`<div><span>${k}</span><strong>${v}</strong></div>`).join("")}</div>
  <div class="boundary-note"><strong>使用规则</strong><p>本页只转述设计机构明确披露的信息，并对原图作可复核描述。效果图说明空间意图，现场照片说明拍摄时的建设状态；两者都不自动等于交付品质。</p></div></section>
  <section id="plan" class="study-section"><div class="section-kicker">02 / PLAN</div><h2>奇偶层必须成对阅读，不能只展示一张“明星户型”</h2>
  <div class="drawing-pair">${x.plans.map(p=>fig(x.base+p[0],p[1],p[2]+" 来源："+x.designer+"，"+x.year+"。")).join("")}</div>
  <div class="verdict-grid">${x.planNotes.map(([tag,h,p],i)=>`<article class="verdict ${["good","watch","stop"][i]}"><span>${tag}</span><h3>${h}</h3><p>${p}</p></article>`).join("")}</div></section>
  <section id="system" class="study-section"><div class="section-kicker">03 / DESIGN SYSTEM</div><h2>从户型之外继续核对总图、立面和工程协同</h2>
  <div class="case-gallery">${x.other.map(p=>fig(x.base+p[0],p[1],p[2]+" 来源："+x.designer+"。")).join("")}</div></section>
  <section id="audit" class="study-section"><div class="section-kicker">04 / EVIDENCE AUDIT</div><h2>不替资料下结论，只记录证据覆盖程度</h2>
  <div class="audit-table-wrap"><table class="audit-table"><thead><tr><th>维度</th><th>已有证据</th><th>尚缺材料</th><th>状态</th></tr></thead><tbody>
  ${x.audit.map(([a,b,d])=>`<tr><th>${a}</th><td>${b}</td><td>${d}</td><td><span class="status cautious">继续核实</span></td></tr>`).join("")}</tbody></table></div></section>
  <section id="zmd" class="study-section"><div class="section-kicker">05 / ZHUMADIAN</div><h2>作为驻马店参照时，只转移有相同前提的部分</h2><div class="critical-note"><strong>限定性参照</strong><p>${x.transfer}</p></div></section>
  <section id="sources" class="study-section source-section"><div class="section-kicker">06 / SOURCE</div><h2>原始来源</h2>
  <div class="source-row"><b>A</b><div><a href="${x.source}" target="_blank" rel="noopener">《${c.name}｜${x.designer}》</a><p>设计机构项目发布，ARCHINA收录；本页图片、项目陈述和阶段信息均从该来源整理。</p></div></div>
  <div class="source-row"><b>待补</b><div><strong>规划许可、施工图审查、消防专项、竣工验收及入住后评估</strong><p>取得这些资料前，不对整体工程质量和长期使用效果作结论。</p></div></div>
  <p class="copyright-note">图纸与图片版权归原设计及发布机构所有，本页用于非商业研究与评论；点击图片查看清晰版本。</p></section>`;
}

function renderHuahong(c) {
  const base = "assets/cases/huahong-yunshu/";
  return `
  <div class="breadcrumb"><a href="cases.html">案例库</a><span>/</span><span>标准深度案例 01</span></div>
  <section class="case-study-hero">
    <div>
      <span class="eyebrow">STANDARD CASE 01 · 2025</span>
      <h1>华宏云墅</h1>
      <p class="hero-lead">从奇偶层平面到6.2米剖面：一个“室内公共空间与空中庭院同步挑空”的近期第四代住宅样本。</p>
      <div class="tags"><span class="tag">南宁</span><span class="tag">华蓝集团设计</span><span class="tag">约128㎡样本</span><span class="tag">设计逻辑可核</span></div>
    </div>
    <aside class="evidence-panel">
      <div><span>设计资料</span><strong>A</strong><small>设计机构原始发布</small></div>
      <div><span>建成状态</span><strong>C</strong><small>在建/交付待补证</small></div>
      <div><span>入住反馈</span><strong>—</strong><small>尚不作判断</small></div>
    </aside>
  </section>

  <nav class="case-toc">
    <a href="#conclusion">先说结论</a><a href="#facts">项目边界</a><a href="#plan">平面解剖</a>
    <a href="#section">剖面机制</a><a href="#audit">客观审计</a><a href="#zmd">驻马店启示</a><a href="#sources">证据表</a>
  </nav>

  <section id="conclusion" class="study-section">
    <div class="section-kicker">01 / EVIDENCE SUMMARY</div><h2>先分清：设计方说了什么，图纸能确认什么</h2>
    <div class="verdict-grid">
      <article class="verdict good"><span>设计方陈述</span><h3>客餐厅与庭院同步挑空</h3><p>华蓝集团称，奇偶层通过客厅及阳台错位、其他房间尽量保持不变，实现户户挑高客厅和层层大阳台。</p></article>
      <article class="verdict watch"><span>原图可复核</span><h3>错位与6.2米关系可见</h3><p>公开的奇偶层平面和剖面能够确认空间换位及标注尺寸；但原图不是完整施工图，不能据此评价所有技术性能。</p></article>
      <article class="verdict stop"><span>资料未覆盖</span><h3>交付和长期使用不能评价</h3><p>原文没有提供完整交付、跨季节入住、渗漏、植物成活或物业成本资料，本页不对此作正负判断。</p></article>
    </div>
  </section>

  <section id="facts" class="study-section">
    <div class="section-kicker">02 / SCOPE</div><h2>项目事实与分析边界</h2>
    <div class="fact-strip">
      <div><span>公开时间</span><strong>2025</strong></div><div><span>设计机构</span><strong>华蓝集团</strong></div>
      <div><span>计容建面</span><strong>95,929.74㎡</strong></div><div><span>容积率</span><strong>3.1</strong></div>
      <div><span>楼栋</span><strong>12栋高层</strong></div><div><span>重点户型</span><strong>约128㎡</strong></div>
    </div>
    <div class="boundary-note"><strong>资料边界</strong><p>上述数字来自设计机构项目说明。页面不把展示区照片、过程效果或设计方自述自动等同于最终交付；施工图、审图意见、结构体系、消防论证及物业方案尚未取得。</p></div>
  </section>

  <section id="plan" class="study-section">
    <div class="section-kicker">03 / PLAN</div><h2>平面解剖：错位发生在公共空间，卧室区尽量保持稳定</h2>
    <p class="section-intro">两张原始户型必须并读。奇数层与偶数层不是简单镜像：客厅挑空与可使用客厅互换位置，空中花园随之换边；核心筒、厨房和主要卧室区大体保持叠合，以控制结构与管线复杂度。</p>
    <div class="drawing-pair">
      ${fig(base+"odd-plan.gif","奇数层户型原图","黄色/虚线范围为上空或边界提示。来源：华蓝集团，2025。")}
      ${fig(base+"even-plan.gif","偶数层户型原图","庭院和客厅的可使用位置与奇数层错位。来源：华蓝集团，2025。")}
    </div>
    <div class="analysis-grid">
      <article><b>1</b><h3>LDK 与庭院形成横向公共带</h3><p>厨房—餐厅—客厅—空中花园相邻，日常活动能外溢，而非从卧室或狭窄走廊进入“观赏阳台”。</p></article>
      <article><b>2</b><h3>交通核紧凑，但入户缓冲有限</h3><p>双梯及设备空间集中在一侧，减少对南向面的占用；从前室进入公共区的礼序与收纳仍需施工图验证。</p></article>
      <article><b>3</b><h3>花园约10m宽、3.6m深</h3><p>尺度足以支持桌椅与种植并置；3.6m进深也意味着遮光、风雨飘入和外围护维护不能忽略。</p></article>
      <article><b>4</b><h3>“约40㎡”不是纯可活动面积</h3><p>花池、结构边界、设备和安全退距会占用面积。宣传面积必须与净铺装活动面分开统计。</p></article>
    </div>
    ${fig(base+"garden-scale.gif","庭院尺度与展示状态","左为设计方尺度图，右为展示空间。展示照片只说明空间意图，不代表住宅交付实景。")}
  </section>

  <section id="section" class="study-section">
    <div class="section-kicker">04 / SECTION</div><h2>剖面机制：同步挑空解决一类私密问题，也制造新的性能问题</h2>
    ${fig(base+"stacking-diagram.gif","奇偶层叠合生成逻辑","先错位客餐厅挑空，再叠加形成标准层。来源：华蓝集团。")}
    <div class="drawing-pair">
      ${fig(base+"privacy-section.gif","私密性对比剖面","设计方将本案与早期产品对比，主张避免他户房间直接俯视庭院。")}
      ${fig(base+"daylight-section.gif","日照及层高示意","6.2m高度相对3.6m庭院进深有利于开敞，但不是日照时数计算书。")}
    </div>
    <div class="critical-note"><strong>基于原图的限定性解读（非设计方原话）</strong><p>剖面表达了减少“上一户卧室直接俯视下一户庭院”的设计意图；是否在全部楼栋、全部户型成立，仍需完整标准层和视线分析图。图中的太阳射线属于示意，不能替代日照计算书、风环境与能耗模拟。</p></div>
  </section>

  <section id="audit" class="study-section">
    <div class="section-kicker">05 / EVIDENCE AUDIT</div><h2>证据审计：原图支持到哪里，问题就写到哪里</h2>
    <div class="audit-table-wrap"><table class="audit-table">
      <thead><tr><th>维度</th><th>原文或原图明确内容</th><th>公开资料未回答的问题</th><th>证据状态</th></tr></thead>
      <tbody>
        <tr><th>空间关系</th><td>设计方定义LDKBG连续，并提供奇偶层平面</td><td>净使用面积、家具布置及空调分区未提供</td><td><span class="status positive">有原图</span></td></tr>
        <tr><th>私密性</th><td>设计方提供上下户视线对比剖面</td><td>侧向邻户、对楼视线及全部户型验证未提供</td><td><span class="status cautious">局部证据</span></td></tr>
        <tr><th>采光通风</th><td>原图标注6.2m高度及约3.6m庭院进深</td><td>日照计算、天空可视因子和风环境报告未提供</td><td><span class="status cautious">尺寸可核</span></td></tr>
        <tr><th>结构消防</th><td>平面尽量保持核心筒和私区叠合</td><td>大出挑、挑空防火分隔、救援条件和坠物风险未公开</td><td><span class="status pending">待专项</span></td></tr>
        <tr><th>排水绿化</th><td>设计表达包含花池与活动面</td><td>覆土厚度、荷载、防水、主排/溢流、灌溉及检修路径缺失</td><td><span class="status pending">资料不足</span></td></tr>
        <tr><th>运营维护</th><td>无可核验的交付后资料</td><td>统一养护边界、费用、植物替换和违规封闭均未知</td><td><span class="status pending">不能评价</span></td></tr>
      </tbody>
    </table></div>
  </section>

  <section id="zmd" class="study-section">
    <div class="section-kicker">06 / ZHUMADIAN</div><h2>对驻马店的启示：可借空间机制，不能照搬气候答案</h2>
    <div class="transfer-grid">
      <article><span>可以借鉴</span><h3>奇偶层的完整空间叠合</h3><p>把庭院、客餐厅、上下层视线和结构叠合一起设计，避免“先赠送阳台、再补技术”的倒置流程。</p></article>
      <article><span>必须重算</span><h3>冬季、风环境与使用频率</h3><p>南宁属夏热冬暖，驻马店为夏热冬冷。庭院朝向、冬季风、冻融排水、植物越冬及空调能耗必须重新模拟。</p></article>
      <article><span>审批前置</span><h3>计容、消防与长期管控</h3><p>在规划条件中同步明确空中花园面积、开敞边界、产权、封闭禁限、绿化责任和验收规则。</p></article>
    </div>
  </section>

  <section id="sources" class="study-section source-section">
    <div class="section-kicker">07 / EVIDENCE</div><h2>来源与证据等级</h2>
    <div class="source-row"><b>A</b><div><a href="https://www.archina.com/index.php?a=show&g=works&id=158204&m=index" target="_blank" rel="noopener">《南宁“华宏云墅”项目｜华蓝集团》</a><p>设计机构项目发布，ARCHINA收录；用于项目参数、奇偶层图、叠合及剖面设计意图。公开时间：2025。</p></div></div>
    <div class="source-row"><b>待补</b><div><strong>规划许可、施工图审查、消防专项、交付实景与入住后评估</strong><p>这些材料未取得前，不评价工程质量、植物成活、渗漏、物业费用和长期使用效果。</p></div></div>
    <p class="copyright-note">图纸版权归原设计与发布机构所有，本页仅用于非商业性的前期研究与评论；点击图片可查看清晰版本。</p>
  </section>`;
}
