var dom_answer_one = document.getElementById('answerOne');
var dom_answer_two = document.getElementById('answerTwo');
var dom_answer_three = document.getElementById('answerThree');

var dom_next_button = document.getElementById('next_btn');
var dom_back_button = document.getElementById('back_btn');
var dom_submit_button = document.getElementById('submit_btn');

var dom_question = document.getElementById('question');

var dom_next_counter = 1;
var dom_back_counter;
var dom_total_result = 0;


// This Function is triggerd when the user clicks on next button
var fn_next = function()
{	
	dom_back_button.style.display='';

	// Checks the counter of the next button to move between the questions
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
			dom_question.innerHTML="7. Do you have self-confidence?";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 7:
			dom_question.innerHTML="8. How often do you eat healthy and exercixe?";
			dom_answer_one.nextSibling.innerHTML="More than 4 times a week";
			dom_answer_two.nextSibling.innerHTML="1-3 times a week";
			dom_answer_three.style.display='';
			dom_answer_three.nextSibling.innerHTML="None";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 8:
			dom_question.innerHTML="9. How much things you do to be in a good mood?";
			dom_answer_one.nextSibling.innerHTML="A lot of things";
			dom_answer_two.nextSibling.innerHTML="Not that much";
			dom_answer_three.nextSibling.innerHTML="Rarely";
			fn_answer_checked();
			dom_next_counter+=1;
			break;
		case 9:
			dom_question.innerHTML="10. How much often do you watch TV?";
			dom_answer_one.nextSibling.innerHTML="Rarely";
			dom_answer_two.nextSibling.innerHTML="30 mins or less per day";
			dom_answer_three.nextSibling.innerHTML="More than 1 Hour per day";
			fn_answer_checked();
			dom_back_button.style.display="none";
			dom_next_button.style.display="none";
			dom_submit_button.style.display="";
			break;
	}
};

// When the user clicks on Next the next function is called
dom_next_button.onclick = fn_next;


// This Function is triggerd when the user clicks on back button
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
			dom_question.innerHTML="7. Do you have self-confidence?";
			dom_next_counter = dom_back_counter;
			break;
		case 8:
			dom_question.innerHTML="8. How often do you eat healthy and exercixe?";
			dom_next_counter = dom_back_counter;
			break;
		case 9:
			dom_question.innerHTML="9. How much things you do to be in a good mood?";
			dom_next_counter = dom_back_counter;
			break;
		case 10:
			dom_question.innerHTML="10. How much often do you watch TV?";
			dom_next_counter = dom_back_counter;
			break;

		}	
};

dom_back_button.onclick = fn_back;

// This Function checks which answer the user choosed and counts the result
var fn_answer_checked = function()
{

	if(dom_answer_one.checked)
	{
		dom_total_result = parseInt(dom_total_result)+2;
		dom_answer_one.checked="";

	}else if(dom_answer_two.checked)
	{
 		dom_total_result = parseInt(dom_total_result)+1;
 		dom_answer_two.checked="";
 		
	}else if(dom_answer_three.checked)
	{
		dom_total_result = parseInt(dom_total_result)+0;
		dom_answer_three.checked="";
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