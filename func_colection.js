//ready
function ready(callBack){
	var bReady = true;
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			if(!bReady) return;
			bReady = false;
			callBack && callBack();
		},false);
		
		document.addEventListener('load',function(){
			if(!bReady) return;
			bReady = false;
			callBack && callBack();
		},false);
		
	}else if(document.attachEvent){
		document.attachEvent('onload',function(){
			if(!bReady) return;
			bReady = false;
			callBack && callBack();
		});	
		
		document.attachEvent('onreadystatechange',function(){
			if(!bReady) return;
			if(document.readyState=='complete'){
				bReady = false;
				callBack && callBack();
			};
		});	
		
		if(!window.frameElement) next();
		function next(){
			if(!bReady) return;
			try{
				document.documentElement.doScroll('left');
				bReady = false;
				callBack && callBack();
			}catch(e){
				setTimeout(next,1);
			};	
		};
	};
};

//addEvent
function addEvent(target,type,handler){
	if(target.addEventListener){
		target.addEventListener(type,handler,false);
	}else{
		target.attachEvent("on"+type,function(event){
			return handler.call(target,event);
		});
	}
}
//cancelHandler
function prevent(event){
	var event = event || window.event;
	if(event.preventDefault) event.preventDefault();
	if(event.returnValue) event.returnValue = false;
	return false;
}
//
