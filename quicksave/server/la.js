//
var http = require('http');
var fs = require('fs');

var my_url = "http://zonghe.m.so.com/api/search/app?q=";
var my_url2 = "&src=ms_zhushou&inp=1&hfrom=23&sug=%E8%AF%B4%E7%9A%84&layout=3&os=16&webp=1&page=1&fm=gm001_5_6_ssapp&m=d55c0e463160aacb9f1aa346b3856501&m2=85a4347f73773dbbb42b78a4da396c9c&v=3.0.70&re=1&ch=600000&model=MI+2A&sn=4.47798919578295&cu=qct+msm8960+cdp&ppi=720x1280&startCount=55&snt=-1";

function la(t_url,path_name){

	http.get(t_url, function(res){

		var str = '';

		res.on('data', function (chunk) {
		       str += chunk;
		 });

		res.on('end', function () {
				var re1 = JSON.parse(str);
				re2 = re1["data"][0];
				re3 = JSON.stringify(re2);
				//console.log(keyword);
		     	console.log(re3);
		     	//var re4 = keyword+"\n"+re3+"\n\n";
		     	fs.appendFile(path_name,re3+",",'utf8');
		});

	});
};

var men = [
	{
		name:"zhainan",
		recouce:[
			"爱奇艺视频","芒果TV","喜马拉雅听书","懒人听书","红袖添香","糗事百科","聊天女仆","百思不得姐",
			"2048","我叫MT online","微密","直播吧","饿了么","穿衣助手","俯卧撑专业版","跟我练腹肌","网易彩票","聚划算"
		]
	},
	{
		name:"daren",
		recouce:[
			"360换机","360卫士极客版","360飞传","链接泡泡 Link Bubble","思维简图",
			"Flipboard","单读","懂球帝","虎扑体育","什么值得买","惠惠购物助手"
		]
	},
	{
		name:"shishangdaren",
		recouce:[
			"Hi潮","明星衣橱","薄荷","扎头发宝典","堆糖","图吧","时尚达人","Runtastic",
			"Running","悦跑圈","唯品会","网易时尚杂志","杂志范","ELLE世界级知名时尚杂志","ZAKER橱窗","HOT男人"
		]
	},
	{
		name:"wenyiqingnian",
		recouce:[
			"豆瓣购书单","多看阅读","一个","鲜果","Weico","Fuubo","同志交友 Jackd","小蛮腰","豆瓣fm","虾米音乐","无印良品助眠器MUJI to Sleep","照片处理Pixlr Express","简图","豆瓣电影","时光网","豆瓣东西","酒仙网",
			"顺丰优选","Lofter","犀牛故事","7x7","锤子便签","禅游记","穷游","穷游清单","禅游画报","易到用车","在路上"
		]
	},
	{
		name:"shangwurenshi",
		recouce:[
			"Any.Do 日程管理","番茄时钟","高效Todo","和讯财经","新浪财经","每日看点",
			"飞常准","商业周刊","生日管家","印象笔记","360云盘","挖财","随手记"
		]
	},
	{
		name:"erciyuan",
		recouce:[
			"YY","哔哩哔哩动画","去吧皮卡丘","酷酷爱魔兽","合租记","漫画岛",
			"暴走漫画","头像加1","猫叫模拟器","Gif快手","喵呜颜文字","我的作业神器","作业帮","小恩爱"
		]
	}
];

var women = [
	{
		name:"shishangdaren",
		recouce:[
			"海报工厂","陌陌","冷笑话精选","Running","什么值得买","GIF快手","火柴盒","哥本哈根减肥法","极色"
		]
	},
	{
		name:"erciyuan",
		recouce:[
			"美颜相机","喵呜颜文字","暴走漫画","美丽说","肯德基优惠卷",
			"血族（吸血萝莉）","自拍神器","小恩爱","哔哩哔哩动画","蘑菇街",
			"楚楚街9块9包邮购","练舞OL（明星版）"
		]
	},
	{
		name:"nvhanzi",
		recouce:[
			"photoshop手机版","果壳精选","电脑维修攻略","百度地图","实况足球2014","3D终极狂飙4",
			"PicLab照片编辑器","家电维修大全","天天酷跑最新完美攻略","手机维修终结者"
		]
	},
	{
		name:"nvwenqing",
		recouce:[
			"食色","穷游","LOFTER","ONE 一个","ONE 一个","墨迹天气","高德地图","豆瓣东西",
			"暖暖环游世界","指滑地图snapseed","蝉游记","易信","Flipboard","每日瑜伽","格瓦拉@电影","豆瓣电影",
		]
	},
	{
		name:"zhainv",
		recouce:[
			"拉出大长腿Spring","景点特价门票","天涯社区","糗事百科","懒人减肥法","手机淘宝","我要特价","捕鱼达人3",
			"秦时明月","美图秀秀","世纪佳缘","减肥瘦身日记","乐蜂网","花儿与少年官方游戏","找你妹2014",
			"百变明星脸","有缘网","果冻消消乐"
		]
	},
	{
		name:"mama",
		recouce:[
			"POPO亲子相机","携程旅行","辣妈帮","护眼宝","家庭用药",
			"蜜淘","贝贝特卖","途牛旅游","口袋TFBOYS","快乐孕期","快乐育儿"
		]
	},
	{
		name:"nvqiangren",
		recouce:[
			"穷游折扣","Weico","凤凰新闻","7分钟锻炼Seven","唯品会","大麦网",
			"无秘","知乎日报","Runtastic PRO","时光网","南方周末"
		]
	}
];

var the_con =[];

for(var i in men){
	fs.appendFile(men[i].name+".json","[",'utf8');
	for(var j in men[i].recouce){
		var t_url = my_url+men[i].recouce[j]+my_url2;
		la(t_url,men[i].name+".json");
	}
	fs.appendFile(men[i].name+".json","]",'utf8');
}





