function getObj(id){
	return typeof id=="string"?document.getElementById(id):id;

}
window.onload = function(){

	// console.log("zheshi onload");
	var tag = getObj("tagnav").getElementsByTagName("li");
	var articlecontent = getObj("articlecontent").getElementsByTagName("article");
	if(tag.length!=articlecontent.length){
		return;
	}
	for(var i=0;i<tag.length;i++){
		tag[i].id=i;
		tag[i].onclick = function(){
		


			for(var j=0;j<tag.length;j++){
				tag[j].className="";
				articlecontent[j].style.display="none";
			}
			this.className="tagselected";
			articlecontent[this.id].style.display="block";
		}
	}
	
}