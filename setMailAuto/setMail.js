var nodemailer = require("nodemailer"); 
var cheerio = require('cheerio'); 
var http = require('http');
var SET_TIMEOUT =  1000*60;  


var set_count = 0;
var transport = nodemailer.createTransport({  
    service:"QQ",
    auth: {  
        user: "*****@qq.com",  
        pass: "*****"  
    }  
});  
  
var mailOption = {
    from : "*****@qq.com",  
    to : "*****@163.com",  
    subject: "主题test",  
    text:"hello test !",
    html:"<p>这是一封自动发出的测试邮件</p>"  
};

var mail_opt_list = [];

function sendMail(mailOpt){
    // mailOpt.subject = "auto主题:"+(new Date()).getTime();
    // mailOpt.text = "time:"+ (new Date()).toString();
    // mailOpt.html = "<p>自动发出的测试邮件,时间 ："+ (new Date()).toString() +"</p>";

    transport.sendMail(mailOpt, function(error, info){  
        if(error){  
            console.log(error);  
        }else{  
            set_count++;
            console.log("Message sent: " + info.response);  
            console.log("already sent mail : "+set_count);
        }  
    });
}


var my_url = "http://www.ifanr.com/463673";

function la(t_url,mailOpt){

    http.get(t_url, function(res){

        var str = '';

        res.on('data', function (chunk) {
               str += chunk;
         });

        res.on('end', function () {
                var re = str;
                var $ = cheerio.load(re);
                var title = $('.entry-name').text();
                mailOpt.subject = title + " " + (new Date()).getTime();
                mailOpt.text = title;
                mailOpt.html = $('article').html();
                mail_opt_list.push(mailOpt);
                console.log(re);
        });

    }).on("error",function(){
        console.log("error haha");
    });
};

la(my_url,mailOption)

setTimeout(function() {
    console.log(mail_opt_list[0]);
    sendMail(mail_opt_list[0]);
}, 3000);