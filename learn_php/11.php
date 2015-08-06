<?php

$str = "hello ";

$message = function($msg) use ($str)
{
    return $str . $msg;
};

$str1 =  $message("php");

echo $str1 . "\n";