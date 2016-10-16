function validate_test(){
	var test=document.getElementsByTagName("input"),
    bt=document.getElementsByTagName("button");
    message=document.getElementsByClassName("message");
	for (var i=0; i < test.length; i++) {
		(function(i){
			bt[i].onclick=function(){
				if (test[i].value==null||test[i].value=="")
			    {
			  		message[i].innerHTML="姓名不能为空";
			    }
				else if(test[i].value.length >= 4 && test[i].value.length <= 16){
				    message[i].innerHTML="名称格式正确";
			    }else{
			    	message[i].innerHTML="必填，长度为4~16个字符";
			    }
			   	return false;
			}
		})(i);
	};
}
validate_test();