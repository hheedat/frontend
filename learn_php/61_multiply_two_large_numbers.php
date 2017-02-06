<?php

/**
 * multiply
 * a,b should be numeric
 * @param $a string
 * @param $b string
 * @return string
 */
function mul($a, $b)
{
    $lenA = strlen($a);
    $lenB = strlen($b);

    $result = '0';
    for ($inxA = $lenA - 1; $inxA >= 0; --$inxA) {
        $re = '';
        for ($i = $inxA + 1; $i < $lenA; ++$i) {
            $re = "0" . $re;
        }
        $j = 0;
        for ($inxB = $lenB - 1; $inxB >= 0; --$inxB) {
            $mul = (int)$a[$inxA] * (int)$b[$inxB] + $j;
            if ($mul >= 10) {
                $j = floor($mul / 10);
                $mul = $mul - $j * 10;
            } else {
                $j = 0;
            }
            $re = (string)$mul . $re;
        }
        if ($j > 0) $re = (string)$j . $re;
        $result = add($result, $re);
    }

    return $result;
}

/**
 * add
 * a,b should be numeric
 * @param $a string
 * @param $b string
 * @return string
 */
function add($a, $b)
{
    $lenA = strlen($a);
    $lenB = strlen($b);

    $j = 0;
    $re = '';
    for ($inxA = $lenA - 1, $inxB = $lenB - 1; ($inxA >= 0 || $inxB >= 0); --$inxA, --$inxB) {
        $itemA = ($inxA >= 0) ? (int)$a[$inxA] : 0;
        $itemB = ($inxB >= 0) ? (int)$b[$inxB] : 0;
        $sum = $itemA + $itemB + $j;
        if ($sum > 9) {
            $j = 1;
            $sum = $sum - 10;
        } else {
            $j = 0;
        }
        $re = (string)$sum . $re;
    }
    if ($j > 0) $re = (string)$j . $re;

    return $re;
}

echo add("0", "0") . "\n";
echo add("1", "2") . "\n";
echo add("9", "8") . "\n";
echo add("1234", "4321") . "\n";
echo add("66666", "9876") . "\n";
echo add("99999999999999999999999999", "9999999999") . "\n";

echo "-------------------\n";

echo mul("0", "2") . "\n";
echo mul("0", "0") . "\n";
echo mul("1", "0") . "\n";
echo mul("1", "2") . "\n";
echo mul("123", "17") . "\n";
echo mul("9999999999", "999999") . "\n";
echo mul("999999999999999999999999999", "111111111111177999999") . "\n";
