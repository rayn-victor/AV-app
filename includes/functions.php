<?php
    require('connect.php');

    function getUser($conn) {
        $getData = 'SELECT * FROM users';
        $runQuery = $conn->query($getData);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;

    }