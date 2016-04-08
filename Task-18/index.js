var arr=new Array;
function addLeft(){
	arr.unshift(input);
	drawView();
}
function addRight(){
	arr.push(input);
	drawView();
}
function deleteLeft(){
	arr.shift(input);
	drawView();
}
function deleteRight(){
	arr.pop(input);
	drawView();
}
function getValue(){
	var input=document.getElementById("input").value;
	if (input) {
		return input;
	}else{
		alert("请输入字符！")
	}
}
function drawView(){
	var view=document.getElementById("view"),
	result="";
	for(var i=0;i<arr.length;i++){
		result+="<div class='number'>"+arr[i]+"</div>";
	}
	view.innerHTML+=result;
}
function init(){
	//给按钮添加事件
	var add_left=document.getElementById("add-left"),
	add_right=document.getElementById("add-right"),
	delete_left=document.getElementById("delete-left"),
	delete_right=document.getElementById("delete-right");
	add_left.onclick=function(){
		if (input=getValue()) {
			addLeft(input);
		}
	}
	add_right.onclick=function(){
		if (input=getValue()) {
			addRight(input);
		}
	}
	delete_left.onclick=function(){
		if (input=getValue()) {
			deleteLeft(input);
		}
	}
	delete_right.onclick=function(){
		if (input=getValue()) {
			deleteRight(input);
		}
	}
}
init();