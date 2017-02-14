$(document).ready(function(){
	$("#habits").click(function(event){
		event.preventDefault();
		$("#articles").load("habit.html");
		// alert("Loaded!");
	});
	// console.log("ready");

	$("#propagate").click(function(event){
		event.preventDefault();
		$("#articles").load("growth.html");
	});
});

// $(function () {

// 　　$("habits").click(function(event){
// 		event.preventDefault();
// 		// $("articles").load("habit.html");
// 		alert("Loaded!");
// 　　});
	
// });

// JQuery(document).ready(function($){
// 	JQuery("habits").click(function(event){
// 		event.preventDefault();
// 		JQuery("articles").load("habit.html");
// 		alert("Loaded!");
// 	});
// });

// (function($) { 
	
// 	$("habits").click(function(event){

// 		event.preventDefault();
// 		// $("articles").load("habit.html");
// 		alert("Loaded!");

// 　　});
// 	alert("1");
// 	console.log("test!!!!!!!!!")
// })(jQuery); 

