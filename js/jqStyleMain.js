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
	// $("#header").hide();
	$(".centerButtons").hide().delay(300).fadeTo(7000, 1);
	$(".footerMain").hide().delay(1000).fadeTo(1000, 1);
	$(".mainTitle").hide().delay(7000).fadeTo(2000, 1);
	$("#main > h2").hide().delay(10000).fadeTo(2000, 1);
	$(".enter").css("opacity", "0");

	$(".enter").delay(3000).fadeTo(4000, 1).delay(800).fadeTo(4000, 0);

	$("mainTitle").fadeTo(2000, 1);
});