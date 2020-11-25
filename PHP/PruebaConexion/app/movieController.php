<?php

if (!isset($_SESSION)) {
	session_start();
}
include "connectionController.php";

if (isset($_POST['action'])) {
	
	$moviesController = new moviesController();

	switch ($_POST['action']) {
		case 'store':

			$title = strip_tags($_POST['title']);
			$description = strip_tags($_POST['description']);
			$minutes = strip_tags($_POST['minutes']);
			$clasification = strip_tags($_POST['clasification']);
			$categoryId = strip_tags($_POST['categoryId']);
			

			$moviesController->store($name,$description,$monites,$classification,$categoryId);

		break;
}

class moviesController
{

	public function get()
	{
		$conn = connect();
		if ($conn->connect_error==false) {

			$query = "select * from movies";
			$prepared_query = $conn->prepare($query);
			$prepared_query->execute();

			$results = $prepared_query->get_result();
			$movies = $results->fetch_all(MYSQLI_ASSOC);

			if (count($movies)>0) {
				return $movies;
			}else
				return array();

		}else
			return array();
	}

	public function store($title,$description,$minutes,$clasification,$categoryId)
	{
		$conn = connect();
		if ($conn->connect_error==false) {

			if ($title!="" && $description!="" && $minutes!="" && $clasification!="" && $categoryId!="") {

				$query = "insert into movies (title,description,minutes,clasification,categoryId) values(?,?,?)";
				$prepared_query = $conn->prepare($query);
				$prepared_query->bind_param('sss',$name,$description,$status);
				if ($prepared_query->execute()) {

					$_SESSION['success'] = "el registro se ha guardado correctamente";

					header("Location:". $_SERVER['HTTP_REFERER'] );

				}else{

					$_SESSION['error'] = 'verifique los datos envíados';

					header("Location:". $_SERVER['HTTP_REFERER'] );
				}

			}else{

				$_SESSION['error'] = 'verifique la información del formulario';

				header("Location:". $_SERVER['HTTP_REFERER'] );
			}

		}else{

			$_SESSION['error'] = 'verifique la conexión a la base de datos';

			header("Location:". $_SERVER['HTTP_REFERER'] );
		}
	}
}