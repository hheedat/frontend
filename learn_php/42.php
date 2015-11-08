<?php

class A
{
    protected $str = "apple watch";

    public function p()
    {
        echo $this->str . "\n";
    }
}

$a = new A();
$a->p();


class B extends A
{
    protected $str = "iPad Pro";
}

$b = new B();
$b->p();