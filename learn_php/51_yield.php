<?php

function gen_one_to_three()
{
    for ($i = 1; $i <= 3; $i++) {
        //注意变量$i的值在不同的yield之间是保持传递的。
        yield $i;
    }
}

$generator = gen_one_to_three();
foreach ($generator as $value) {
    echo "$value\n";
}

function gen_kv()
{
    for ($i = 1; $i <= 3; $i++) {
        yield "k_$i" => "v_$i";
    }
}

foreach (gen_kv() as $k => $v) {
    var_dump($k, $v);
}

function &gen_reference()
{
    $value = 3;

    while ($value > 0) {
        yield $value;
    }
}

foreach (gen_reference() as &$number) {
    echo (--$number) . "...\n";
}