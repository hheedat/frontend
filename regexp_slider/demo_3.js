var re = /o/g; //全局匹配
console.log(re.lastIndex); //0,lastIndex属性的初始值为0
console.log(re.test("foo")); //true,匹配了第二个字符
console.log(re.lastIndex); //2,lastIndex属性的值被设置为2,也就是第二个字符之后
console.log(re.test("foo")); //true,从第二个字符(lastIndex属性的值)之后开始匹配,匹配了第三个字符
console.log(re.lastIndex); //3,lastIndex属性的值被设置为2,也就是字符串的末尾
console.log(re.test("foo")); //false,已经没有字符了,匹配失败.
console.log(re.lastIndex); //0,lastIndex属性的值被重置为0
console.log(re.test("foo")); //true,又一次重新开始匹配
console.log(re.lastIndex); //2,一直循环下去
re.lastIndex = 3; //手动修改为3
console.log(re.test("foo")); //false,从第三个字符后开始匹配,所以匹配失败