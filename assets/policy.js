
document.addEventListener('DOMContentLoaded',()=>{
  const list=document.getElementById('policy-list');
  list.innerHTML=D.policies.map(p=>`<article class="policy-card" data-level="${p.level}">
    <button class="policy-summary" type="button" aria-expanded="false" aria-controls="policy-${p.id}">
      <span class="meta">${p.level} · ${p.year}</span>
      <h3>${p.title}</h3><span class="toggle">＋</span>
    </button>
    <div class="policy-detail" id="policy-${p.id}">
      <p>${p.summary}</p>
      <p><strong>对本项目的影响：</strong>${p.impact}</p>
      <p class="research-only"><strong>来源类型：</strong>${p.source}</p>
    </div>
  </article>`).join('');
  document.querySelectorAll('.policy-summary').forEach(b=>b.onclick=()=>{
    const open=b.parentElement.classList.toggle('open');
    b.setAttribute('aria-expanded',String(open));
  });
  document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');
    const f=t.dataset.filter;
    document.querySelectorAll('.policy-card').forEach(c=>c.style.display=(f==='全部'||c.dataset.level.includes(f))?'block':'none');
  });
});
