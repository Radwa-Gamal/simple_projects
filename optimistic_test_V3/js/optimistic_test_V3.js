var dom_next_button = document.getElementById('next_btn');
var i = 1;

var dom_div = document.getElementById('questions');
var dom_all_divs = dom_div.children;



var fn_remove = function()
{
	for (var i=0; i < dom_all_divs.length; i++)
	{
		if (dom_all_divs[i].classList.contains("active"))
		{
			dom_all_divs[i].classList.remove("active");
		}
	}
};



var fn_add = function()
{
	fn_remove();

	while( i<=10)
	{
		dom_all_divs[i].classList.add("active");
		i++;
		break;
	}

};

dom_next_button.onclick = fn_add;


