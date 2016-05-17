<?php

echo date('d', strtotime(date('Y-m-d', strtotime('-1 day'))));

echo date('d', strtotime("2015-10-30"));

echo date('Ymd', strtotime("2015-10-30") - 6 * 24 * 60 * 60);