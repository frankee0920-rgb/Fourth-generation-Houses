
document.addEventListener('DOMContentLoaded',()=>{
  const selected=['huahong-yunshu','jianzhong-jiuyue-yunzhu','shangqiu-weilai-tianjing','longji-future-forest'].map(getCase);
  const rows=[
    ['城市',c=>c.city],['建设状态',c=>c.status],['面积段',c=>c.area],['产品类型',c=>c.type],
    ['庭院形式',c=>c.garden],['气候条件',c=>c.climate],['设计资料明确内容',c=>c.spatial.join('；')],
    ['公开资料缺口',c=>c.operation.join('；')],['证据等级',c=>c.confidence]
  ];
  document.getElementById('compare-table').innerHTML=`
    <thead><tr><th>比较维度</th>${selected.map(c=>`<th>${c.name}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(([name,fn])=>`<tr><td>${name}</td>${selected.map(c=>`<td>${fn(c)}</td>`).join('')}</tr>`).join('')}</tbody>`;
});
