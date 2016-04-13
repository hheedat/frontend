<?php
ini_set('memory_limit', '5000M');

$arr = array();
//$arr = array_pad($arr, 104857, 1);

for ($i = 0; $i < 1000000; ++$i) {
    $arr[] = $i;
}

$stime = microtime(true);

$arr1 = array();
foreach ($arr as $item) {
    $arr1[] = $item + 1;
}

$etime = microtime(true);

echo "foreach\nuse time :" . ($etime - $stime) . "\n";


$stime = microtime(true);

$arr2 = array();
array_walk($arr, function ($item) use (&$arr2) {
    $arr2[] = $item + 1;
});

$etime = microtime(true);

echo "array_walk\nuse time :" . ($etime - $stime) . "\n";


$stime = microtime(true);

$arr3 = array_map(function ($item) {
    return $item + 1;
}, $arr);

$etime = microtime(true);

echo "array_map\nuse time :" . ($etime - $stime) . "\n";

//var_dump($arr);
//var_dump($arr1);
//var_dump($arr2);
//var_dump($arr3);