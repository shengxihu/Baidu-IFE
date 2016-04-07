var arr=new Array;
function addNumberLeft(){
	var input=document.getElementById("input").value;
	if (input) {
		arr.unshift(input);
	}else{
		alert("输入为空,请输入字符");
	}
	drawView();
}
function addNumberRight(){
	var input=document.getElementById("input").value;
	if (input) {
		arr.push(input);
	}else{
		alert("输入为空,请输入字符");
	}
	drawView();
}
function deleteNumberLeft(){
	var input=document.getElementById("input").value;
	if (input) {
		arr.shift(input);
	}else{
		alert("输入为空,请输入字符");
	}
	drawView();
}
function deleteNumberRight(){
	var input=document.getElementById("input").value;
	if (input) {
		arr.pop(input);
	}else{
		alert("输入为空,请输入字符");
	}
	drawView();
}
function drawView(){
	var view=document.getElementById("view"),
	result="";
	for(var i=0;i<arr.length;i++){
		result+="<div class='number'>"+arr[i]+"</div>";
	}
	view.innerHTML=result;
}
function init(){
	//给按钮添加事件
	var add_left=document.getElementById("add-left"),
	add_right=document.getElementById("add-right"),
	delete_left=document.getElementById("delete-left"),
	delete_right=document.getElementById("delete-right");
	add_left.onclick=addNumberLeft;
	add_right.onclick=addNumberRight;
	delete_left.onclick=deleteNumberLeft;
	delete_right.onclick=deleteNumberRight;
}
init();