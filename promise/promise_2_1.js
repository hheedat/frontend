var fs = require('fs');

function helloPromise(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) return reject(err);
            console.log(data);
            resolve();
        });
    });
}

helloPromise('1.txt').then(function(){
    return helloPromise('2.txt');
}).then(function(){
    return helloPromise('4.txt');
}).catch(function(err){
    console.log('出错了');
    console.error(err);
    
}).then(function(){
    return helloPromise('3.txt');
});

console.log('开始');
