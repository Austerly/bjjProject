$(document).ready(function(){
	//When an icon is clicked, create slide out menu
	$('.initGrid').click(function(){
		$(this).children().slideToggle('slow');
	});
	$('.videos').mouseenter(function(){
		$(this).css("opacity", "1");
	})
});