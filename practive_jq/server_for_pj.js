//
var req_count = 0;

var http = require('http');
var url = require('url');  
var util = require('util');

http.createServer(function(req,res){

    var url_info = url.parse(req.url,true).query;
    var req_path = url.parse(req.url,true).pathname;
    var res_info = {};

    //http://127.0.0.1:1337/req?user_id=1
    if(req_path==="/req"){
        res_info.user_name = checkInfo(url_info.user_id);
    }

    function checkInfo(id){
        switch(id){
            case "1": return "Tom";
            case "2": return "Jack";
            case "3": return "Lili";
            default : return null;
        }
    }

    res.writeHead(200,{'Content-Type':'text/plain','Access-Control-Allow-Origin':'*'});
    res.end(JSON.stringify(res_info));

    req_count++;
    console.log("req : \n"+util.inspect(url_info));
    console.log("res : \n"+util.inspect(res_info));
    console.log("already response , req_count : "+req_count+"\n");
    

}).listen(1337);

console.log("Server running at 1337 ...");


