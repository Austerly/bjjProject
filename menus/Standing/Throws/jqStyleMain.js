$(document). ready(function(){
	//When an icon is clicked, create slide out menu
	$('.initGrid').click(function(){
		$(this).children().slideToggle('slow');
	});
	// $('.initGrid').click(function(){
	// 	$(this).children().slideUp('slow');
	// });
});