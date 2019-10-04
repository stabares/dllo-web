<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/./vendor/autoload.php';

// Instantiate App
$app = AppFactory::create();

// Add error middleware
$app->addErrorMiddleware(true, true, true);

//End point que indica la raiz donde indica que el API esta corriendo.
$app->get("/", function (Request $request, Response $response) {
    $response->getBody()->write("El API esta corriendo");
    return $response;
});

$app->get("/hello", function (Request $request, Response $response) {
    $response->getBody()->write("Hello World");
    return $response;
});

//End point con parametros
$app->get("/hello/{nombre}/{apellido}", function (Request $request, Response $response) {
    $nombre = $request->getAttribute("nombre"); //getAtribute optiene los parametros
    $apellido = $request->getAttribute("apellido");
    $response->getBody()->write("Hola " . $nombre ." ". $apellido);
    return $response;
});

require_once "routes/routes.php";

$app->run();