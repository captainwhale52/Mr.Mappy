<?php
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    
    require('database.php');	
    function getConnection() {
        $db = new database;
        $dbhost = $db->host;
        $dbuser = $db->username;
        $dbpass = $db->password; 
        $dbname = $db->db_name;
        $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbh;
    }

    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            read();
            break;
    }
    
    function read() {
        $sql = "SELECT * FROM `mp_item` WHERE (`lat` BETWEEN :south AND :north) AND (`lng` BETWEEN :west AND :east)"; // for fetching only item inside of boundary of map
        $sql = "SELECT * FROM `mp_item`";                                                                             // for fetching all items
        $data = json_decode(file_get_contents('php://input'));
        $params = null;
        if ($data != null) {
            $params = array(
                "north" => $data->{'north'},
                "south" => $data->{'south'},
                "west" => $data->{'west'},
                "east" => $data->{'east'},
            );
        } else {
            $params = array(
                "north" => $_GET['north'],
                "south" => $_GET['south'],
                "west" => $_GET['west'],
                "east" => $_GET['east'],
            );
        }
        
        try {
            $pdo = getConnection();
            $stmt = $pdo->prepare($sql);
            $stmt->execute($params);
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);
            $pdo = null;
            echo json_encode($result);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }
?>