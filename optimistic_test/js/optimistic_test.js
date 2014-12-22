var dom_answer_one = document.getElementById('answerOne');
var dom_answer_two = document.getElementById('answerTwo');
var dom_next_button = document.getElementById('next_btn');
var dom_back_button = document.getElementById('back_btn');
var dom_question = document.getElementById('question');
var dom_next_counter = 1;
var dom_back_counter;

var fn_result = function()
{};

var fn_next = function()
{	
	switch (dom_next_counter){
		case 1:
			dom_question.innerHTML="2. What do you think of your future life?";
			dom_answer_one.innerText="Positive";
			dom_answer_two.innerText="Negative";
			alert(dom_answer_one.value);
			dom_next_counter+=1;
			break;
		case 2:
			dom_question.innerHTML="3. Are you good ?";
			dom_next_counter+=1;
			break;
		case 3:
			dom_question.innerHTML="4. Are you positive ?";
			dom_next_counter+=1;
			break;
		case 4:
			dom_question.innerHTML="5. Are you glad ?";
			dom_next_counter+=1;
			break;
	}
};

dom_next_button.onclick = fn_next;

var fn_back = function()
{
	dom_back_counter = (dom_next_counter) -1;
//alert(dom_back_counter);
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
			dom_question.innerHTML="3. Are you good ?";
			dom_next_counter = dom_back_counter;
			break;
		case 4:
			dom_question.innerHTML="4. Are you positive ?";
			dom_next_counter = dom_back_counter;
			break;
		case 5:
			dom_question.innerHTML="5. Are you glad ?";
			dom_next_counter = dom_back_counter;
			break;
		}
	
};
dom_back_button.onclick = fn_back;