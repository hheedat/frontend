var http = require('http');
var url = require('url');
var querystring = require('querystring');
var util = require('util');
var fs = require('fs');

http.createServer(function (req, res) {

    var path = url.parse(req.url, true).pathname;
    var response = "";

    console.log("method : ", req.method);
    console.log("path : ", path);

    if (req.method == "GET") {

        var query = url.parse(req.url, true).query;
        console.log("query : ", query);

        if (path == "/") {
            fs.readFile('./request_get_post.html', function (err, data) {
                if (err) throw err;
                response = data;
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(response);
                console.log("response : ", response);
            });
        }

        if (path == "/pull") {
            response = JSON.stringify({
                method: "GET",
                query: query
            });
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end(response);
            console.log("response : ", response);
        }

    }

    if (req.method == "POST") {

        var postdata = "";

        req.addListener("data", function (postchunk) {
            postdata += postchunk;
        });

        req.addListener("end", function () {
            var params = querystring.parse(postdata);
            console.log("params", params);

            if (path == "/pull") {
                response = JSON.stringify({
                    method: "POST",
                    params: params
                })
            }

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end(response);
            console.log("response : ", response);
        })

    }

}).listen(1337);

console.log("Server running at 1337");