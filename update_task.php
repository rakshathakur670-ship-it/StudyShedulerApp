<?php
include 'db.php';

$id = $_POST['id'];

mysqli_query($conn,
"UPDATE Task SET status='Completed' WHERE task_id=$id");
?>