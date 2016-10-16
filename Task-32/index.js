/*兼容各浏览器的事件绑定函数*/
handertion addEvent(element,type,hander) {
	if (element.addEventListener) {
		element.addEventListener(type,hander,false);
	} else if (element.attachEvent) {
		element.attachEvent("on"+type,hander);
	} else {
		element["on"+type] = hander;
	}
}