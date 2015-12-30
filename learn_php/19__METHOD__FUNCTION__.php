<?php

class ClassName
{
    function __construct()
    {
        echo __METHOD__, "\n";
    }
}

function FunName()
{
    echo __FUNCTION__, "\n";
}
const CONST_NAME = "global";

$a = 'ClassName';
$obj = new $a;
$b = 'FunName';
$b();
echo constant('CONST_NAME'), "\n";