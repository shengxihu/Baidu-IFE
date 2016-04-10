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
module.exports=getData;