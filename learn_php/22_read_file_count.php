<?php

$file_r1 = fopen("r1.txt", "r") or die("Unable to open file!");

$arr = [];

while (!feof($file_r1)) {
    //echo fgets($file_r1) . "<br>";
    $row = fgets($file_r1);
    if (isset($arr[$row])) {
        ++$arr[$row];
    } else {
        $arr[$row] = 1;
    }
}

fclose($file_r1);

arsort($arr);

foreach ($arr as $key => $val) {
    echo $key . "出现了" . $val . "次<br>";
}