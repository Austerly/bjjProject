$(document).ready(function(){
	//When an icon is clicked, create slide out menu
	$('.initGrid').click(function(){
		//if slider is visible, do this

		// if the slider is visible when clicked, fade in items and close slider
		if ($(this).find("> .slider").is(":visible")) {

		$(this).children().slideToggle('fast', 
			function() {
			$('.initGrid > img').css('opacity', '.8');
			$('.techHeader').css('opacity', '.8');
		 	
		 });
		}
		// else if the slider isn't visible toggle them and fade the other menu icons
		else { 
		$(this).children().slideToggle('fast', function(){
			$('.initGrid > img').css('opacity', '.2');
			$('.techHeader').css('opacity', '.2');
		});

		}
	});
});