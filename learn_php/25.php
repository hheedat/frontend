<?php

$arr = array(
    'a' => 1,
    'b' => 2,
    'c' => 3
);

foreach ($arr as $item) {
    $item = $item + 1;
}

var_dump($arr);

foreach ($arr as $k => $v) {
    $arr[$k] = $v + 1;
}

var_dump($arr);

foreach ($arr as &$item) {
    $item = $item + 1;
}

unset($item);

var_dump($arr);
