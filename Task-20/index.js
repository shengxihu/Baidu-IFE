function drawView(arr){
	var view=document.getElementById("view"),
	result="";
	for(var i=0;i<arr.length;i++){
		result+="<div class='number'>"+arr[i]+"</div>";
	}
	view.innerHTML=result;
}
function search(arr){
	var input_search=document.getElementById("input-search").value,
	result,
	rex=new RegExp(input_search,"g");
	for(var i=0;i<arr.length;i++){
		result=arr[i].replace(rex,"<b style='color:#FFFEFF;'>"+input_search+"</b>");
		arr[i]=result;
	}
}
function getData(){
	var input_data=document.getElementById("input-data").value,
	value=input_data.split(/\W+/),
	data=new Array;
	if (!input_data) {
		alert("请输入字符串！");
	}
	for(var i=0;i<value.length;i++){
		if (value[i]) {
			data.push(value[i]);
		}
	}
	return data;
}
function opArr(flag,arr,data){
	var value;
	switch(flag){
		case 0:
			for(var i=data.length-1;i>=0;i--){
				value=data[i];
				arr.unshift(value);
			}
			break;
		case 1:
			for(var i=0;i<data.length;i++){
				value=data[i];
				arr.push(value);
			}
			break;
		case 2:
			arr.shift(arr[0]);
			break;
		case 3:
			arr.pop(arr[arr.length-1]);
			break;
		case 4:
			search(arr)
			break;
	}
}
function init(){
	var button=document.getElementsByTagName("button"),
	arr=new Array;
	for(var flag=0;flag<button.length;flag++){
		(function(flag){
			button[flag].onclick=function(){
				var data=getData();
				opArr(flag,arr,data);
				drawView(arr);
			}
		})(flag)
	}
}
init();