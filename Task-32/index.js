/*兼容各浏览器的事件绑定函数*/
function addEvent(element,type,func) {
	if (element.addEventListener) {
		element.addEventListener(type,func,false);
	} else if (element.attachEvent) {
		element.attachEvent("on"+type,func);
	} else {
		element["on"+type] = func;
	}
}