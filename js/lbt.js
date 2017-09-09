//实例属性
//创建构造函数
function Slider(id){
	this.containerId = $g(id);//大盒子
	this.ullis = $get($get(id,"ul")[0],"li");//获取ul中的li
	this.num = this.ullis.length;// 获取图片长度
	this.ollis = this.createObj();
	this.nowPic = 1;	
	this.ltBtn = $g("ltBtn");
	this.rtBtn = $g("rtBtn");
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
	//创建左按钮
	var span = $create("span");
	span.innerHTML = "&lt;";
	span.id = "ltBtn";
	this.containerId.appendChild(span);
	//创建右按钮
	var span = $create("span");
	span.innerHTML = "&gt;";
	span.id = "rtBtn";
	this.containerId.appendChild(span);
	return arr;
}
Slider.prototype.sport = function(index){
	for(var i = 0; i < this.num; i ++){
		this.ullis[i].style.display = "none";
		this.ollis[i].style.backgroundColor = "#666";
	}
	this.ullis[index].style.display = "block";
	this.ollis[index].style.backgroundColor = "red";
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
	//点击左按钮
	this.ltBtn.onclick = function(){
		if(that.nowPic > 0){
			that.nowPic --;
			that.sport(that.nowPic);
		}else{
			that.nowPic = that.num - 1;
			that.sport(that.nowPic);
		}
	}
	//点击右按钮
	this.rtBtn.onclick = function(){
		if(that.nowPic < that.num - 1){
			that.nowPic ++;
			that.sport(that.nowPic);
		}else{
			that.nowPic = 0;
			that.sport(that.nowPic);
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
