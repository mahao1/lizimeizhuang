//获取指定id对象
function $g(id){
	return document.getElementById(id);
}
//获取指定元素名称的对象集
function $get(containerId,tagName){
	if(typeof containerId == "string" && $g(containerId)){
		return $g(containerId).getElementsByTagName(tagName);
	}else if(typeof containerId == "object"){
		return containerId.getElementsByTagName(tagName);
	}else{
		throw("您写的第一个参数不是一个id");
	}
}
//创建元素对象
function $create(tagName,attr){
	var dom = document.createElement(tagName);
	for(var i in attr){
		dom[i] = attr[i];
	}
	return dom;
}
