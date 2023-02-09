<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


$file = fopen("./grades.json", "r+");
$jsonDoc = "";
while (($buffer = fgets($file, 4096)) !== false) {
    $jsonDoc .= $buffer;
}

$json = json_decode($jsonDoc);

if (isset($_POST["create"]) && $_POST["create"] == "true") {
    $content = json_decode($_POST["content"]);
    array_push($json, $content);
    file_put_contents('./grades.json', json_encode($json, JSON_UNESCAPED_UNICODE));
}

if (isset($_POST["delete"]) && $_POST["delete"] == "true") {
    $id = $_POST["id"];

    foreach ($json as $key => $note) {
        if ($note->id == $id) {
            array_splice($json, $key, 1);
            break;
        }
    }
    file_put_contents('./grades.json', json_encode($json, JSON_UNESCAPED_UNICODE));
}

fclose($file);
