<?php

function echo_echo()
{
    while (true) {
        echo yield . "\n";
    }
}

$gen = echo_echo();
$gen->send('hello');
$gen->send('world');