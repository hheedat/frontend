<?php
define("USERAGENT", $_SERVER['HTTP_USER_AGENT']);
define("COOKIEJAR", tempnam("./", "cookie"));
define("TIMEOUT", 500);

function checkLogin($user, $password)
{
    if (empty($user) || empty($password)) {
        return 0;
    }
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_REFERER, "http://127.0.0.1:8360");
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERAGENT, USERAGENT);
    curl_setopt($ch, CURLOPT_COOKIEJAR, COOKIEJAR);
    curl_setopt($ch, CURLOPT_TIMEOUT, TIMEOUT);
    curl_setopt($ch, CURLOPT_URL, "http://127.0.0.1:8360/home/index/login");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "&mail=" . urlencode($user) . "&pwd=" . $password);
    $contents = curl_exec($ch);
    curl_close($ch);

    echo COOKIEJAR . "\n";
    echo $contents;
}

echo checkLogin("1@test.com", "111111");