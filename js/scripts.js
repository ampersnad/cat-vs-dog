$(document).ready(function() {
	$(".catface").click(function() {
		$("ul#cat-says").append("<li>meow</li>");
		$("ul#dog-says").append("<li>woof</li>");
		
	});
	$(".dogface").click(function() {
		$("ul#dog-says").append("<li>woof</li>");
		$("ul#cat-says").append("<li>meow</li>");
		
	});
	
});