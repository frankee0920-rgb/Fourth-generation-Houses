
document.addEventListener('DOMContentLoaded',()=>{
  const grid=document.getElementById('case-grid');
  const search=document.getElementById('search');
  let filter='全部';
  function draw(){
    const q=search.value.trim().toLowerCase();
    const items=D.cases.filter(c=>(filter==='全部'||c.region.includes(filter)||c.status===filter) && (!q||JSON.stringify(c).toLowerCase().includes(q)));
    grid.innerHTML=items.length?items.map(caseCard).join(''):`<div class="empty">没有找到匹配案例。</div>`;
  }
  document.querySelectorAll('.chip').forEach(ch=>ch.onclick=()=>{
    document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
    ch.classList.add('active');filter=ch.dataset.filter;draw();
  });
  search.oninput=draw;draw();
});
