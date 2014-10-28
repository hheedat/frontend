//
var http = require('http');
var cheerio = require('cheerio');
var fs = require('fs');

var my_url = "http://www.ifanr.com/463673";

function la(t_url){

	http.get(t_url, function(res){

		var str = '';

		res.on('data', function (chunk) {
		       str += chunk;
		 });

		res.on('end', function () {
				var re = str;
				var $ = cheerio.load(re);
				fs.appendFile("test.html",$('.entry-name').text(),'utf8');
				console.log(re);
		});

	}).on("error",function(){
		console.log("error haha");
	});
};

la(my_url);






