<?php

$start = 88239;
$end = 88278;

echo "start create array \n";
$records = [];
for ($i = $start; $i <= $end; ++$i) {
    $records[] = array(
        'id' => '0' . $i,
    );
}
var_dump($records);
echo "end create array \n";