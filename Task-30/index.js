function checkItemValid(){
	var item=document.getElementById("item"),
	message=document.getElementsByClassName("item");
	item.addEventListener("focusin",function(){
		message[0].style.display="block";
		message[0].style.visibility="visible";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="none";
	})
	item.addEventListener("focusout",checkItem)
}
function checkItem(){
	var item=document.getElementById("item"),
	message=document.getElementsByClassName("item");
	if (item.value == null || item.value == "") {
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="block";
	}else if(item.value.length < 4 || item.value.length > 16) {
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="block";
		message[3].style.display="none";
	} else {
		message[0].style.display="none";
		message[1].style.display="block";
		message[2].style.display="none";
		message[3].style.display="none";
	}
}
function checkPasswardValid(){
	var passward=document.getElementById("passward"),
	message=document.getElementsByClassName("passward");
	passward.addEventListener("focusin",function(){
		message[0].style.display="block";
		message[0].style.visibility="visible";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="none";
	})
	passward.addEventListener("focusout",checkPassward);
	return passward;
}
function checkPassward(){
	var passward=document.getElementById("passward"),
	message=document.getElementsByClassName("passward");
	if (passward.value == null || passward.value == "") {
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="block";
	}else if(passward.value.length != 6) {
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="block";
		message[3].style.display="none";
	} else {
		message[0].style.display="none";
		message[1].style.display="block";
		message[2].style.display="none";
		message[3].style.display="none";
	}
}
function checkRepasswardValid(){
	var repassward=document.getElementById("repassward"),
	message=document.getElementsByClassName("repassward"),
	passward=checkPassward();
	repassward.addEventListener("focusin",function(){
		message[0].style.display="block";
		message[0].style.visibility="visible";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="none";
	})
	repassward.addEventListener("focusout",checkRepassward)
}
function checkRepassward(){
	var repassward=document.getElementById("repassward"),
	message=document.getElementsByClassName("repassward"),
	passward=checkPassward();
	if (repassward.value == null || repassward.value == "") {
		message[0].style.display="none";
		message[1].style.display="none";
				message[2].style.display="none";
		message[3].style.display="block";
	}else if(repassward.value != passward.value) {
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="block";
		message[3].style.display="none";
	} else {
		message[0].style.display="none";
		message[1].style.display="block";
		message[2].style.display="none";
		message[3].style.display="none";
	}
}
function checkEmailValid(){
	var email=document.getElementById("email"),
	message=document.getElementsByClassName("email");
	email.addEventListener("focusin",function(){
		message[0].style.display="block";
		message[0].style.visibility="visible";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="none";
	})
	email.addEventListener("focusout",checkEmail)
}
function checkEmail(){
	var email=document.getElementById("email"),
	message=document.getElementsByClassName("email"),
	apos=email.value.indexOf("@"),
	dotpos=email.value.lastIndexOf(".");
	if (email.value == null || email.value == "") {
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="block";
	}else if(apos<1||dotpos-apos<1) {
		console.log(dotpos+email.value)
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="block";
		message[3].style.display="none";
	} else {
		message[0].style.display="none";
		message[1].style.display="block";
		message[2].style.display="none";
		message[3].style.display="none";
	}
}
function checkPhoneValid(){
	var phone=document.getElementById("phone"),
	message=document.getElementsByClassName("phone");
	phone.addEventListener("focusin",function(){
		message[0].style.display="block";
		message[0].style.visibility="visible";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="none";
	})
	phone.addEventListener("focusout",checkPhone)
}
function checkPhone(){
	var phone=document.getElementById("phone"),
	message=document.getElementsByClassName("phone");
	if (phone.value == null || phone.value == "") {
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="none";
		message[3].style.display="block";
	}else if(phone.value.length != 11) {
		message[0].style.display="none";
		message[1].style.display="none";
		message[2].style.display="block";
		message[3].style.display="none";
	} else {
		message[0].style.display="none";
		message[1].style.display="block";
		message[2].style.display="none";
		message[3].style.display="none";
	}
}
checkItemValid();
checkPasswardValid();
checkRepasswardValid();
checkEmailValid();
checkPhoneValid();