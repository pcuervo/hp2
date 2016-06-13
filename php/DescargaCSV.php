<?php
	// Conectar base de datos
	header('Content-type: text/html; charset=utf-8');
	ini_set('default_charset', 'utf-8');
	
	$evento = $_GET['evento'];

	// Conectar bd
	if($evento == 'acoban'){
		// base registro acoban 
		$con=mysqli_connect("db537376860.db.1and1.com","dbo537376860","Acob@n_123","db537376860");
	} else if($evento == 'canagraf'){
		// base registro canagraf 
		$con=mysqli_connect("db537376937.db.1and1.com","dbo537376937","C@nagraf_123","db537376937");
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

	$archivo = 'registrados_hpindigo.csv';
	header("Content-Type: text/csv;charset=UTF-8" );
	
	$handle = fopen($archivo, 'w');
	$encabezado = array('Id', 'Nombre', 'Apellido paterno', 'Correo e.', utf8_decode('Teléfono'), 'Puesto', 'Empresa', utf8_decode('Razón Social'), 'RFC', 'Calle', 'Num. Ext.', 'Num. Int.', 'Colonia', 'Ciudad', utf8_decode('Delegación/Municipio'), 'Estado', 'C.P.', 'Canal de venta');
	fputcsv($handle, $encabezado, ',', '"');
	 
	$sql = mysqli_query($con, 'SELECT U.F_IdUsuario, F_Nombre, F_ApePat, F_Correo, F_Telefono, F_Puesto, F_NomEmpresa, F_RazonSocial, F_RFC, F_Calle, F_NumExt, F_NumInt, F_Colonia, F_Ciudad, F_MunDel, F_Estado, F_CP, F_Canal FROM TB_Usuario U LEFT JOIN TB_Direccion D ON D.F_IdUsuario = U.F_IdUsuario LEFT JOIN TB_Empresa E ON E.F_IdUsuario = U.F_IdUsuario');

	 
	while($results = mysqli_fetch_array($sql)) {
		$row = array(		
			utf8_decode($results[0]),
			utf8_decode($results[1]),
			utf8_decode($results[2]),
			utf8_decode($results[3]),
			utf8_decode($results[4]),
			utf8_decode($results[5]),
			utf8_decode($results[6]),
			utf8_decode($results[7]),
			utf8_decode($results[8]),
			utf8_decode($results[9]),
			utf8_decode($results[10]),
			utf8_decode($results[11]),
			utf8_decode($results[12]),
			utf8_decode($results[13]),
			utf8_decode($results[14]),
			utf8_decode($results[15]),
			utf8_decode($results[16]),
			utf8_decode($results[17])
		);
		
		fputcsv($handle, $row, ',', '"');
	}
	 
	fclose($handle);
	
	header('Location: '.$archivo);

	// Desconectar bd
	mysqli_close($con);
?>