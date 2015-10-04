<?php

function quickSort(&$arr, $left, $right)
{
    $i = $left;
    $j = $right;
    if ($i < $j) {
        $flag = $arr[$left];
        while ($i < $j) {
            while ($i < $j && $arr[$j] > $flag) --$j;
            if ($i < $j) $arr[$i++] = $arr[$j];
            //$arr[$j] = $flag;
            while ($i < $j && $arr[$i] < $flag) ++$i;
            if ($i < $j) $arr[$j--] = $arr[$i];
            $arr[$i] = $flag;
        }
        quickSort($arr, $left, $i - 1);
        quickSort($arr, $i + 1, $right);
    }
}

$arr = array(2, 3, 7, 6, 5, 4, 10, 100, 9, 19, 23);

quickSort($arr, 0, count($arr) - 1);

foreach ($arr as $item) {
    echo $item . " ";
}