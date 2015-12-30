<?php

function say_hello($a)
{
    ${$a}();
}

function a()
{
    echo "hello php\n";
}

say_hello("a");