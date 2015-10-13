<?php

$a = "11";

function a()
{
    $a = "22";
    echo $a;
}

function b()
{
    $a = "33";
    echo $a;
}

a();
b();
echo $a;
