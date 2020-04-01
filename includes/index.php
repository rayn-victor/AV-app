<?php
include('functions.php');

if(isset($_GET['getUser'])){
    $user = getUser($pdo);

    echo json_encode($user);
}