<?php

$conn = new mysqli('localhost', 'root', '', 'think_list');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "select * from nice_a where id = 5";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo " id: " . $row["id"] . " - title: " . $row["title"] . " - content: " . $row["content"] . "\n";
        var_dump($row["content"]);
        var_dump(json_decode($row["content"]));
    }
} else {
    echo "0 results";
}
$conn->close();
