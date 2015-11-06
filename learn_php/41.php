<?php

$target = array(
    'battle_id' => 257,
    'user_id' => 41248,
    'user_id2' => 23989,
    'player' => 41248,
    'formation' => Array(
        '41248' => 1,
        '23989' => 2
    ),
    'result' => 1,
    'battle_type' => 1,
    'speed' => Array(
        '41248' => 0,
        '23989' => 0
    )
);
$json = json_encode($target);
$seri = serialize($target);

echo "json :" . strlen($json) . '<br/>';
echo "serialize :" . strlen($seri) . '<br/>';


$stime = microtime(true);
for ($i = 0; $i < 10000; $i++) {
    json_encode($target);
}
$etime = microtime(true);

echo "json_encode :", ($etime - $stime), '<br/>';

//----------------------------------

$stime = microtime(true);
for ($i = 0; $i < 10000; $i++) {
    json_decode($json, true);
}
$etime = microtime(true);

echo "json_decode :", ($etime - $stime), '<br/>';

//----------------------------------
$stime = microtime(true);
for ($i = 0; $i < 10000; $i++) {
    serialize($target);
}
$etime = microtime(true);

echo "serialize :", ($etime - $stime), '<br/>';

//----------------------------------
$stime = microtime(true);
for ($i = 0; $i < 10000; $i++) {
    unserialize($seri);
}
$etime = microtime(true);

echo "unserialize :", ($etime - $stime), '<br/>';
