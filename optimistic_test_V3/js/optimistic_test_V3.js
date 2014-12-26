var dom_next_button = document.getElementById('next_btn');


var dom_div = document.getElementById('questions');
var dom_all_divs = dom_div.children;
var dom_inputs = dom_all_divs.children;
var array_inputs = [];
var i=1;

for (var i=0; i < dom_all_divs.length; i++)
{
	//for (var j=0; j < dom_all_divs[i].children.length; j++)
	//{
		array_inputs.push(dom_all_divs[i].children);
	//}

}



var fn_next = function()
{
	//while (i<=10)
	//{
		console.log(array_inputs);
		//array_inputs[i].style.display="";
		//i++;
	//}
};

dom_next_button.onclick = fn_next;