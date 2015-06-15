var str = "apple1 banana apple2";
var reg = /apple\w/g;

console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(str.match(reg));