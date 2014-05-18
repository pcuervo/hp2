<?php
	// Conectar base de datos
	header('Content-type: text/html; charset=utf-8');
	ini_set('default_charset', 'utf-8');
	// Conectar bd
	$con=mysqli_connect("localhost","root","root","db515467882");

		
    mysql_query("SET character_set_results=utf8", $con);
    mb_internal_encoding('UTF-8');
    mysql_query("set names 'utf8'",$con);

	// Check connection 
	if (mysqli_connect_errno()){
	  echo "Error, no se pudo conectar la base de datos: " . mysqli_connect_error();
	} 

	$archivo = 'registrados_indigo.csv';
	header("Content-Type: text/csv;charset=UTF-8" );
	
	$handle = fopen($archivo, 'w');
	$encabezado = array('Id', 'Nombre', 'Apellido paterno', 'Correo e.', utf8_decode('Teléfono'), 'Calle', 'Num. Ext.', 'Num. Int.', 'Colonia', 'Ciudad', utf8_decode('Delegación/Municipio'), 'Estado', 'C.P.', 'Empresa');
	fputcsv($handle, $encabezado, ',', '"');
	 
	$sql = mysqli_query($con, 'SELECT * FROM TB_Usuario U INNER JOIN TB_Direccion D ON D.F_IdUsuario = U.F_IdUsuario INNER JOIN TB_Empresa E ON E.F_IdUsuario');
	 
	while($results = mysqli_fetch_array($sql)) {
		$row = array(	
			$folio,		
			utf8_decode($results[1]),
			utf8_decode($results[2]),
			utf8_decode($results[3]),
			utf8_decode($results[4]),
			utf8_decode($results[5]),
			utf8_decode($results[6]),
			utf8_decode($results[7]),
			utf8_decode($results[9]),
			utf8_decode($results[10]),
			utf8_decode($results[11]),
			utf8_decode($results[12]),
			utf8_decode($results[13]),
			utf8_decode($results[14]),
			utf8_decode($results[15]),
			utf8_decode($results[16]),
			utf8_decode($results[18]),
			utf8_decode($results[19]),
			utf8_decode($results[20]),
			utf8_decode($results[22]),
			utf8_decode($results[23]), 
			$masInfo
		);
		
		fputcsv($handle, $row, ',', '"');
	}
	 
	fclose($handle);
	
	header('Location: '.$archivo);

	// Desconectar bd
	mysqli_close($con);
?>