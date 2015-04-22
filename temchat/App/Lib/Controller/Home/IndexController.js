/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function() {
	"use strict";
	return {
		indexAction: function() {
			//render View/Home/index_index.html file
			this.display();
		},
		loginAction: function() {
			var self = this;

			//页面post
			if (self.isPost()) {
				var name = self.post('name'); //获取post过来的用户名
				var pwd = self.post('pwd'); //获取post过来的密码

				return D('User').where({ //根据用户名和密码查询符合条件的数据
					name: name,
					pwd: md5(pwd)
				}).find().then(function(data) {
					if (isEmpty(data)) {
                        self.assign({
                            'info':'用户名或者密码不正确',
                            'title':'登录'
                        });
                        throw new Error('用户名或者密码不正确');
						return self.display();
					} else {
                        //用户登录成功写入Session
						return self.session('userInfo', data);
					}
				}).then(function() {
                    self.assign({
                        'info':"登录成功"
                    });
					return self.display('index');
				});
			} else {
				self.assign({
					'title': '登录'
				});
				return self.display();
			}
		},
		registerAction:function(){
			var self = this;
			if(self.isPost()){
				var name = self.post('name');
				var pwd = self.post('pwd');

                return D('User').where({
                    name:name
                }).find().then(function(data){
                    if(!isEmpty(data)){
                        self.assign({
                            'info':'这个用户名已经被注册',
                            'title':'注册'
                        });
                        self.display();
                    }else{
                        return D('User').add({
                            name:name,
                            pwd:md5(pwd)
                        }).then(function(insertId){
                            console.log("apple:"+insertId);
                            if(insertId){
                                self.assign({
                                    'info':'注册成功'
                                });
                                return self.display('index');
                            }else{
                                throw new Error("注册似乎出了一些问题");
                            }
                        }).catch(function(err){
                            self.assign({
                                'info':err
                            });
                            return self.display();
                        });
                    }
                })
			}else{
                self.assign({
                    'title':'注册'
                });
                return self.display();
            }
		}
	};
});