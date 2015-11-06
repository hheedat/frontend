<?php

class A
{
    public $one = 1;

    public function show_one()
    {
        echo $this->one;
    }
}

$a = new A();

$s = serialize($a);

$ua = unserialize($s);

echo $s;
echo $ua->show_one();
