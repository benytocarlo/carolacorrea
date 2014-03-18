<?php
require_once __DIR__ . '/TwitterOAuth/TwitterOAuth.php';
require_once __DIR__ . '/TwitterOAuth/Exception/TwitterException.php';


use TwitterOAuth\TwitterOAuth;

date_default_timezone_set('UTC');


/**
 * Array with the OAuth tokens provided by Twitter when you create application
 *
 * output_format - Optional - Values: text|json|array|object - Default: object
 */
$config = array(
    'consumer_key' => '5XRz1nHqS9wzawAv7uworw',
    'consumer_secret' => 'EtZbpxo9fMLr2WzQZyRHtolEhvCbSgtWFkDWjRKcmY',
    'oauth_token' => '2363138167-78cVz7vdtzicuonxjSlWCsZOaRppmSsZ03V1vrL',
    'oauth_token_secret' => 'dQsGz6aHboNcSdG0JAgvoBPN0X4KXArlYJEJCacSXAUCd',
    'output_format' => 'object');


$tw = new TwitterOAuth($config);

/**
 * Creates a new list for the authenticated user
 * https://dev.twitter.com/docs/api/1.1/post/lists/create
 */
$params = array(
    'name' => 'TwOAuth',
    'mode' => 'private',
    'description' => 'Test List',
);

/**
 * Send a POST call with set parameters
 */
//$response = $tw->post('lists/create', $params);

//var_dump($response);

$parametros = array(
    'count' => '1',
    'include_entities' => 'false',
	'skip_status' => 't'
);


$response = $tw->get('direct_messages',$parametros);
var_dump($response);


foreach($response as $respuesta){
	//print_r($respuesta);
	$resultado = strpos($respuesta->text, "#dolar");
	if($resultado !== FALSE){
		$data = file_get_contents("http://si3.bcentral.cl/indicadoresvalores/secure/indicadoresvalores.aspx");
		preg_match_all ('/<span id="RptListado_ctl03_lbl_valo">([^`]*?)<\/span>/', $data, $matches);
		$preciodolar = $matches[1][0];
		echo $preciodolar;
	    $parametros = array("text" => "El precio del dolar del dia de hoy es: $$preciodolar. Atte. Banco", "screen_name" => $respuesta->sender_screen_name);
		$response = $tw->post('direct_messages/new', $parametros);
		echo "mensaje enviado";
	}
	
	$resultado = strpos($respuesta->text, "#saldoclaro");
	if($resultado !== FALSE){
	    $parametros = array("text" => "Tu saldo actual es de: $1.502 pesos. Atte. Telco", "screen_name" => $respuesta->sender_screen_name);
		$response = $tw->post('direct_messages/new', $parametros);
		echo "mensaje enviado";
	}
	
	$resultado = strpos($respuesta->text, "#fechapago");
	if($resultado !== FALSE){
	    $parametros = array("text" => "Tu próxima fecha de Facturación es : 05 Abril 2014. Atte. Telco", "screen_name" => $respuesta->sender_screen_name);
		$response = $tw->post('direct_messages/new', $parametros);
		echo "mensaje enviado";
	}
	
	$resultado = strpos($respuesta->text, "#kmlanpass");
	if($resultado !== FALSE){
	    $parametros = array("text" => "Tus Kilometros LANPASS acumulados son 25.310Km. Atte Aerolinea", "screen_name" => $respuesta->sender_screen_name);
		$response = $tw->post('direct_messages/new', $parametros);
		echo "mensaje enviado";
	}

	
	$resultado = strpos($respuesta->text, "#puntosclaroclub");
	if($resultado !== FALSE){
	    $parametros = array("text" => "Tus Puntos Claro Club acumulados son: 3235. Atte Telco Beneficios", "screen_name" => $respuesta->sender_screen_name);
		$response = $tw->post('direct_messages/new', $parametros);
		echo "mensaje enviado";
	}
	
	$resultado = strpos($respuesta->text, "#horozcopo #tauro");
	if($resultado !== FALSE){
	    $parametros = array("text" => "Tauro: Los amigos o compañeros te van a dar una sorpresa, disfruta de ella porque será muy agradable. Atte Marca Mujeres", "screen_name" => $respuesta->sender_screen_name);
		$response = $tw->post('direct_messages/new', $parametros);
		echo "mensaje enviado";
	}
	
}
?>