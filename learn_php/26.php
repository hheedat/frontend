<?php

//if ("2" > "3") {
//    echo "ok";
//} else {
//    echo "no";
//}

$arr = array(
    'a' => 'aa',
    'b' => 'bb',
    'c' => 'cc'
);

$str_json = json_encode($arr);
//echo $str_json;

$str_json = addslashes($str_json);
var_dump($str_json);


$conn = new mysqli('localhost', 'root', '', 'think_list');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO nice_a (title, content) VALUES (" . "'John'" . ", '" . $str_json . "')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

echo "success";
//
//$arr1 = json_decode($str_json);
//var_dump($arr1);