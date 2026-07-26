
document.addEventListener('DOMContentLoaded',()=>{
  const stats=[{value:'4',label:'核心图文案例'},{value:'3',label:'专业设计机构'},{value:'2',label:'河南深度样本'},{value:'4',label:'证据阶段分层'}];
  document.getElementById('stats').innerHTML=stats.map(s=>`<article class="stat"><strong>${s.value}</strong><span>${s.label}</span></article>`).join('');
  document.getElementById('featured-cases').innerHTML=['huahong-yunshu','jianzhong-jiuyue-yunzhu','shangqiu-weilai-tianjing','longji-future-forest'].map(id=>caseCard(getCase(id))).join('');
});
