$(document).ready(function() {
	$(".catface").click(function() {
		$("ul#cat-says").prepend("<li>meow</li>");
		$("ul#dog-says").prepend("<li>woof</li>");
		
	});
	$(".dogface").click(function() {
		$("ul#dog-says").prepend("<li>woof</li>");
		$("ul#cat-says").prepend("<li>meow</li>");
		
	});
	$("p.clickable").click(function() {
		$(".frogface").show();
		$(".frogface").after("<p>hi.</p>");
		
	});
	$(".frogface").click(function() {
		$(this).toggle();
	});
	
});