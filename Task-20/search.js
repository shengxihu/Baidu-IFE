function search(arr_1){
	var input_search=document.getElementById("input-search").value,
	result,
	arr_3=new Array(arr_1.length),
	rex=new RegExp(input_search,"g");
	for(var i=0;i<arr_1.length;i++){
		arr_3[i]=arr_1[i];
		result=arr_3[i].replace(rex,"<b style='color:#FFFEFF;'>"+input_search+"</b>");
		arr_3[i]=result;
	}
	return arr_3;
}
module.exports=search;