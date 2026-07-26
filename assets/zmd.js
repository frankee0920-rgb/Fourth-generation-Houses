
document.addEventListener('DOMContentLoaded',()=>{
 const c=getCase('yunqi-jiangshan');
 document.getElementById('zmd-case').innerHTML=caseCard(c);
 document.getElementById('henan-cases').innerHTML=[
   getCase('jianzhong-jiuyue-yunzhu'),
   getCase('shangqiu-weilai-tianjing')
 ].map(caseCard).join('');
});
