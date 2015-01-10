var dom_on_button = document.getElementById('on_btn');
var dom_off_button = document.getElementById('off_btn');


var on_fn = function()
{
	dom_off_button.style.display="";
	dom_on_button.style.display="none";
	document.body.style.background="White";

};

dom_on_button.onclick = on_fn;


var off_fn = function()
{
	dom_on_button.style.display="";
	dom_off_button.style.display="none";
	document.body.style.background="Black";

};

dom_off_button.onclick = off_fn;