<?php
include 'db.php';

$task = $_POST['task'];
$deadline = $_POST['deadline'];

mysqli_query($conn,
"INSERT INTO Task (task_name, deadline, status)
 VALUES ('$task', '$deadline', 'Pending')");
?>