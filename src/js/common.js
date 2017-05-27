var utils = {

	//格式化金额
	money_format:function(money,po) {
		var digit = po || 3;
		var num = (!money?0/1:money/1).toFixed(digit);
		return num;
	},
	//设置cookie
	setCookie:function(name,value){
		document.cookie = name + "="+ escape(value);
	},
	//读取cookie
	getCookie:function(name){
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	    if(arr=document.cookie.match(reg)){
			return unescape(arr[2]);
		}else{
			return null;
		}
	},
	//判断数组中是否包含该元素
	isNoRepeat:function(arr , s){
		if($.inArray(s, arr)>-1){
			return false;
		}
			return true;
	},
	//获得一组随机数
	MathArray:function(length,minNum,maxNum){
		var shang = [];
		while(true){
			if(shang.length==length){
				break;
			}
			var x=parseInt(Math.random()*(maxNum))+1;
			if(isNoRepeat(shang,(x/1))&&(x/1)>=(minNum/1)){
				shang.push(x/1);
			}
		}
		return shang;
	},
	//返回上一级页面
	goBack:function(){
		window.history.back();
	}
};
module.exports = utils;
//格式化时间对象
Date.prototype.format =function(format){
	var o = {
	"M+" : this.getMonth()+1, //month
	"d+" : this.getDate(), //day
	"h+" : this.getHours(), //hour
	"m+" : this.getMinutes(), //minute
	"s+" : this.getSeconds(), //second
	"q+" : Math.floor((this.getMonth()+3)/3), //quarter
	"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
	(this.getFullYear()+"").substr(4- RegExp.$1.length));
	for(var k in o)if(new RegExp("("+ k +")").test(format))
	format = format.replace(RegExp.$1,
	RegExp.$1.length==1? o[k] :
	("00"+ o[k]).substr((""+ o[k]).length));
	return format;}
