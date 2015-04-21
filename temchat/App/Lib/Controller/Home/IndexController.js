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
				//用户登录成功写入Session
				var name = self.post('name'); //获取post过来的用户名
				var pwd = self.post('pwd'); //获取post过来的密码

				return D('User').where({ //根据用户名和密码查询符合条件的数据
					name: name,
					pwd: md5(pwd)
				}).find().then(function(data) {
					if (isEmpty(data)) {
						//用户名或者密码不正确，返回错误信息
						return self.error(403, '用户名或者密码不正确');
					} else {
						return self.session('userInfo', data);
					}
				}).then(function() {
					//登录成功跳转
					return self.redirect('index');
				});
			} else {
				//页面加载
				self.assign({
					'title': '登录'
				});
				return self.display();
			}
		}
	};
});