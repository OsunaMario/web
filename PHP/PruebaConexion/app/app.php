<?php
	
	ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    if (!isset($_SESSION)) {
    	session_start();
    }

    if (!isset($_SESSION['token'])) {
    	# code...
    	$_SESSION['token'] = md5(uniqid(mt_rand(),true));
    }

    if (!defined("BASE_PATH")) {
    	# code...
    	define("BASE_PATH", "http://localhost/GitHub/web/PHP/PruebaConexion/");
    }
?>