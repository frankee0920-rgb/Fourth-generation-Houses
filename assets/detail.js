
document.addEventListener('DOMContentLoaded',()=>{
  const id=new URLSearchParams(location.search).get('id')||D.cases[0].id;
  const c=getCase(id);
  if(!c){document.getElementById('detail').innerHTML='<div class="empty">未找到案例。</div>';return;}
  document.title=`${c.name}｜${D.meta.title}`;
  document.getElementById('detail').innerHTML=`
    <div class="breadcrumb"><a href="cases.html">案例库</a><span>/</span><span>${c.name}</span></div>
    <section class="detail-hero">
      <div class="detail-copy">
        <span class="eyebrow">${c.region} · ${c.status} · 证据等级 ${c.confidence}</span>
        <h1>${c.name}</h1>
        <p>${c.summary}</p>
      </div>
    </section>
    <div class="detail-grid">
      <article class="info-card">
        <h3>项目概览</h3>
        <div class="kv-grid">
          <div class="kv"><span>城市</span><strong>${c.city}</strong></div>
          <div class="kv"><span>开发主体</span><strong>${c.developer}</strong></div>
          <div class="kv"><span>交付状态</span><strong>${c.delivery}</strong></div>
          <div class="kv"><span>面积段</span><strong>${c.area}</strong></div>
          <div class="kv"><span>产品类型</span><strong>${c.type}</strong></div>
          <div class="kv"><span>庭院形式</span><strong>${c.garden}</strong></div>
          <div class="kv"><span>气候条件</span><strong>${c.climate}</strong></div>
          <div class="kv"><span>证据等级</span><strong>${c.confidence}</strong></div>
        </div>
      </article>
      <article class="info-card">
        <h3>为什么值得研究</h3>
        <p>${c.why}</p>
        <div class="tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </article>
      <article class="info-card">
        <h3>空间观察</h3>
        <ul class="list-clean">${c.spatial.map(x=>`<li>${x}</li>`).join('')}</ul>
      </article>
      <article class="info-card">
        <h3>技术与运营</h3>
        <ul class="list-clean">${[...c.technical,...c.operation].map(x=>`<li>${x}</li>`).join('')}</ul>
      </article>
      <article class="info-card research-only" style="grid-column:1/-1">
        <h3>资料状态</h3>
        <p>${c.sourceNote}</p>
      </article>
    </div>`;
});
