
document.addEventListener('DOMContentLoaded',()=>{
  const deliverables={
    '空间效率':'奇偶层成套户型、净使用面积表、家具与活动场景校核',
    '采光私密':'日照计算、视线剖面、侧向及对楼视线分析',
    '防水排水':'种植构造、主排水与溢流、检修口及闭水试验要求',
    '绿化运营':'植物表、灌溉分区、养护责任书和年度维护预算',
    '气候适配':'冬夏日照、风环境、冻融排水和植物越冬专项',
    '政策管理':'规划条件、面积计算书、产权约定和封闭治理条款'
  };
  document.getElementById('issue-grid').innerHTML=D.issues.map(x=>`<article class="issue-card">
    <div class="issue-head"><strong>${x.category}</strong><span class="issue-level">${x.level}风险</span></div>
    <h3>${x.title}</h3><p>${x.text}</p>
    <div class="question-box">${x.question}</div>
    <p class="evidence-needed"><strong>应提交：</strong>${deliverables[x.category]||'专项图纸、计算书与管理文件'}</p>
  </article>`).join('');
});
