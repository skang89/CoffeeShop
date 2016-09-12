$(document).ready(function() {
 $("#toggle").click(function() {
 	$(this).toggleClass("open");
 	$("#overlay").toggleClass("active");
 });
});