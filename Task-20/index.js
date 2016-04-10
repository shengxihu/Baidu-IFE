function drawView(arr){
	var view=document.getElementById("view"),
	result="";
	for(var i=0;i<arr.length;i++){
		result+="<div class='number'>"+arr[i]+"</div>";
	}
	view.innerHTML=result;
}
function search(arr_1){
	var input_search=document.getElementById("input-search").value,
	result,
	rex=new RegExp(input_search,"g");
	for(var i=0;i<arr_1.length;i++){
		result=arr_1[i].replace(rex,"<b style='color:#FFFEFF;'>"+input_search+"</b>");
		arr_1[i]=result;
	}
	return arr_1;
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
function opArr(flag,arr,arr_1,data){
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
			arr_1=arr;
			arr_1=search(arr_1);
			break;
	}
	return arr_1;
}
function init(){
	var button=document.getElementsByTagName("button"),
	arr=new Array,
	arr_1=new Array;
	for(var flag=0;flag<button.length;flag++){
		(function(flag){
			button[flag].onclick=function(){
				var data=getData();
				arr_1=opArr(flag,arr,arr_1,data);
				if (flag==4) {
					drawView(arr_1);
				}else{
					drawView(arr);
				}
			}
		})(flag)
	}
}
init();