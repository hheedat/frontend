<?php

class Foo
{
    function Variable()
    {
        $name = 'Bar';
        $this->$name();
    }

    function Bar()
    {
        echo "This is Bar";
    }
}

$foo = new Foo();
$funcName = "Variable";
$foo->$funcName();