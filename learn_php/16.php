<?php

//$a = array(1, 2, 3);
//
//
//$b = array(
//    'a' => 'apple',
//    'b' => 'banana'
//);
//
//echo var_dump($a);
//echo var_dump($b);

class A
{
    function aa()
    {
        $this->b("apple watch\n");
    }

    function b($info)
    {
        echo $info;
    }
}

$aa = new A();

$aa->aa();