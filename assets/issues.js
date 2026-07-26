
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('issue-grid').innerHTML=D.issues.map(x=>`<article class="issue-card">
    <div class="issue-head"><strong>${x.category}</strong><span class="issue-level">${x.level}风险</span></div>
    <h3>${x.title}</h3><p>${x.text}</p>
    <div class="question-box">${x.question}</div>
  </article>`).join('');
});
