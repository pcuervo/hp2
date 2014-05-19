<?php
	// Conectar base de datos
	header('Content-type: text/html; charset=utf-8');
	ini_set('default_charset', 'utf-8');
	// Conectar bd
	$con=mysqli_connect("db528480544.db.1and1.com","db528480544","HP_Registro123","db528480544");

		
    mysql_query("SET character_set_results=utf8", $con);
    mb_internal_encoding('UTF-8');
    mysql_query("set names 'utf8'",$con);

	// Check connection 
	if (mysqli_connect_errno()){
	  echo "Error, no se pudo conectar la base de datos: " . mysqli_connect_error();
	} 

	mysql_set_charset('utf8',$conn); 
	//ini_set('display_errors', 'On');

	$query="SELECT F_Nombre, F_ApePat, F_NomEmpresa, F_Telefono, F_Correo FROM TB_Usuario U INNER JOIN TB_Empresa E ON U.F_IdUsuario = E.F_IdUsuario";
	$registros=mysqli_query($con, $query );

	echo "<div class='width clearfix table columna c-12'><div class='renglon clearfix'>
	<div class='span c-2 small-4 text-center'>Nombre</div>
	<div class='span c-2 small-4 text-center'>Apellido Paterno</div>
	<div class='span c-3 small-4 text-center'>Empresa</div>
	<div class='span c-2 small-4 text-center'>Tel.</div>
	<div class='span c-3 small-4 text-center'>Correo</div></div>";

	while($data = mysqli_fetch_array($registros))
	{
		echo "<div class='renglon clearfix'>";
		echo "<div class='span c-2 small-4'>$data[0]</div>";
		echo "<div class='span c-2 small-4'>$data[1]</div>";
		echo "<div class='span c-3 small-4'>$data[2]</div>";
		echo "<div class='span c-2 small-4'>$data[3]</div>";
		echo "<div class='span c-3 small-4'>$data[4]</div>";
		echo "</div>";
	}

	// Desconectar bd
	mysqli_close($con);
?>