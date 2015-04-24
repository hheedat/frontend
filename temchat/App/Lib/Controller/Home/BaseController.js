/**
 * 项目里的Controller基类
 * 这里做一些通用的处理逻辑，其他Controller继承该类
 * @param  {[type]}
 * @return {[type]}         [description]
 */
module.exports = Controller(function() {
	'use strict';
	return {
		init: function(http) {
			this.super("init", http);
			//其他的通用逻辑
            var self = this;
            console.log("action : " + http.action);
			if(http.action === "login" || http.action === "register" ||http.action==="checkMail"){
                return ;
            }else{
                return self.session("userInfo").then(function(data){
                    if(!isEmpty(data)){
                        self.userInfo = data;
                    }else{
                        if(http.action !== "index"){
                            self.assign({
                               "info":"您还没有登录"
                            });
                            return self.display("index");
                        }
                    }
                });
            }
		}
	}
})