var dom_btn_equal = document.getElementById('button_equal');
var dom_btn_one = document.getElementById('button_1');
var dom_btn_two = document.getElementById('button_2');
var dom_btn_add = document.getElementById('button_add');
var dom_result = document.getElementById('result');
var x;
var y;

var fn_add = function()
{
	var total = parseInt(dom_btn_one.value)+parseInt(dom_btn_two.value);
	alert(total);
	//dom_result = x.value + y.value;

};

dom_btn_equal.onclick = fn_add;

/*var fn_equal = function()
{
	if(dom_btn_add.onclick)
		{fn_add(dom_btn_one,dom_btn_two);}

};*/

//dom_btn_equal.onclick = fn_equal;