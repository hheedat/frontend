<?php

class MyClass
{
    const constant = 'constant value';

    function showConstant()
    {
        echo self::constant . "\n";
    }
}

echo MyClass::constant . "\n";

$classname = "MyClass";
echo $classname::constant . "\n";

$class = new MyClass();
$class->showConstant();

echo $class::constant . "\n";