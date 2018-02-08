<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

include_once("config.php");

$app->get("/messages",  function ($request, $response, $args) {
    $db = new PDO(DB_HOST, DB_USER, DB_PASS);
    $query = $db->prepare("SELECT * FROM Messages ORDER BY CreationDate DESC");
    if(!$query->execute()){
        return $response->withStatus(500)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode(array("message"=>"Internal server error"), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    };
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode($result, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
});
$app->post('/messages', function (Request $request, Response $response, array $args) {
    $body = $request->getParsedBody() ?: [];
    if(!isset($body['text'])) return $response->withStatus(400)->withHeader("Content-Type", "application/json")->write(json_encode(array("message" => "Wrong parameters, use only text"), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    $db = new PDO(DB_HOST, DB_USER, DB_PASS);
    $query = $db->prepare("INSERT INTO Messages (Text) VALUES (:text)");
    $query->bindParam(":text",$body['text']);
    if(!$query->execute()){
        return $response->withStatus(500)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode(array("message"=>"Internal server error"), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    };

    return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode(array("succes"=>true), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
});
