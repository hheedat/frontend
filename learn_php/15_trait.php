<?php

trait foo
{
    public function getFoo()
    {
        echo "Foo\n";
    }
}

trait bar
{
    public function getBar()
    {
        echo "Bar\n";
    }
}

class A
{
    use foo, bar;

    public function getA()
    {
        echo "A\n";
    }
}

$a = new A();
$a->getFoo();
$a->getBar();
$a->getA();