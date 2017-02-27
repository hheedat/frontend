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

//other ready
function onReady(fn) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
        fn();
    } else {
        window.addEventListener('DOMContentLoaded', fn);
    }
}
function onReady(fn) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
        setTimeout(fn, 0);
    } else {
        window.addEventListener('DOMContentLoaded', fn);
    }
}
function onReadyPromise() {
    return new Promise(function (resolve, reject) {
        var readyState = document.readyState;
        if (readyState === 'interactive' || readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('DOMContentLoaded', resolve);
        }
    });
}
onReadyPromise().then(function () {
    console.log('DOM fully loaded and parsed');
});
console.log('==Starting==');


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
//removeEvent
function removeEvent(target, type, handler){
    target.removeEventListener ? target.removeEventListener(type, handler, false) : target.detachEvent("on" + type,  function(event){
        return handler.call(target,event);
    });
}
//cancelHandler
function prevent(event){
	var event = event || window.event;
	if(event.preventDefault) event.preventDefault();
	if(event.returnValue) event.returnValue = false;
	return false;
}
//stopBubble
function stopBubble(event) {
    if ( event && event.stopPropagation ) event.stopPropagation();
    else window.event.cancelBubble = true;
}

//handle URL
function getQueryStringSearch(){
    var qs = (location.search.length > 0 ? location.search.substring(1) : "");
    var args = {};
    var items = qs.length ? qs.split("&") : [];
    var item = null;
    var name = null;
    var value = null;
    for(var i = 0 , len = items.length ; i < len ; ++i){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if(name.length){
            args[name] = value;
        }
    }
    return args;
}

//英文单词占1B，中文2B
function getByteLen(val) { 
    var len = 0; 
    for (var i = 0; i < val.length; i++) { 
        if (val[i].match(/[^x00-xff]/ig) != null) //全角 
            len += 2; 
        else
            len += 1; 
    }; 
    return len; 
}

//得到当前日期前后delta天的日期
function getFormatTimeAfterDay(delta){
    var date = new Date();
    if(delta){
        date.setTime(date.getTime()+delta*(1000*60*60*24));
    }
    var formatYear = date.getFullYear();
    var formatMonth = date.getMonth()+1;
    if(formatMonth<10) formatMonth = "0" + formatMonth;
    var formatDate = date.getDate();
    if(formatDate<10) formatDate = "0" + formatDate;
    var formatTime = formatYear + "-" + formatMonth + "-" + formatDate;
    return formatTime;
}

//判断日期是否合法
function isLegalDate(year,month,date){
    var monthList = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(arguments.length<3){
        return false;
    }
    for(var len=arguments.length-1 ; len>=0 ; --len){
        if(arguments[len] <= 0){
            return false;
        }
    }
    if(year%4===0 && year%100!==0 || year%400 == 0){
        monthList[1]=29;
    }
    if(month <= 12 && date <= monthList[month-1]){
        return true;
    }
    return false;
}