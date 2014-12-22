var dom_answer_one = document.getElementById('answerOne');
var dom_answer_two = document.getElementById('answerTwo');
var dom_answer_three = document.getElementById('answerThree');
var dom_next_button = document.getElementById('next_btn');
var dom_back_button = document.getElementById('back_btn');
var dom_question = document.getElementById('question');
var dom_next_counter = 1;
var dom_back_counter;

var fn_result = function()
{};

var fn_next = function()
{	
	dom_back_button.style.display='';

	switch (dom_next_counter){
		case 1:
			dom_question.innerHTML="2. What do you think of your future life?";
			dom_answer_one.nextSibling.innerHTML="Positive";
			dom_answer_two.nextSibling.innerHTML="Negative";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 2:
			dom_question.innerHTML="3. Do you see the postive side of a bad situtation?";
			dom_answer_one.nextSibling.innerHTML="Yes";
			dom_answer_two.nextSibling.innerHTML="No";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 3:
			dom_question.innerHTML="4. Do you believe that we can reprogram our mind to think in an optimistic way?";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 4:
			dom_question.innerHTML="5. Do you respect your self and others?";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 5:
			dom_question.innerHTML="6. Do you treat others as you want to be treated?";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 6:
			dom_question.innerHTML="7. How often do you eat healthy and exercixe?";
			dom_answer_one.nextSibling.innerHTML="More than 4 times a week";
			dom_answer_two.nextSibling.innerHTML="1-3 times a week";
			dom_answer_three.style.display='';
			dom_answer_three.nextSibling.innerHTML="None";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 7:
			dom_question.innerHTML="8. How much things you do to be in a good mood?";
			dom_answer_one.nextSibling.innerHTML="A lot of things";
			dom_answer_two.nextSibling.innerHTML="Not that much";
			dom_answer_three.nextSibling.innerHTML="Rarely";
			fn_answer_checked();
			dom_next_counter+=1;
			break;



	}
};

dom_next_button.onclick = fn_next;


var fn_back = function()
{
	dom_back_counter = (dom_next_counter) -1;

	switch (dom_back_counter){
		case 1:
			dom_question.innerHTML="1. Are you thankful for what you have?";
			dom_next_counter = dom_back_counter;
			break;
		case 2:
			dom_question.innerHTML="2. What do you think of your future life?";
			dom_next_counter = dom_back_counter;
			break;
		case 3:
			dom_question.innerHTML="3. Do you see the postive side of a bad situtation?";
			dom_next_counter = dom_back_counter;
			break;
		case 4:
			dom_question.innerHTML="4. Do you believe that we can reprogram our mind to think in an optimistic way?";
			dom_next_counter = dom_back_counter;
			break;
		case 5:
			dom_question.innerHTML="5. Do you respect your self and others?";
			dom_next_counter = dom_back_counter;
			break;
		case 6:
			dom_question.innerHTML="6. Do you treat others as you want to be treated?";
			dom_next_counter = dom_back_counter;
			break;
		case 7:
			dom_question.innerHTML="7. How often do you eat healthy and exercixe?";
			dom_next_counter = dom_back_counter;
			break;
		case 8:
			dom_question.innerHTML="8. How much things you do to be in a good mood?";
			dom_next_counter = dom_back_counter;
			break;

		}	
};

dom_back_button.onclick = fn_back;

var fn_answer_checked = function()
{
	if(dom_answer_one.checked)
	{
		dom_answer_one.value+=1;
	}else if(dom_answer_two.checked)
	{
 		dom_answer_two.value+=1;
	}else if(dom_answer_three.checked)
	{
		dom_answer_three.value+=1;
	}

};