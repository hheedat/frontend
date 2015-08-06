<?php

require_once("6.php");

class MyNum extends Num
{
    public function square()
    {
        $this->num *= $this->num;
    }
}

$num1 = new MyNum(2);

echo $num1 . "</br>";

$num1->add(3);

echo $num1 . "</br>";

$num1->minus(2);

echo $num1 . "</br>";

$num1->mul(4);

echo $num1 . "</br>";

$num1->divide(2);

echo $num1 . "</br>";

$num1->square();

echo $num1 . "</br>";