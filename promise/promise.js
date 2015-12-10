function helloPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var number = Math.random();
            if(number>0.5){
                resolve('world');
            }else{
                reject(new Error('nobody'));
            }
        },1000);
        console.log('hello');
    });
}

helloPromise().then(function(str){
    console.log(str);
},function(err){
    console.error(err);
});
