
var dom_table = document.getElementById('cal');
var dom_table_tbody= dom_table.children;
var dom_table_tbody_tr = dom_table_tbody[0].children;
var dom_table_tbody_tr_td = [];
var dom_cal_btn = [];

for(var i=0; i < dom_table_tbody_tr.length ; i++)
{
	for(var j=0; j < dom_table_tbody_tr[i].children.length ; j++)
	{
			dom_table_tbody_tr_td.push(dom_table_tbody_tr[i].children);
	}
}

console.log(dom_table_tbody_tr_td.length);

for (var i=0; i < dom_table_tbody_tr_td.length ; i++)
{
	for(var j=0; j < dom_table_tbody_tr_td[i].children.length ; j++)
	{
		dom_cal_btn.push(dom_table_tbody_tr_td[i].children);
	}
}
console.log(dom_cal_btn.length);
