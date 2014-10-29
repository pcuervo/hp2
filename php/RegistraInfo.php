<?php
	// Conectar base de datos
	header('Content-type: text/html; charset=utf-8');
	ini_set('default_charset', 'utf-8');

	$evento = $_POST['evento'];

	// Conectar bd
	if($evento == 'acoban'){
		// base registro acoban 
		$con=mysqli_connect("db537376860.db.1and1.com","dbo537376860","Acob@n_123","db537376860");
	} else if($evento == 'canagraf'){
		// base registro canagraf 
		$con=mysqli_connect("db537376937.db.1and1.com","dbo537376937","C@nagraf_123","db537376937");
		$canal = $_POST['canal'];
	} else if($evento == 'ametiq'){
		// base registro ametiq 
		$con=mysqli_connect("db537376955.db.1and1.com","dbo537376955","Amet!q_123","db537376955");
	} else {
		// base registro AGCDigital
		$con=mysqli_connect("db528480544.db.1and1.com","dbo528480544","HP_Registro123","db528480544");
	}

		
    mysql_query("SET character_set_results=utf8", $con);
    mb_internal_encoding('UTF-8');
    mysql_query("set names 'utf8'",$con);

	// Check connection 
	if (mysqli_connect_errno()){
	  echo "Error, no se pudo conectar la base de datos: " . mysqli_connect_error();
	} 

	mysql_set_charset('utf8',$conn); 
	//ini_set('display_errors', 'On');
	
	// Usuario
	$nombre = $_POST['nombre'];
	$apeP = $_POST['apellido-paterno'];
	$correo = $_POST['correo'];
	$tel = $_POST['telefono'];
	$puesto = $_POST['puesto'];
	// Empresa
	$empresa = $_POST['empresa'];
	$razon = $_POST['razon'];
	$rfc = $_POST['rfc'];

	// Dirección
	$calle = $_POST['calle'];
	$num_ext = $_POST['num-ext'];
	$num_int = $_POST['num-int'];
	$colonia = $_POST['colonia'];
	$delMun = $_POST['del-mun'];
	$ciudad = $_POST['ciudad'];
	$estado = $_POST['estado'];
	$cp = $_POST['cp'];
	
	$sqlUsuario = "INSERT INTO TB_Usuario(F_Nombre, F_ApePat, F_Correo, F_Telefono, F_Puesto) VALUES ('".$nombre."', '".$apeP."', '".$correo."', '".$tel."','".$puesto."')";
	if (!mysqli_query($con,$sqlUsuario)){
		die('Error: ' . mysqli_error($con));
	} 

	if($evento == 'canagraf'){
		$sqlEmpresa = "INSERT INTO TB_Empresa(F_NomEmpresa, F_RazonSocial, F_RFC, F_Canal) VALUES ('".$empresa."', '".$razon."', '".$rfc."', '".$canal."')";
	} else {
		$sqlEmpresa = "INSERT INTO TB_Empresa(F_NomEmpresa, F_RazonSocial, F_RFC) VALUES ('".$empresa."', '".$razon."', '".$rfc."')";
	}
	
	if (!mysqli_query($con,$sqlEmpresa)){
		die('Error: ' . mysqli_error($con));
	}

	$sqlDireccion = "INSERT INTO TB_Direccion(F_Calle, F_NumExt, F_NumInt, F_Colonia, F_Ciudad, F_MunDel, F_Estado, F_CP) VALUES ('".$calle."', '".$num_ext."', '".$num_int."', '".$colonia."', '".$ciudad."', '".$delMun."', '".$estado."', '".$cp."')";
	if (!mysqli_query($con,$sqlDireccion)){
		die('Error: ' . mysqli_error($con));
	}
	
	echo json_encode(array('nombre' => $nombre, 'evento' => $evento));
	
?>