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
$funcname = "Variable";
$foo->$funcname();