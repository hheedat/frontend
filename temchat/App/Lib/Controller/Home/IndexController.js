/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function() {
	"use strict";
	return {
		indexAction: function() {
			//render View/Home/index_index.html file
            var self = this;
            return self.session('userInfo').then(function(data){
                if(isEmpty(data)) {
                    return self.display();
                }else{
                    self.assign({
                        'islogin':true,
                        'name':data.name
                    })
                    return self.display();
                }
            });
		},
        logoutAction:function(){
            var self = this;
            return self.session().then(function(){
                return self.redirect('index');
            });
        },
		loginAction: function() {
			var self = this;

			//页面post
			if (self.isPost()) {
                var email = self.post('email');
				var pwd = self.post('pwd');
                var name = null;

				return D('User').where({ //根据用户名和密码查询符合条件的数据
					email : email,
					pwd : md5(pwd)
				}).find().then(function(data) {
					if (isEmpty(data)) {
                        self.assign({
                            'info':'登录邮箱或者密码不正确',
                            'title':'登录'
                        });
                        //throw new Error('登录邮箱或者密码不正确');
						return self.display();
					} else {
                        //用户登录成功写入Session
                        name = data.name;
						return self.session('userInfo', data);
					}
				}).then(function() {
                    //self.assign({
                    //    'islogin':true,
                    //    'name':name
                    //})
                    //return self.display('index');
                    return self.redirect('index');
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
                var email = self.post('email');
				var name = self.post('name');
				var pwd = self.post('pwd');

                return D('User').where({
                    email : email
                }).find().then(function(data){
                    if(!isEmpty(data)){
                        self.assign({
                            'info':'这个邮箱已经被注册',
                            'title':'注册'
                        });
                        self.display();
                    }else{
                        return D('User').add({
                            email:email,
                            name:name,
                            pwd:md5(pwd)
                        }).then(function(insertId){
                            console.log("the new user id is : "+insertId);
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
                });
			}else{
                self.assign({
                    'title':'注册'
                });
                return self.display();
            }
		},
        checkMailAction:function(){
            var self = this;
            if(self.isPost()){
                var email = self.post('email');
                return D('User').where({
                    email:email
                }).find().then(function(data){
                    if(!isEmpty(data)){
                        return self.json({message:"err"});
                    }else{
                        return self.json({message:"ok"});
                    }
                });
            }
        }
	};
});