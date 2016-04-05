function radioEvent(){
	var identity=document.getElementById("identity"),
	radio=identity.getElementsByTagName("input"),
	form=document.getElementsByTagName("form");
	identity.onclick=function(){
		if (radio[0].checked) {
			form[1].className="city";
			form[2].className="company form-default";
		}else if (radio[1].checked) {
			form[1].className="city  form-default";
			form[2].className="company";
		}
	}
}
function cityEvent(){
	var university=document.getElementsByClassName("university"),
	cities=document.getElementById("cities"),
	item="Beijing";
	option=cities.getElementsByTagName("option");
	cities.onclick=function(){
		var index=cities.selectedIndex,
		reset=document.getElementsByName(item);
		reset[0].className="university university-default";
		item=option[index].className;
		var select=document.getElementsByName(item);
		select[0].className="university";
	}

}
cityEvent();
radioEvent();