//declaretion *vars first
var dom_text_input = document.getElementById('text_input');
var dom_add_button = document.getElementById('add_button');
var dom_display_button = document.getElementById('display_button');
var dom_text_area = document.getElementById('text_area');
var dom_select_button = document.getElementById('select_button');
var dom_select_option = document.getElementById('input_1');

var index;
var un_ordered_list = "<ul>";
var word_list = new Array();

//function
var fn_add_word = function(){

	//check if input is empty or space
	if (dom_text_input.value === "" || dom_text_input.value === " "){

		alert("please fill in the field");

	} else {

		//Adding word to the list
		word_list.push(dom_text_input.value.replace(/[0-9]/g, ''));

		//cleaning text input
		dom_text_input.value = "";

	}
}

var fn_display_list = function() {

	//Sorting the array Alphabiticly
	word_list.sort();

	//Adding the unordered list tags
    for (index = 0; index < word_list.length ; index++) 
    {
        un_ordered_list += "<li>" + word_list[index] + "</li>";
    }

    un_ordered_list += "</ul>";

	//adding text content for Chrome (compatability issue)
	dom_text_area.textContent = un_ordered_list;

	//displaying the content in the text area
	dom_text_area.innerHTML = un_ordered_list;
}

var fn_select_button = function(){

	alert ("Thank You for Support");

}

//add button listener
dom_add_button.onclick = fn_add_word;

//display button listener
dom_display_button.onclick = fn_display_list;

//submit button
dom_select_button.onclick = fn_select_button;