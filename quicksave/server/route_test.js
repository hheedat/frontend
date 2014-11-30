//
var req_count = 0;
var user_change_list = {};

var http = require('http');
var url = require('url');  
var util = require('util');

http.createServer(function(req,res){

    var user_info = url.parse(req.url,true).query;
    var req_path = url.parse(req.url,true).pathname;


    req_count++;
    console.log("already response , req_count : "+req_count+"\n");
    console.log("req_path : "+req_path);

}).listen(1337);

console.log("Server running at 1337 ...");


