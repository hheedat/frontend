<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://127.0.0.1:8360");
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //如果把这行注释掉的话，就会直接输出
$result = curl_exec($ch);
curl_close($ch);

echo $result;