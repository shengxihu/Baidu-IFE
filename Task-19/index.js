function compositor(arr){
	var temp,
	i,
	j;
	for(i=0;i<arr.length-1;i++){
		for(j=0;j<arr.length-i;j++){
			if(arr[j]>arr[j+1]){
				temp=arr[j+1];
				arr[j+1]=arr[j];
				arr[j]=temp;
			}
		}
	}
}
function drawView(arr){
	var view=document.getElementById("view"),
	i,
	height,
	result=" ";
	for(i=0;i<arr.length;i++){
		height=arr[i]*3;
		result+="<div class='arr_view' title='"+arr[i]+"' style='height: "+height+"px;background:#"+arr[i]+"1e49'></div>";
	}
	view.innerHTML=result;
}
function opArr(i,arr){
	var input=document.getElementById("input").value,
	regexp=new RegExp("^[0-9]*$");
	test=input>=10&&input<=100&&input.match(regexp);
	if (!test){
		alert("请输入10~100的数字！")
		return null;
	}
	switch(i){
		case 0:
			arr.unshift(input);
			break;
		case 1:
			arr.push(input);
			break;
		case 2:
			arr.shift(input);
			break;
		case 3:
			arr.pop(input);
			break;
		case 4:
			compositor(arr);
			break;
	}
	drawView(arr);
}
function init(){
	var button=document.getElementsByTagName("button"),
	arr=new Array;
	for(var i=0;i<button.length;i++){
		(function(i){
			button[i].onclick=function(){
				opArr(i,arr);
			}
		})(i)
	}
}
init();