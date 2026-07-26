
document.addEventListener('DOMContentLoaded',()=>{
 const c=getCase('yunqi-jiangshan');
 document.getElementById('zmd-case').innerHTML=`<article class="candidate-row" style="grid-column:1/-1"><div><span>${c.city} · ${c.status}</span><h3>${c.name}</h3></div><p>${c.sourceNote} 当前只记录项目名称与宣传概念；取得规划公示、设计单位资料和建设实景前，不分析其优缺点。</p><b>本地线索 / 未入选</b></article>`;
 document.getElementById('henan-cases').innerHTML=[
   getCase('jianzhong-jiuyue-yunzhu'),
   getCase('shangqiu-weilai-tianjing')
 ].map(caseCard).join('');
});
