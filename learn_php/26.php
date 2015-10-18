<?php

if ("2" > "3") {
    echo "ok";
} else {
    echo "no";
}

$arr = array(
    'a' => 'aa',
    'b' => 'bb',
    'c' => 'cc'
);

$str_json = json_encode($arr);
echo $str_json;

$arr1 = json_decode($str_json);
var_dump($arr1);