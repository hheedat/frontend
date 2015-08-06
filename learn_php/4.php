<?php

function say_hello()
{
    $a = "a";
    function say_hello_inner()
    {
        echo "hello " . $a . "\n";
        $a = "a1";
        echo "hello " . $a . "\n";
    }

    return say_hello_inner;
}

$say_hello_1 = say_hello();

$say_hello_1();