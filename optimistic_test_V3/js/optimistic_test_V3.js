var dom_next_button = document.getElementById('next_btn');
var dom_result_button = document.getElementById('submit_btn');

var dom_answer_one = document.getElementById('answerOne');
var dom_answer_two = document.getElementById('answerTwo');
var dom_answer_three = document.getElementById('answerThree');
var dom_answer_four = document.getElementById('answerFour');

var i = 1;
var total = 0;

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

	if(i===9)
	{
		dom_next_button.style.display="none";
		dom_result_button.style.display="";
	}

	while( i<=9)
	{
		dom_all_divs[i].classList.add("active");
		fn_answer_checked();
		i++;
		break;
	}

};

dom_next_button.onclick = fn_add;


var fn_answer_checked = function()
{
	if(dom_answer_one.checked)
	{
		total = parseInt(total)+3;
		dom_answer_one.checked="";

	}else if(dom_answer_two.checked)
	{
		total = parseInt(total)+2;
		dom_answer_two.checked="";

	}else if(dom_answer_three.checked)
	{
		total = parseInt(total)+1;
		dom_answer_three.checked="";

	}else
	{
		total = parseInt(total)+0;
		dom_answer_four.checked="";

	}

	console.log(total);
	
};

var fn_final_result = function()
{
	//alert (total);
	if(total >= 12)
	{
		alert("Congratz! You are a very optimistic person. Keep it up and inspire others!");
	}
	else
	{
		alert("You are a very realstic person.You need to keep working on your self and your soul. Good luck");
	}

};

dom_result_button.onclick = fn_final_result;