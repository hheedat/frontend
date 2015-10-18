<?php

echo (null == NULL) . "\n";

echo (null === NULL) . "\n";

if (null) {
    echo "null is true";
}

$arr = array(
    'a' => 'aa',
    'b' => 'bb'
);

if (array_key_exists('a', $arr)) {
    echo 'key a exist' . "\n";
}

if (array_key_exists('arr', get_defined_vars())) {
    echo 'arr exist' . "\n";
}

var_dump(get_defined_vars()['arr']);