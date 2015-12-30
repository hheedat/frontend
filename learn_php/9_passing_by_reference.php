<?php

function add_some_extra(&$str)
{
    $str .= 'and something extra.';
}

$str = 'This is a string, ';
add_some_extra($str);
echo $str . "\n</br>";

