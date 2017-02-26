//
var res_count = 0;

var test_url = [
	"http://127.0.0.1:1337/change?keycode=1234&username=Tom&phone=18625655802&longitude=116.415264&latitude=39.916097",
	"http://127.0.0.1:1337/change?keycode=1234&username=Jack&phone=18625655803&longitude=117.197149&latitude=39.143196",
	"http://127.0.0.1:1337/change?keycode=1234&username=Lili&phone=18625655804&longitude=116.497800&latitude=39.989553",
	"http://127.0.0.1:1337/change?keycode=1234&username=Gao&phone=18625655805&longitude=116.497532&latitude=39.988959",
	"http://127.0.0.1:1337/change?keycode=1234&username=Lili&phone=18625655806&longitude=116.497800&latitude=39.989553",
	"http://127.0.0.1:1337/change?keycode=1234&username=Jack&phone=18625655807&longitude=117.197149&latitude=39.143196",
	"http://127.0.0.1:1337/change?keycode=1234&username=Gao&phone=18625655808&longitude=116.497532&latitude=39.988959",
	"http://127.0.0.1:1337/change?keycode=2345&username=Zhao&phone=18625655809&longitude=116.497532&latitude=39.988959",
	"http://127.0.0.1:1337/unique?username=Zhao&phone=18625655809&longitude=116.497532&latitude=39.988959"
];

var path_change = "/change";
var path_unique = "/unique";

var user_info = {
	keycode:'',
	username:'',
	phone:'',
	email:'',
	longitude:'',
	latitude:'',
	type:'',
};

var user_change_list = {
	keycode:{
		timestamp:'',
		longitude:'',
		latitude:'',
		user_list:{
			keycode2:user_info,
		},
	},
};

var http = require('http');

function serverTest(t_url){

	http.get(t_url, function(res){

		var str = '';

		res.on('data', function (chunk) {
		       str += chunk;
		 });

		res.on('end', function () {
				res_count++;
		     	console.log(str);
		     	console.log("res_count : "+res_count);
		});

	});
};

for(var i in test_url){
	serverTest(test_url[i]);
}

function testChangeAuto(){
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

function testUniqueAuto(){
	var re = 'http://127.0.0.1:1337/unique?';
	var test_username = [
		'Tom','Jack','Lili','DR.King','Xun','Yibo','Wan','Ming','Yuxiang',
		'Lei','Gao',
	];
	var test_phone = Math.floor(Math.random()*1000000000000);
	var test_latitude = Math.floor(Math.random()*100)+"."+Math.floor(Math.random()*10000000);
	var test_longitude = Math.floor(Math.random()*1000)+"."+Math.floor(Math.random()*10000000);
	var username = test_username[Math.floor(Math.random()*10)];
	re +="username="+username+"&phone="+test_phone+"&latitude="+test_latitude+"&longitude="+test_longitude;
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


console.log("test start ...");

// function startTest(){
// 	setTimeout(function() {
// 		serverTest(testChangeAuto());
// 		startTest();
// 	}, 2000);
// }

// function startTest(){
// 	var i = 0;
// 	while(i<10000){
// 		serverTest(testChangeAuto());
// 		i++;
// 	}
// }
// startTest();
// setInterval(startTest,1000*10);


