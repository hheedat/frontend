<?php

$arr = array(
    array(
        'name' => 'Tom',
        'age' => 19
    ),
    array(
        'name' => 'Peter',
        'age' => 18
    ),
    array(
        'name' => 'Jack',
        'age' => 20
    ),
    array(
        'name' => 'Lily',
        'age' => 21
    ),
);

usort($arr, function ($a, $b) {
    if ($a['age'] == $b['age']) {
        return 0;
    }
    return ($a['age'] < $b['age']) ? 1 : -1;
});

var_dump($arr);