// function $(id){
// 	return typeof id=="string"?document.getElementById(id):id;
// }

$(document).ready(function(){
	$("#ukduanmao").click(function(event){
		event.preventDefault();
		$("#introduction").load("ukduanmao.html");
	});
});

$(document).ready(function(){
	$("#xianluo").click(function(event){
		event.preventDefault();
		$("#introduction").load("xianluo.html");
	});
});