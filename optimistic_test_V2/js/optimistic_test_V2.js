var dom_next_button = document.getElementById('next_btn');
var dom_submit_button = document.getElementById('submit_btn');

var dom_answer_one = document.getElementById('answerOne');
var dom_answer_two = document.getElementById('answerTwo');
var dom_answer_three = document.getElementById('answerThree');
var dom_answer_four = document.getElementById('answerFour');

var questions = [document.getElementById('question_1'), document.getElementById('question_2'), 
				document.getElementById('question_3'), document.getElementById('question_4'),
				document.getElementById('question_5'), document.getElementById('question_6'),
				document.getElementById('question_7'), document.getElementById('question_8'),
				document.getElementById('question_9'), document.getElementById('question_10')];


var i=1;
var dom_total_result = 0;


var fn_next = function()
{
	// If this is the last Question, then display the button and remove the next button
	if(i===9)
	{
		dom_next_button.style.display="none";
		dom_submit_button.style.display="";

	}

	// An array to move between diffrent questions
	while(i<=10)
	{
		questions[i-1].style.display="none";
		questions[i].style.display="";
		fn_answer_checked();
		i++;

		// After displaying the question , break from the code to not keep moving in the loop and display all Qs at once
		break;

	}
};

dom_next_button.onclick = fn_next;

// This Function checks which answer the user choosed and counts the result
var fn_answer_checked = function()
{

	if(dom_answer_one.checked)
	{
		dom_total_result = parseInt(dom_total_result)+3;
		//alert(dom_total_result);
		dom_answer_one.checked="";

	}else if(dom_answer_two.checked)
	{
 		dom_total_result = parseInt(dom_total_result)+2;
 		dom_answer_two.checked="";
 		
	}else if(dom_answer_three.checked)
	{
		dom_total_result = parseInt(dom_total_result)+1;
		dom_answer_three.checked="";
	}else if(dom_answer_four.checked)
	{
		dom_total_result = parseInt(dom_total_result)+0;
		dom_answer_four.checked="";
	}

};


// This Function displays for the user the final result
var fn_result = function()
{
	if(dom_total_result >=12)
	{
		alert("Congratulations! You are an optimistic person full of life. Keep it on and inspire others please!");
	}else
	{
		alert("Unfortunately you need to work more on your thought of life. Good luck you can do it!");
	}
};

dom_submit_button.onclick = fn_result;