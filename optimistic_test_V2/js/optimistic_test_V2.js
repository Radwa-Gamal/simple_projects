var dom_next_button = document.getElementById('next_btn');
var dom_submit_button = document.getElementById('submit_btn');

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
		i++;

		// After displaying the question , break from the code to not keep moving in the loop and display all Qs at once
		break;

	}
};

dom_next_button.onclick = fn_next;

