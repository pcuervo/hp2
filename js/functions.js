/****************************************
 Proyecto:             HP Indigo
 Autores:              Raúl Z y Miguel C
 Cliente:              Litobel
 Última actualización: 18/10/2013
*****************************************/

$( document ).ready(function() {
	// GENERAL
	ajustarAlturaMenu();
	prevenirSalto();

	// SEGMENTOS
	var menuIzq = document.getElementById("menu_segmentos");
	// mostrar por default pestaña "aplicaciones"
	muestraInfo("aplicaciones");
	// detecta que opción del menú izquierdo fue "clickeada" y cambia la info
	if ( menuIzq != null )
		menuIzq.addEventListener("click", cambiaTab, false);


	/**********************
	****** FUNCIONES ******
	***********************/
	function prevenirSalto() {
	// 	Prevenir salto al inicio de la página al dar click en <a href="#">
		$("a").click(function(e) {
			if(($(this).attr("href")) == "#")
				e.preventDefault();
		});
	} // prevenirSalto
	function ajustarAlturaMenu() {
	// Ajustar altura de menú derecho al cambiar tamaño de pantalla
		var papa           		= $('.menu'),
		content        		= $('.content'),
		main_content 		= $('.main_content'),
		altura_main_content = $('.main_content').height(),
		menu           		= $('#menu_segmentos ul'),
		menu_li        		= $('#menu_segmentos ul li'),
		menu_li_a      		= $('#menu_segmentos ul li a'),
		menu_vertical       = $('.menu-vertical'),
		altura_content 		= ( $('.menu-vertical li').height() * 5 ) + 5,
		altura_papa    		= papa.height(),
		altura_menu    		= altura_papa - ( $('.descripcion').height() + 40 );

		menu.css('height',altura_menu);
		content.css('height',altura_content);
		main_content.css('height',altura_main_content);

		var altura_menu_li = menu_li.height() + 'px';
		menu_li_a.css('line-height', altura_menu_li);

		$(window).resize(function(){
			altura_papa    = papa.height(),
			altura_content = ( $('.menu-vertical li').height() * 5 ) + 5,
			altura_menu    = altura_papa -  ( $('.descripcion').height() + 40 );
			console.log(altura_papa);

			menu.css('height',altura_menu);
			content.css('height',altura_content);

			altura_menu_li = menu_li.height() + 'px';
			menu_li_a.css('line-height', altura_menu_li);

			if(menu_vertical.css("display") == "none")
				content.css('height', "300px");
		 	else
				content.css('height',altura_content);
		});
	} // ajustarAlturaMenu
	function resetInfo() {
	// Esconde la info y le quita el estado de activo al menu
		var ap = document.getElementById("aplicaciones");
		if ( ap != null ){
			ap.style.display = "none";
			var apLink = document.getElementById("aplicacionesLink");
			apLink.className = "";
		}
		var so = document.getElementById("soluciones");
		if ( so != null ){
			so.style.display = "none";
			var soLink = document.getElementById("solucionesLink");
			soLink.className = "";
		}
		var te = document.getElementById("tendencias");
		if ( te != null ){
			te.style.display = "none";
			teLink = document.getElementById("tendenciasLink");
			teLink.className = "";
		}
		var vi = document.getElementById("videos");
		if ( vi != null ){
			vi.style.display = "none";
			viLink = document.getElementById("videosLink");
			viLink.className = "";
		}
	} // resetInfo
	function muestraInfo(id){
	// resetea la info y muestra la pestaña correspondiente al ID
		resetInfo();
		e = document.getElementById(id);
		l = document.getElementById(id + "Link");
		if ( e != null ){
			e.style.display = "block";
		}
		if ( l != null ){
			l.className = "activo";
		}
	} // muestraInfo
	function cambiaTab(e){
	// activa y muestra la info de la opcion seleccionada
		var id = e.target.id;
		id = id.replace("Link", "");
		muestraInfo(id);
	} // cambiaTab
});
