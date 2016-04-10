function drawView(arr){
	var view=document.getElementById("view"),
	result="";
	for(var i=0;i<arr.length;i++){
		result+="<div class='number'>"+arr[i]+"</div>";
	}
	view.innerHTML=result;
}
module.exports=drawView;
