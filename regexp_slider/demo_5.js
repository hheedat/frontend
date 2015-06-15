var str = 'The name "McDonald\'s" is said "makudonarudo" in Japanese';
var reg = /".*"/;

console.log(reg.exec(str)[0]);
