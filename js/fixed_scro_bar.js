window.onload=function(){
  var EventUtil = {
	  //添加事件
	  addEvent: function(element,type,callback){
		  if(element.addEventListener){
			  element.addEventListener(type,callback,false);
		  }else if(element.attachEvent){
			  element.attachEvent('on'+type,callback);
		  }else{
			  element['on'+type] = callback;
		  }
	  },
	  //移除事件
	  removeEvent: function(element,type,callback){
		  if(element.removeEventListener){
			  element.removeEventListener(type,callback,false);
		  }else if(element.detachEvent){
			  element.detachEvent('on'+type,callback);
		  }else{
			  element['on'+type] = null;
		  }
	  },
	  //获取事件对象
	  getEvent: function(event){
		  return event?event:window.event;
	  },
	  //获取事件目标
	  getTarget: function(event){
		  return event.target||event.srcElement;
	  },
	  //取消默认行为
	  preventDefault: function(event){
		  if(event.preventDefault){
			  event.preventDefault();
		  }else{
			  event.returnValue = false;
		  }
	  },
	  //阻止冒泡
	  stopPropagation: function(event){
		  if(event.stopPropagation){
			  event.stopPropagation();
		  }else{
			  event.cancelBubble = true;
		  }
	  }
  };
  
  var sider = document.getElementById("sider");
  //滚动时触发
  EventUtil.addEvent(window,'scroll',fixScoSide);
  //改变浏览器窗口大小时触发
  EventUtil.addEvent(window,'resize',fixScoSide);
  //滚动高+屏幕高>侧边高，设置绝对定位；否则，恢复普通定位
  function fixScoSide(){
	  var sideH = sider.offsetHeight;
	  var screenH = document.documentElement.clientHeight||document.body.clientHeight;
	  var scrollH = document.documentElement.scrollTop||document.body.scrollTop;
	  console.log(sideH);
	  if(screenH+scrollH>sideH){
		  sider.style.cssText = 'position:fixed;right:0px;top:'+(-(sideH-screenH))+'px';
	  }else{
		  sider.style.position = 'static';
	  }
  }
}