<?php

$l = 2;

if (is_int($l)) {
    echo $l;
} else {
    echo "not int";
}

echo is_int($l) ? $l : "not int";

echo '<br>';

$m = " MY name IS PHP ";
$m1 = strtolower(trim($m));
echo "\"$m1\"" . " len " . strlen($m1);

echo '<br>';

$url = "http://www.foo.com/abc/de/fg.php?id=1";
if (preg_match("/\w+(?=\?)/", $url, $matches)) {
    echo $matches[0];
} else {
    echo 'do not match';
}

$str1 = "woxihuanphp";
$array1 = str_split($str1);
foreach ($array1 as $item) {
    echo $item . "<br>";
}