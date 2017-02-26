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