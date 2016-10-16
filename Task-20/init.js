var getData=require('./getData.js'),
opArr=require('./opArr.js'),
drawView=require('./drawView.js');
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
module.exports=init;