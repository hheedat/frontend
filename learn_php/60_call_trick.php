<?php

class A
{
    public $a = 'apple';
    public $b = 'banana';

    public function funcA()
    {
        echo "{$this->a}\n";
    }

    public function funcB()
    {
        echo "{$this->b}\n";
    }
}

$a = new A();
foreach (['A', 'B'] as $suffix) {
    $a->{'func' . $suffix}();
}