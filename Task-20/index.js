function drawView(arr){
	var view=document.getElementById("view"),
	result="";
	for(var i=0;i<arr.length;i++){
		result+="<div class='number'>"+arr[i]+"</div>";
	}
	view.innerHTML=result;
}
function search(arr_2){
	var input_search=document.getElementById("input-search").value,
	result,
	temp;
	for(var i=0;i<arr_2.length;i++){
		result=arr_2[i].replace(input_search,"<b style='color:#FFFEFF;'>"+input_search+"</b>");
		temp=arr_2[i];
		arr_2[i]=result;
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
function opArr(flag,arr_1,arr_2,data){
	var value;
	switch(flag){
		case 0:
			for(var i=data.length-1;i>=0;i--){
				value=data[i];
				arr_1.unshift(value);
				arr_2.unshift(value);
			}
			break;
		case 1:
			for(var i=0;i<data.length;i++){
				value=data[i];
				arr_1.push(value);
				arr_2.push(value);
			}
			break;
		case 2:
			arr_1.shift(arr_1[0]);
			arr_2.shift(arr_2[0]);
			break;
		case 3:
			arr_1.pop(arr_1[arr_1.length-1]);
			arr_2.pop(arr_2[arr_1.length-1]);
			break;
		case 4:
			search(arr_2);
			break;
	}
}
function init(){
	var button=document.getElementsByTagName("button"),
	arr_1=new Array,
	arr_2=new Array;
	for(var flag=0;flag<button.length;flag++){
		(function(flag){
			button[flag].onclick=function(){
				var data=getData();
				opArr(flag,arr_1,arr_2,data);
				flag==4?drawView(arr_2):drawView(arr_1);
			}
		})(flag)
	}
}
init();