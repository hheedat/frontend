<?php

$array = [1, 2, 3];
echo implode(',', $array), "\n";

foreach ($array as &$value) {
}    // by reference
echo implode(',', $array), "\n";

foreach ($array as $value) {
}     // by value (i.e., copy)
echo implode(',', $array), "\n";

//上面代码的运行结果如下：
//
//1,2,3
//1,2,3
//1,2,2
//
//你猜对了吗？为什么是这个结果呢？
//
//我们来分析下。第一个循环过后，$value是数组中最后一个元素的引用。第二个循环开始：
//
//第一步：复制$arr[0]到$value（注意此时$value是$arr[2]的引用），这时数组变成[1,2,1]
//第二步：复制$arr[1]到$value，这时数组变成[1,2,2]
//第三步：复制$arr[2]到$value，这时数组变成[1,2,2]
//
//综上，最终结果就是1,2,2
//
//避免这种错误最好的办法就是在循环后立即用unset函数销毁变量

$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}
unset($value);   // $value no longer references $arr[3]
var_dump($arr);