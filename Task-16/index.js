/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {},
op;

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city=document.getElementById("aqi-city-input").value,
	weather=document.getElementById("aqi-value-input").value;
	if (/^([a-z]+|[\u4e00-\u9fa5]+)$/i.test(city) && /^\d+$/.test(weather)) {
		aqiData[city]=weather;
		return city;
	}else{
		alert("输入数据有误");
		return null;
	}
}
/**
 * 渲染aqi-table表格
 */
var result=new Array,
delt;
function renderAqiList(city,op) {
	var aqi_table=document.getElementById("aqi-table");
	delt=document.getElementsByClassName("delt");
	if(op){
		result[i]="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button"+" "+"class='delt'>删除</button></td></tr>";
		aqi_table.innerHTML+=result[i];
	}else{
		aqi_table.deleteRow(i);
	}
	return delt;
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  var city=addAqiData();
  if (city) {
  	op=true;
    renderAqiList(city,op);
    delBtnHandle(city);
    i++;
  }
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
	for(var j=0;j<i+1;j++){
	  	(function(j){
	  		delt[j].onclick=function(){
	  			op=false;
  				renderAqiList(city,op,j);
  				i=i-1;
	  		}
	  	})(j);
	}
}
var i=0;
function init() {
	var add_btn=document.getElementById("add-btn");
	add_btn.onclick=addBtnHandle;
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}

init();
