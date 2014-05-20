<?php
	// Conectar base de datos
	header('Content-type: text/html; charset=utf-8');
	ini_set('default_charset', 'utf-8');
	// Conectar bd
	$con=mysqli_connect("db528480544.db.1and1.com","dbo528480544","HP_Registro123","db528480544");

		
    mysql_query("SET character_set_results=utf8", $con);
    mb_internal_encoding('UTF-8');
    mysql_query("set names 'utf8'",$con);

	// Check connection 
	if (mysqli_connect_errno()){
	  echo "Error, no se pudo conectar la base de datos: " . mysqli_connect_error();
	} 

	$usuario = $_POST['usuario'];
	$password = $_POST['password'];
		
	$qUsuario=mysqli_query($con, "SELECT * FROM TB_Admin WHERE F_Usuario = '".$usuario."' AND F_Password = '".$password."'");
	
	if($rUsuario = mysqli_fetch_array($qUsuario)) {
		session_start();
		$_SESSION['usuario'] = $usuario;
		header('Location: ../consulta.php?id='. session_id()) ;	
	} else {
		header('Location: ../login.html');
		
	}

?>