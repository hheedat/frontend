<?php

$url = "http://www.so.com/status.php";

$urls = array_pad(array(), 100, $url);


$stime = microtime(true);
$result = curlMultiExec($urls);
$etime = microtime(true);
$timeUse1 = $etime - $stime;
var_dump($result);


$stime = microtime(true);
$result1 = array();
foreach ($urls as $url) {
    $result1[] = curlExec($url);
}
$etime = microtime(true);
$timeUse2 = $etime - $stime;
var_dump($result1);

echo "multi use time : {$timeUse1}\n";
echo "single use time : {$timeUse2}\n";

/**
 * @param $urls array
 * @return array
 */
function curlMultiExec($urls)
{
    $opt_arr = array(
        CURLOPT_HEADER => false,
        CURLOPT_TIMEOUT => 3,
        CURLOPT_RETURNTRANSFER => 1,
    );

    $mh = curl_multi_init();
    $ch_arr = array();

    foreach ($urls as $key => $url) {
        $ch_arr[$key] = curl_init();
        $opt_arr[CURLOPT_URL] = $url;
        curl_setopt_array($ch_arr[$key], $opt_arr);
        curl_multi_add_handle($mh, $ch_arr[$key]);
    }

    $running = null;
    do {
        curl_multi_exec($mh, $running);
        curl_multi_select($mh);
    } while ($running > 0);

    $contents = array();
    foreach ($ch_arr as $key => $ch) {
        $contents[] = curl_multi_getcontent($ch);
        curl_multi_remove_handle($mh, $ch_arr[$key]);
        curl_close($ch);
    }

    curl_multi_close($mh);

    return $contents;
}

/**
 * @param $url string
 * @return mixed
 */
function curlExec($url)
{
    $ch = curl_init();
    $timeout = 3;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $contents = curl_exec($ch);
    curl_close($ch);

    return $contents;
}