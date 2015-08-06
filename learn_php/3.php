<?php

function reverse_r($str)
{
    if (strlen($str) > 1) {
        reverse_r(substr($str, 1));
    }
    echo substr($str, 0, 1) . "\n";
}

reverse_r("hello php");