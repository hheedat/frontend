<?php

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

$re = "" == trim("    ");

echo $re . "\n";

if ($re) {
    echo "equal\n";
}
