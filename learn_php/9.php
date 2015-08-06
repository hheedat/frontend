<?php

function add_some_extra(&$str)
{
    $str .= 'and something extra.';
}

$str = 'This is a string, ';
add_some_extra($str);
echo $str . "\n</br>";

function sum(...$numbers)
{
    $acc = 0;
    foreach ($numbers as $n) {
        $acc += $n;
    }
    return $acc;
}

echo sum(1, 2, 3, 4) . "\n</br>";

echo sum(...[1, 2, 3, 4, 5]) . "\n</br>";