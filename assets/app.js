
const D = window.SITE_DATA;

function pageName(){
  const f = location.pathname.split('/').pop() || 'index.html';
  return f || 'index.html';
}
function nav(){
  const items = [
    ['index.html','首页'],
    ['cases.html','案例库'],
    ['policy.html','政策解读'],
    ['compare.html','案例对比'],
    ['issues.html','问题与风险'],
    ['zhumadian.html','驻马店'],
    ['about.html','研究方法']
  ];
  const current = pageName();
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html">
          <span class="brand-mark">四代</span>
          <span class="brand-copy"><strong>${D.meta.title}</strong><span>${D.meta.version}</span></span>
        </a>
        <nav class="main-nav">
          ${items.map(([href,label])=>`<a class="${current===href?'active':''}" href="${href}">${label}</a>`).join('')}
        </nav>
        <div class="header-actions">
          <button class="mode-btn active" data-mode="research">研究</button>
          <button class="mode-btn" data-mode="presentation">汇报</button>
          <button class="mobile-nav-btn" type="button" aria-expanded="false" aria-controls="mobile-nav">菜单</button>
        </div>
        <nav class="mobile-nav" id="mobile-nav" aria-label="移动端导航">
          ${items.map(([href,label])=>`<a class="${current===href?'active':''}" href="${href}">${label}</a>`).join('')}
          <div class="mobile-mode-actions" aria-label="阅读模式">
            <button class="mode-btn active" data-mode="research">研究模式</button>
            <button class="mode-btn" data-mode="presentation">汇报模式</button>
          </div>
        </nav>
      </div>
    </header>`;
}
function footer(){
  return `<footer class="footer"><div class="footer-inner">
    <span>${D.meta.title} · ${D.meta.updated}</span>
    <span>HTML / JSON → InDesign UXP 原生版面</span>
  </div></footer>`;
}
function boot(){
  const shell=document.querySelector('.shell');
  shell.insertAdjacentHTML('afterbegin',nav());
  shell.insertAdjacentHTML('beforeend',footer());
  const mode=localStorage.getItem('siteMode')||'research';
  setMode(mode);
  document.querySelectorAll('.mode-btn').forEach(btn=>btn.onclick=()=>setMode(btn.dataset.mode));
  const menuButton=document.querySelector('.mobile-nav-btn');
  const mobileNav=document.querySelector('.mobile-nav');
  menuButton?.addEventListener('click',()=>{
    const open=mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.textContent=open?'关闭':'菜单';
  });
}
function setMode(mode){
  document.body.classList.toggle('presentation',mode==='presentation');
  document.querySelectorAll('.mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
  localStorage.setItem('siteMode',mode);
}
function caseCard(c){
  return `<article class="case-card">
    <div class="case-visual"><span class="case-badge">${c.region} · ${c.status}</span></div>
    <div class="case-card-body">
      <div class="case-meta">${c.city} · ${c.developer}</div>
      <h3>${c.name}</h3>
      <p class="case-summary">${c.summary}</p>
      <div class="tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <a class="card-link" href="case.html?id=${c.id}"><span>进入案例</span><span>↗</span></a>
    </div>
  </article>`;
}
function getCase(id){return D.cases.find(c=>c.id===id)}
document.addEventListener('DOMContentLoaded',boot);
