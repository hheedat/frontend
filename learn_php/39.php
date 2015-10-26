<?php

@ $conn = new mysqli('localhost', 'root', '', 'think_list');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("select * from think_list where id = ?");

$stmt->bind_param('i', $userid);

$userid = 14;

$stmt->execute();

$stmt->bind_result($id, $title, $content, $time, $belong, $isuse, $status, $updated_at, $created_at);

while ($stmt->fetch()) {

    echo " id: " . $id . " - title: " . $title . " - content: " . $content . "</br>";

}

$stmt->close();
$conn->close();