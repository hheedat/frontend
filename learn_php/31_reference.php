<?php

$arr = array(
    'a' => 'a0'
);

$arr1 = &$arr;

$arr1['a'] = 'a1';

var_dump($arr);
var_dump($arr1);