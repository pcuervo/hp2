<?php 
	session_start();
    $id = $_GET['id'];
	if(empty($id)) 
		header('Location: login.html ');
	else {
?>
<!doctype html>
	<head>
		<meta charset="utf-8">
		<title>HP Indigo</title>
		<link rel="stylesheet" href="registro.css">
		<link rel="shortcut icon" href="images/favicon.ico">
		<meta name="description" content="">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="cleartype" content="on">
		<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	</head>

	<body>
		<!--[if lt IE 9]>
			<p class="chromeframe">Estás usando una versión <strong>vieja</strong> de tu explorador. Por favor <a href="http://browsehappy.com/" target="_blank"> actualiza tu explorador</a> para tener una experiencia completa.</p>
		<![endif]-->
		<div class="container">

			<header>

				<div class="width clearfix">

                    <div class="columna c-7 medium-6 small-12">
                        <h1>HP Indigo Digital Press</h1>
                    </div>

                    <img class="columna c-2 medium-3 small-4 right" src="images/hp_logo.png" alt="">
                </div><!-- width clearfix -->

			</header>

			<div class="main">

				<div class="width clearfix">

					<div class="renglon clearfix">

						<div class="columna c-10 medium-12 center">
							<h3>Selecciona el evento</h3>
							<h4>Consulta de registrados al evento</h4>

							<br />

							<div class="columna c-3 medium-6">
								<a href="consulta.php?evento=agc&id=<?php echo $id ?>" class="boton columna c-12">AGC Digital</a>
							</div><!-- columna c-12 -->

							<div class="columna c-3 medium-6">
								<a href="consulta.php?evento=acoban&id=<?php echo $id ?>" class="boton columna c-12">Acoban</a>
							</div><!-- columna c-12 -->

							<div class="columna c-3 medium-6">
								<a href="consulta.php?evento=ametiq&id=<?php echo $id ?>" class="boton columna c-12">Ametiq</a>
							</div><!-- columna c-12 -->

							<div class="columna c-3 medium-6">
								<a href="consulta.php?evento=canagraf&id=<?php echo $id ?>" class="boton columna c-12">Canagraf</a>
							</div><!-- columna c-12 -->

						</div><!-- columna c-6 -->
					</div>

				</div><!-- width clearfix -->

			</div><!-- main -->

		</div><!-- container -->

		<footer>

		</footer>

	</body>

	<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
    
    <script>
		//alert("val="+logged);
		//var logged = getURLParameter("logged");
		//alert("val="+logged);
	</script>
</html>
<?php } ?>
