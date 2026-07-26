
document.addEventListener('DOMContentLoaded',()=>{
  const grid=document.getElementById('case-grid');
  const search=document.getElementById('search');
  let filter='全部';
  const coreIds=[
    'huahong-yunshu','jianzhong-jiuyue-yunzhu','shangqiu-weilai-tianjing','longji-future-forest',
    'nanyang-garden-residence','zhengzhou-duplex-sky-villa','boqun-yuexiwan','yudu-longshui-yunjing'
  ];
  function draw(){
    const q=search.value.trim().toLowerCase();
    const match=c=>(filter==='全部'||c.region.includes(filter)||c.status===filter) && (!q||JSON.stringify(c).toLowerCase().includes(q));
    const items=D.cases.filter(c=>coreIds.includes(c.id)&&match(c));
    const candidates=D.cases.filter(c=>!coreIds.includes(c.id)&&match(c));
    grid.innerHTML=items.length?items.map(caseCard).join(''):`<div class="empty">没有找到匹配案例。</div>`;
    document.getElementById('candidate-list').innerHTML=candidates.length?candidates.map(c=>`<article class="candidate-row"><div><span>${c.city} · ${c.status}</span><h3>${c.name}</h3></div><p>${c.sourceNote}</p><b>候选 / 不作案例结论</b></article>`).join(''):`<div class="empty">没有候选线索。</div>`;
  }
  document.querySelectorAll('.chip').forEach(ch=>ch.onclick=()=>{
    document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
    ch.classList.add('active');filter=ch.dataset.filter;draw();
  });
  search.oninput=draw;draw();
});
