var str = "apple1 banana \napple2";
var reg = /^apple\w/gm;

console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(str.match(reg));