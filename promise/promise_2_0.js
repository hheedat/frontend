function hello(str,callback){
    setTimeout(function(){
        console.log(str);
        callback();
    },1000);
}

hello('hello',function(){
    hello('world',function(){
        setTimeout(function(){
            hello('卫龙',function(){
                hello('好像很好吃',function(){
                    hello('大家都爱吃',function(){
                        hello('哈哈哈',hello.bind(null,'nice',function(){}));
                    });
                });
            });
        },1000)
    });
});
