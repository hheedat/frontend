<?php

class A
{
    function foo()
    {
        if (isset($this)) {
            echo "\$this is defind : " . get_class($this) . "\n";
        } else {
            echo "\$this is not defind\n";
        }
    }
}

class B
{
    function bar()
    {
        A::foo();
    }
}

A::foo();

$a = new A();
$a->foo();

B::bar();

$b = new B();
$b->bar();