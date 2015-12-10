function helloPromise(str){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(str);
        },1000);
    });
}

helloPromise('hello').then(function(str){
    console.log(str);
    return helloPromise('world');
}).then(function(str){
    console.log(str);
    return helloPromise('卫龙');
}).then(function(str){
    return helloPromise(str);
}).then(function(str){
    console.log(str);
}).catch(function(err){
    console.error(err);
});
