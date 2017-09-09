//获取非行内样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//完美运动
function sport(obj,json,fn){
	//清除计时器
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//设置开关
		var stop = true;
		//遍历json
		for(var attr in json){
			//当前值
			var cur = 0;
			if(attr == "opacity"){
				cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
			}else{
				cur = parseInt(getStyle(obj,attr));
			}
			//计算速度
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//查看json属性是否达到目标值
			if(cur != json[attr]){
				stop = false;
			}
			//设置运动
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			}else{
				obj.style[attr] = cur + speed + "px";
			}
		}
		//检测停止
		if(stop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30);
}
