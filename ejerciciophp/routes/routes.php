<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;


$app->get("/suma/{numero1}/{numero2}", function (Request $request, Response $response) {
    $numero1 = $request->getAttribute("numero1"); 
    $numero2 = $request->getAttribute("numero2");
    $suma = $numero1 + $numero2;
    $response->getBody()->write('<h1> Suma '. '</h1>' .'<h2>'.$numero1.' + '. $numero2 . '= '. $suma.'</h2>');
    return $response;
});

