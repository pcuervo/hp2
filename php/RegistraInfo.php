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

	$sqlEmpresa = "INSERT INTO TB_Empresa(F_NomEmpresa, F_RazonSocial, F_RFC) VALUES ('".$empresa."', '".$razon."', '".$rfc."')";
	if (!mysqli_query($con,$sqlEmpresa)){
		die('Error: ' . mysqli_error($con));
	}

	$sqlDireccion = "INSERT INTO TB_Direccion(F_Calle, F_NumExt, F_NumInt, F_Colonia, F_Ciudad, F_MunDel, F_Estado, F_CP) VALUES ('".$calle."', '".$num_ext."', '".$num_int."', '".$colonia."', '".$ciudad."', '".$delMun."', '".$estado."', '".$cp."')";
	if (!mysqli_query($con,$sqlDireccion)){
		die('Error: ' . mysqli_error($con));
	}
	
	echo json_encode(array('nombre' => $nombre));
	
	
	/*
	
	// Regresa el ID del usuario
	$query="SELECT F_IdUsuario FROM TB_Usuario ORDER BY F_IdUsuario DESC LIMIT 1";
	$rUsuario=mysqli_query($con, $query );
	
	if($data = mysqli_fetch_array($rUsuario)) {
		$idUsuario = $data[0];
	}
	// destinatario
	$para  = $correo;
	// subject
	$folio = intval($idUsuario) + 50;
	$titulo = '#'.$folio.' Gracias '.$nombre.' por registrarte en el BrandLabel Etimex';

// message
	$mensaje = '
	<html>
	<head>
	  	<title>Etimex</title>
	</head>
	<body>
		  <p>Número de registro: '.$folio.'</p>
		  <p>Hola '.$nombre.',</p>
		  <p>Se han registrado correctamente tus datos para asistir al evento Brand Label Etimex el Martes 18 de Marzo a las 8:30am en Cintermex en Monterrey.<p>
		  <p>Por favor presenta este correo como confirmación de asistencia el día del evento.</p>
		  <p>Cualquier duda, favor de comunicarse al (81) 8479 0800.</p>
		  <p>¡Te esperamos!</p>
		  <p>Atentamente,</p>
		  <p>El equipo de Etimex y HP Indigo</p>
	</body>
	</html>';

	// Para enviar un correo HTML mail, la cabecera Content-type debe fijarse
	$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
	$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$cabeceras .= 'From: Evento Etimex <info@etimex.com>' . "\r\n";
	$cabeceras .= "Reply-To: guillermo@litobel.com\r\n";

	
	// Mail it
	mail($para, $titulo, $mensaje, $cabeceras);
	*/

	
?>