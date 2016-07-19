<?php
//求数组的子数组的最大乘积，要求连续
$arr = [1, 2, 0, -1, 3, 4, -2, 0, 1];

function force($arr)
{
    $value = 1;
    $max = $arr[0];
    $length = count($arr);

    for ($i = 0; $i < $length; ++$i) {
        for ($j = $i; $j < $length; ++$j) {
            if ($j == $i) {
                $value = $arr[$j];
            } else {
                $value = $arr[$j] * $value;
            }
            if ($value > $max) $max = $value;
        }
    }

    return $max;
}

function dp($arr)
{
    $min = [$arr[0]];
    $max = [$arr[0]];
    $maxValue = $max[0];
    $length = count($arr);
    for ($i = 1; $i < $length; ++$i) {
        $max[$i] = max($arr[$i], $min[$i - 1] * $arr[$i], $max[$i - 1] * $arr[$i]);
        $min[$i] = min($arr[$i], $max[$i - 1] * $arr[$i], $min[$i - 1] * $arr[$i]);
        if ($max[$i] > $maxValue) $maxValue = $max[$i];
    }

    return $maxValue;
}

echo force($arr) . "\n";
echo dp($arr) . "\n";