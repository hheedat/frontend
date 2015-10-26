<?php

@ $conn = new mysqli('localhost', 'root', '', 'think_list');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("select * from think_list where title like binary '%好%'");

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo " id: " . $row["id"] . " - title: " . $row["title"] . " - content: " . $row["content"] . "</br>";
    }
} else {
    echo "0 results";
}

$result->free();

$conn->close();