$(document).ready(function(){
	//When an icon is clicked, create slide out menu
	$('.initGrid').click(function(){
		$(this).children().slideToggle('slow');
	});
	//When a video is clicked, make it visible
	$('.videos').mouseenter(function(){
		$(this).children('iframe').css("opacity", "1");
	});
	//When you are done with the video, make it fade again;

	$('body').mouseleave(function(){
		$('iframe').css("opacity", "0.4");
	});
});