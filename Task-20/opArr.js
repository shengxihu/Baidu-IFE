var search=require('./search.js');
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
module.exports=opArr;
