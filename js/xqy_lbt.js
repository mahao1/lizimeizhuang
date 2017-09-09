//实例属性
//创建构造函数
function Slider(id){
	this.containerId = $g(id);//大盒子
	this.ullis = $get($get(id,"ul")[0],"li");//获取ul中的li
	this.num = this.ullis.length;// 获取图片长度
	this.ollis = this.createObj();
	this.nowPic = 1;	
	this.init(this.nowPic);
	this.timer = 0;
	this.move();
	this.autoPlay();
}
//原型方法
//创建对象
Slider.prototype.createObj = function(){
	var ol = $create("ol");//创建ol
	var arr = [];
	for(var i = 0; i < this.num; i ++){
		var oLi = $create("li");//创建li
		ol.appendChild(oLi);
		arr.push(oLi);
	}
	this.containerId.appendChild(ol);
	return arr;
}
Slider.prototype.sport = function(index){
	for(var i = 0; i < this.num; i ++){
		this.ullis[i].style.display = "none";
		this.ollis[i].style.border = "1px solid #999";
	}
	this.ullis[index].style.display = "block";
	this.ollis[index].style.border = "1px solid #ff666b";
}
//创建初始化方法
Slider.prototype.init = function(index){
	this.sport(index);
}
Slider.prototype.move = function(){	
	var that = this;
	for(var i = 0; i < that.num; i ++){
		this.ollis[i].index = i;
		this.ollis[i].onmouseover = function(){
			that.sport(this.index);
		}

	}

}
//自动轮播
Slider.prototype.autoPlay = function(){
	var that = this;
	that.timer = setInterval(function(){
		that.nowPic %= that.num;
		that.sport(that.nowPic);
		that.nowPic ++;
	},5000)
	this.containerId.onmouseover = function(){
		clearInterval(that.timer);
	}
	this.containerId.onmouseout = function(){
		that.autoPlay();
	}
}

