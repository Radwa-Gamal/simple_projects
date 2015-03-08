
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $close = $('<div id="icon"><a href="#"><i class="fa fa-times"></i></a></div>');


$overlay.append($close);
$overlay.append($('.profile'));
$overlay.append($image);
$("body").append($overlay);



$("#gallery a").click(function(event){
	event.preventDefault();

	var imageLocation = $(this).attr("href");
	$image.attr("src",imageLocation);
	$overlay.show();
	//$this.show();
	
	//$(".profile").hide().next().show();
	//$(".profile").show();
	$(".profile").toggle();


});



$close.click(function(){
	$overlay.hide();
	$('.profile').hide();
});
$overlay.click(function(){
	$overlay.hide();
	$('.profile').hide();
});