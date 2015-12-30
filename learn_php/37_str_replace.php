<?php

$str = "http://www/[uid]/qq.apk";

$str = str_replace("[uid]", "666", $str);

echo $str;