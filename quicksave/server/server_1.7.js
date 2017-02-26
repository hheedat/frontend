//
var SCOPE_LENGTH = 1000;
var DELETE_TIME = 1000*20;

var req_count = 0;
var user_change_list = {};

var http = require('http');
var url = require('url');  
var util = require('util');

http.createServer(function(req,res){

    var user_info = url.parse(req.url,true).query;
    var req_path = url.parse(req.url,true).pathname;
    var res_info = {user_list:[]};

    if(req_path==="/unique"){
    	var unique_code = codeFac();
    	while(unique_code in user_change_list){
    		unique_code = codeFac();
    	}
    	user_info.keycode = unique_code;
    	saveInfo(user_info,user_change_list);
    	res_info = {unique_code:unique_code};
    }

    if(req_path==="/change"){
    	
    	saveInfo(user_info,user_change_list);
	    
        if(user_change_list[user_info.keycode]){
            var res_buffer = clone(user_change_list[user_info.keycode].user_list);
            delete res_buffer[user_info.phone];

            for(var i in res_buffer){
            	// (function(this_user){
	            // 	var len = lenBtwGps(user_info.longitude,user_info.latitude,this_user.longitude,this_user.latitude);
	            // 	if(len<SCOPE_LENGTH){
	            // 		res_info.user_list.push(this_user);
	            // 	}
            	// })(res_buffer[i]);
                var len = lenBtwGps(user_info.longitude,user_info.latitude,res_buffer[i].longitude,res_buffer[i].latitude);
                if(len<SCOPE_LENGTH){
                    res_info.user_list.push(res_buffer[i]);
                }
            }
        }

    }

    function codeFac(){
    	var re = Math.floor(Math.random()*10000);
    	if(re<10){
    		re = "000"+re;
    		return re;
    	}
    	if(re<100){
    		re = "00"+re;
    		return re;
    	}
    	if(re<1000){
    		re = "0"+re;
    		return re;
    	}
    	return re.toString();
    }

    function saveInfo(info,list){
        if(list[user_info.keycode]===undefined){
            list[user_info.keycode] = {
                user_list:{},
            };
            list[user_info.keycode].user_list[user_info.phone] = user_info;
			deleteSetTimeout(list,user_info.keycode,"user_list",user_info.phone,list,user_info.keycode,"user_list");
        }else{
            if(!list[user_info.keycode].user_list[user_info.phone]){                       
            	list[user_info.keycode].user_list[user_info.phone] = user_info;
            	deleteSetTimeout(list,user_info.keycode,"user_list",user_info.phone,list,user_info.keycode,"user_list");
            }
        }
    }

    function deleteSetTimeout(obj1,str1,str2,str3,obj2,str4,str5) {
		setTimeout(function() { 
			console.log("delete : "+obj1[str1][str2][str3]);
			delete obj1[str1][str2][str3]; 
			if(isEmptyObject(obj2[str4][str5])){
				console.log("delete : "+obj2[str4]);
				delete obj2[str4];	
			}
			//console.log("list : \n"+util.inspect(user_change_list,null));
		}, DELETE_TIME);
	}

    function clone(old_obj){
        if(typeof(old_obj) != 'object' || old_obj == null) return old_obj;
        var new_obj = new Object();
        for(var i in old_obj){  
          new_obj[i] = clone(old_obj[i]); 
        }
        return new_obj;
    }

    function lenBtwGps(lng1,lat1,lng2,lat2){
        for(var i in arguments){
            arguments[i] = parseFloat(arguments[i]);
        }
        var h = Math.abs(lat1-lat2)*111195;
        var w = Math.abs(lng1-lng2)*111195*Math.cos(Math.PI*lat1/180);
        return Math.sqrt(h*h+w*w);
    }

	function isEmptyObject(obj){
		for(var n in obj){return false} 
		return true; 
	}

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(JSON.stringify(res_info));

    req_count++;
    console.log("req : \n"+util.inspect(user_info));
    console.log("res : \n"+util.inspect(res_info));
    console.log("already response , req_count : "+req_count+"\n");
    

}).listen(1337);

console.log("Server running at 1337 ...");


