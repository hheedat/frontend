//
var eg1 = "http://127.0.0.1:1337/change?keycode=1234&username=tom&phone=18602296323&email=tomisgood@gmail.com&longitude=30&latitude=40&type=1";

var eg2 = "http://127.0.0.1:1337/change?keycode=1234&username=tom&phone=18625655801";

//
var eg3 = "http://127.0.0.1:1337/change?keycode=1234&username=Tom&phone=18625655802&longitude=116.415264&latitude=39.916097";

var eg4 = "http://127.0.0.1:1337/change?keycode=1234&username=Jack&phone=18625655803&longitude=117.197149&latitude=39.143196";

var eg5 = "http://127.0.0.1:1337/change?keycode=1234&username=Lili&phone=18625655804&longitude=116.497800&latitude=39.989553";

var eg6 = "http://127.0.0.1:1337/change?keycode=1234&username=Gao&phone=18625655805&longitude=116.497532&latitude=39.988959";

//
var eg7 = "http://127.0.0.1:1337/change?keycode=1234&username=Lili&phone=18625655806&longitude=116.497800&latitude=39.989553";

var eg8 = "http://127.0.0.1:1337/change?keycode=1234&username=Jack&phone=18625655807&longitude=117.197149&latitude=39.143196";

var eg9 = "http://127.0.0.1:1337/change?keycode=1234&username=Gao&phone=18625655808&longitude=116.497532&latitude=39.988959";

var eg10 = "http://127.0.0.1:1337/change?keycode=2345&username=Zhao&phone=18625655809&longitude=116.497532&latitude=39.988959";

var eg11 = "http://127.0.0.1:1337/unique?username=Zhao&phone=18625655809&longitude=116.497532&latitude=39.988959";


var path_name = "/change";
var path_name1 = "/unique";

var user_info = {
	keycode:'',
	username:'',
	phone:'',
	email:'',
	longitude:'',
	latitude:'',
	type:'',
}

var user_change_list = {
	keycode:{
		timestamp:'',
		longitude:'',
		latitude:'',
		user_list:{
			keycode2:user_info,
		},
	},
}

var http = require('http');

function serverTest(t_url){

	http.get(t_url, function(res){

		var str = '';
		//console.log('Response is '+res.statusCode);

		res.on('data', function (chunk) {
		       str += chunk;
		 });

		res.on('end', function () {
		     	console.log(str);
		});

	});
};

// var test_http = [
// 	eg3,eg4,eg5,eg6,eg7,eg8,eg9,eg10,eg11
// ];

// for(var i in test_http){
// 	serverTest(test_http[i]);
// }

function testUrlAuto(){
	var re = 'http://127.0.0.1:1337/change?';
	var test_username = [
		'Tom','Jack','Lili','DR.King','Xun','Yibo','Wan','Ming','Yuxiang',
		'Lei','Gao',
	];
	var test_phone = Math.floor(Math.random()*1000000000000);
	var test_latitude = Math.floor(Math.random()*100)+"."+Math.floor(Math.random()*10000000);
	var test_longitude = Math.floor(Math.random()*1000)+"."+Math.floor(Math.random()*10000000);
	var keycode = codeFac();
	var username = test_username[Math.floor(Math.random()*10)];
	re +="keycode="+keycode+"&username="+username+"&phone="+test_phone+"&latitude="+test_latitude+"&longitude="+test_longitude;
	//console.log(re);
	return re;
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


console.log("test start !");

function startTest(){
	setTimeout(function() {
		serverTest(testUrlAuto());
		startTest();
	}, 2000);
}
startTest();


// for(var i=0;i<10000;i++){
// 	serverTest(testUrlAuto());
// }


