<?php

$str = "http://www/[uid]/qqqq.apk";

$str = str_replace("[uid]", "666", $str);

echo $str;