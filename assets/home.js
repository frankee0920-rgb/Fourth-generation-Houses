
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('stats').innerHTML=D.stats.map(s=>`<article class="stat"><strong>${s.value}</strong><span>${s.label}</span></article>`).join('');
  document.getElementById('featured-cases').innerHTML=D.featured.map(id=>caseCard(getCase(id))).join('');
});
