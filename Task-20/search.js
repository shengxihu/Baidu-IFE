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
module.exports=search;