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

var re = /./y; //粘滞匹配
console.log(re.test("foo")); //true
console.log(re.lastIndex); //1
console.log(re.test("foo")); //true
console.log(re.lastIndex); //2
console.log(re.test("foo")); //true
console.log(re.lastIndex); //3
console.log(re.test("foo")); //false
console.log(re.lastIndex); //3,匹配失败后,lastIndex属性没有归零
console.log(re.test("foo")); //false,所以匹配会一直失败下去
re.lastIndex = 0; //同样可以手动修改lastIndex属性的值
console.log(re.test("foo")); //true

var re = /^./y;
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo"))
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo"))
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo"))
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo"))

var re = /o/y; //相当于/^o/y
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo")) //false
re.lastIndex = 1; //手动跳过了第一个字符f,^现在匹配的位置就是f和o之间的位置,所以^o能匹配.
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo")) //false
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo")) //false
console.log("lastIndex : ",re.lastIndex," result : ",re.exec("foo")) //false
