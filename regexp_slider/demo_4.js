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
