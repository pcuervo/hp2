/****************************************
 Proyecto:             HP Indigo
 Autores:              Raúl Z y Miguel C
 Cliente:              Litobel
 Última actualización: 12/13/2013
*****************************************/

$( document ).ready(function() {
	// GENERAL
	//jsResponsivo();
	//ajustarAlturaMenu();
	prevenirSalto();

	// SEGMENTOS
	var menuIzq = document.getElementById("menu_segmentos");
	if ( menuIzq != null ) {
		muestraInfo("tendencias"); // mostrar por default pestaña "aplicaciones en los segmentos"
		menuIzq.addEventListener("click", cambiaTab, false); // detecta que opción del menú izquierdo fue "clickeada" y cambia la info
	}

	// HISTORIAS DE EXITO
	var menuCasos = $(".panel-historias ul");
	if(menuCasos[0] != null) {
		muestraInfoCasos("caso");
		menuCasos[0].addEventListener("click", cambiaTabCasos, false);
	}

	// PRENSAS
	var menuPrensas = $(".panel-prensas ul");
	if(menuPrensas[0] != null) {
		muestraInfoPrensas("prensa");
		menuPrensas[0].addEventListener("click", cambiaTabPrensas, false);
	}

	var menuPrensa = $(".menu-prensas ul");
	if(menuPrensa[0] != null) {
		muestraInfoPrensa("impresion");
		menuPrensa[0].addEventListener("click", cambiaTabPrensa, false);
	}

	var menuAdicionales = $(".menu-adicionales ul");
	if(menuAdicionales[0] != null) {
		muestraInfoAdicionales("aurasma");
		menuAdicionales[0].addEventListener("click", cambiaTabAdicionales, false);
		console.log('g');
		jQuery('#indigo-env').fitVids();
	}

	var menuHabilitadores = $(".menu-habilitadores ul");
	if(menuHabilitadores[0] != null) {
		muestraInfoHabilitadores("servicio");
		menuHabilitadores[0].addEventListener("click", cambiaTabHabilitadores, false);
	}

	// var timeOut = 3000;
	// window.setInterval(function(){
	// 	timeOut -=1000

	// 	if ( timeOut == -1000 ){
	// 		timeOut = 3000;
	// 	}

	// 	if ( timeOut == 0 ){
	// 		$('.lightbox-container').show();
	// 		console.log('es igual a 0');
	// 	}

	// }, 1000);

	// $('.container').on('click', function(){
	// 	timeOut = 3000;
	// });

	// $('.lightbox-container').on('click', function(){
	// 	$(this).hide();
	// 	timeOut = 3000;
	// });

});


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

	function muestraInfoCasos(id) {
		if(id != "pdf")  {
			resetInfoCasos();
			$(".panel-historias ul li a#" + id).addClass("activo");
		}
		if (id == "caso")
			$(".contenido-caso").css("display", "block");
		else if (id == "video")
			$(".contenido-video").css("display", "block");
		else if (id == "fotos")
			$(".contenido-fotos").css("display", "block");
	} // muestraInfoCasos
	function resetInfoCasos() {
		$(".panel-historias ul li a").removeClass("activo");
		$(".contenido-caso").css("display", "none");
		$(".contenido-video").css("display", "none");
		$(".contenido-fotos").css("display", "none");
	} // resetInfoCasos
	function cambiaTabCasos(e){
	// activa y muestra la info de la opcion seleccionada
		var id = e.target.id;
		muestraInfoCasos(id);
	} // cambiaTabCasos

	function muestraInfoPrensas(id) {
		if(id != "descargar" && id != "video") {
			resetInfoPrensas();
			$(".panel-prensas ul li a#" + id).addClass("activo");
			if (id == "prensa")
				$(".contenido-slider").css("display", "block");
			else if (id == "beneficios")
				$(".contenido-beneficios").css("display", "block");
			else if (id == "datos")
				$(".contenido-datos").css("display", "block");
		}
	} // muestraInfoPrensas
	function resetInfoPrensas() {
		$(".panel-prensas ul li a").removeClass("activo");
		$(".contenido-slider").css("display", "none");
		$(".contenido-beneficios").css("display", "none");
		$(".contenido-datos").css("display", "none");
	} // resetInfoPrensas
	function cambiaTabPrensas(e){
		var id = e.target.id;
		muestraInfoPrensas(id);
	} // cambiaTabCasos

	function muestraInfoPrensa(id) {
		if(id != "herramientas"){
			resetInfoPrensa();
			$("#tb-"+id).css("display", "table");
			$("#"+id).addClass("activo");
		}
	} // muestraInfoPrensas
	function resetInfoPrensa() {
		$(".menu-prensas ul li a").removeClass("activo");
		$("table").css("display", "none");
	} // resetInfoPrensas
	function cambiaTabPrensa(e){
		var id = e.target.id;
		muestraInfoPrensa(id);
	} // cambiaTabCasos

	function muestraInfoAdicionales(id) {
		resetInfoAdicionales();
		$(".seccion-segmento#"+id).css("display", "block");
		$("#"+id).addClass("activo");
	} // muestraInfoPrensas
	function resetInfoAdicionales() {
		$(".menu-adicionales ul li a").removeClass("activo");
		$(".seccion-segmento").css("display", "none");
	} // resetInfoPrensas
	function cambiaTabAdicionales(e){
		var id = e.target.id;
		muestraInfoAdicionales(id);
	} // cambiaTabCasos

	function muestraInfoHabilitadores(id) {
		if(id !== "herramientas") {
			resetInfoHabilitadores();
			$("#"+id).addClass("activo");
			$(".seccion-segmento#"+id).css("display", "block");
		}
	} // muestraInfoPrensas
	function resetInfoHabilitadores() {
		$(".menu-habilitadores ul li a").removeClass("activo");
		$(".seccion-segmento").css("display", "none");
	} // resetInfoPrensas
	function cambiaTabHabilitadores(e){
		var id = e.target.id;
		muestraInfoHabilitadores(id);
	} // cambiaTabCasos

	function slider(idSlider) {
		if(idSlider == null){
			var sl = ".slider";
			var cs = ".control-slider";
		} else {
			var sl = ".slider-" + idSlider;
			var cs = ".control-slider-" + idSlider;
		}
		var numImg = $(sl + " " + cs + " li").length;
		$(sl + " " + cs + " a").click(function(){
			var id = $(this).attr("id");
			if(idSlider == null){
				id = id.replace("control-", "");
			} else {
				id = id.replace("control-", idSlider + "-");
			}
			limpiaControl();
			$(this).addClass("activo");
			limpiaImg();
			$(sl +" img#" + id).addClass("activo");
		});
		$(sl +" .flecha-der").click(function() {
			var id = $(sl +" img.activo").attr("id");
			if(idSlider == null) {
				var activo = $(sl +" img.activo").attr("id");
			} else {
				var activo = id.replace(idSlider + "-", "");
			}
			limpiaImg();
			limpiaControl();
			activo = parseInt(activo) + 1;
			if(activo > numImg) activo = 1;

			if(idSlider == null){
				$(sl +" img#" + activo).addClass("activo");
			} else {
				$(sl +" img#" + idSlider + "-" + activo).addClass("activo");
			}
			$(sl +" .control-slider a#control-" + activo).addClass("activo");
		});
		$(sl +" .flecha-izq").click(function() {
			var id = $(sl +" img.activo").attr("id");
			if(idSlider == null) {
				var activo = $(sl +" img.activo").attr("id");
			} else {
				var activo = id.replace(idSlider + "-", "");
			}
			limpiaImg();
			limpiaControl();
			activo = parseInt(activo) - 1;
			if(activo < 1) activo = numImg;
			if(idSlider == null){
				$(sl +" img#" + activo).addClass("activo");
			} else {
				$(sl +" img#" + idSlider + "-" + activo).addClass("activo");
			}
			$(sl +" .control-slider a#control-" + activo).addClass("activo");
		});

		function limpiaControl() {
			$(sl +" .control-slider a").removeClass("activo");
		}
		function limpiaImg() {
			$(sl +" img").removeClass("activo");
		}
	}

	function sliderVid(idSlider) {
		var sl = ".slider-vid";
		var cs = ".control-slider-vid";
		var numVid = $(sl + " " + cs + " li").length;
		$(sl + " " + cs + " a").click(function(){
			var id = $(this).attr("id");
			id = id.replace("control-vid-", "");
			limpiaControl();
			$(this).addClass("activo");
			limpiaVid();
			$(sl +" .video" + id).addClass("activo");
		});
		$(sl +" .flecha-der-vid").click(function() {
			var id = $(sl +" div.activo").attr("id");
			var activo = $(sl +" div.activo").attr("id");
			limpiaVid();
			limpiaControl();
			activo = parseInt(activo) + 1;
			if(activo > numVid) activo = 1;
			$(sl +" div#" + activo).addClass("activo");
			$(sl +" .control-slider-vid a#control-vid-" + activo).addClass("activo");
		});
		$(sl +" .flecha-izq-vid").click(function() {
			var id = $(sl +" div.activo").attr("id");
			var activo = $(sl +" div.activo").attr("id");
			limpiaVid();
			limpiaControl();
			activo = parseInt(activo) - 1;
			if(activo < 1) activo = numVid;
			$(sl +" div#" + activo).addClass("activo");
			$(sl +" .control-slider-vid a#control-vid-" + activo).addClass("activo");
		});

		function limpiaControl() {
			$(sl +" .control-slider-vid a").removeClass("activo");
		}
		function limpiaVid() {
			$(sl +" .video1").removeClass("activo");
			$(sl +" .video2").removeClass("activo");
		}
	}

	function lightboxVid() {
	    $(".seccion-segmento ul li a").click(function () {
	        esconderVid();
	        var id = $(this).attr("class");
	        $(".lightbox-container video." + id).addClass("activo");
	        $(".lightbox-container").css("display", "block");
	        if (id == "eilat") {
	            $(".lightbox-container h2").text("Eilat");
	        } else if (id == "conference") {
	            $(".lightbox-container h2").text("Conference");
	        } else if (id == "death-sea") {
	            $(".lightbox-container h2").text("The Death Sea");
	        } else if (id == "green-tourism") {
	            $(".lightbox-container h2").text("Green Tourism");
	        } else if (id == "zumba") {
	            $(".lightbox-container h2").text("Green Tourism");
	        } else if (id == "medical-tourism") {
	            $(".lightbox-container h2").text("Medical Tourism in Israel");
	        } else if (id == "land") {
	            $(".lightbox-container h2").text("A Land of Everlasting Promise");
	        } else if (id == "intimate-journey") {
	            $(".lightbox-container h2").text("An Intimate Journey to the Holy Land");
	        } else if (id == "spirit") {
	            $(".lightbox-container h2").text("Spirit of Israel");
	        }
	        $(".lightbox-media a").click(function () {
	            var vid = $(".lightbox-container video." + id);
	            vid[0].pause();
	            $(".lightbox-container").css("display", "none");
	        });
	    });
	}

	function esconderVid() {
	    $(".lightbox-container video").removeClass("activo");
	}

	function lightboxIFrame() {
	    $(".botones-prensa li a#video").click(function () {

	        $(".lightbox-container").css("display", "block");

	        $(".lightbox-media a").click(function () {
	            $(".lightbox-container").css("display", "none");
	        });

	        $('body').animate(
	    		{ scrollTop:0 }, '500'
	    	);
	    });
	}

	function lightboxImg() {
	    $("#aplicaciones ul li a").click(function () {
			var id = $(this).attr("id");

			escondeImgLightbox();

			$(".frame-img img#img-" + id).css("display", "block");
	        var titulo = $(".frame-img img#img-" + id).attr("alt");
			$(".lightbox-media h2").text(titulo);

			$(".lightbox-container").css("display", "block");

	        $(".lightbox-media a").click(function () {
	            $(".lightbox-container").css("display", "none");
	        });



	        $('body').animate(
	    		{ scrollTop:0 }, '500'
	    	);
	    });

		function escondeImgLightbox(){
			$(".frame-img img").css("display", "none");
		}
	}

	//Fitvids
	$(function(){
		if ( $('.video').length > 0 ){
			$('.video').fitVids();
		}
	});


	// API YouTube
	function callPlayer(frame_id, func, args) {
		if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
		var iframe = document.getElementById(frame_id);
		if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
			iframe = iframe.getElementsByTagName('iframe')[0];
		}

		// When the player is not ready yet, add the event to a queue
		// Each frame_id is associated with an own queue.
		// Each queue has three possible states:
		//  undefined = uninitialised / array = queue / 0 = ready
		if (!callPlayer.queue) callPlayer.queue = {};
		var queue = callPlayer.queue[frame_id],
			domReady = document.readyState == 'complete';

		if (domReady && !iframe) {
			// DOM is ready and iframe does not exist. Log a message
			window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
			if (queue) clearInterval(queue.poller);
		} else if (func === 'listening') {
			// Sending the "listener" message to the frame, to request status updates
			if (iframe && iframe.contentWindow) {
				func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
				iframe.contentWindow.postMessage(func, '*');
			}
		} else if (!domReady ||
				   iframe && (!iframe.contentWindow || queue && !queue.ready) ||
				   (!queue || !queue.ready) && typeof func === 'function') {
			if (!queue) queue = callPlayer.queue[frame_id] = [];
			queue.push([func, args]);
			if (!('poller' in queue)) {
				// keep polling until the document and frame is ready
				queue.poller = setInterval(function() {
					callPlayer(frame_id, 'listening');
				}, 250);
				// Add a global "message" event listener, to catch status updates:
				messageEvent(1, function runOnceReady(e) {
						if (!iframe) {
							iframe = document.getElementById(frame_id);
							if (!iframe) return;
							if (iframe.tagName.toUpperCase() != 'IFRAME') {
								iframe = iframe.getElementsByTagName('iframe')[0];
								if (!iframe) return;
							}
						}
					if (e.source === iframe.contentWindow) {
						// Assume that the player is ready if we receive a
						// message from the iframe
						clearInterval(queue.poller);
						queue.ready = true;
						messageEvent(0, runOnceReady);
						// .. and release the queue:
						while (tmp = queue.shift()) {
							callPlayer(frame_id, tmp[0], tmp[1]);
						}
					}
				}, false);
			}
		} else if (iframe && iframe.contentWindow) {
			// When a function is supplied, just call it (like "onYouTubePlayerReady")
			if (func.call) return func();
			// Frame exists, send message
			iframe.contentWindow.postMessage(JSON.stringify({
				"event": "command",
				"func": func,
				"args": args || [],
				"id": frame_id
			}), "*");
		}
		/* IE8 does not support addEventListener... */
		function messageEvent(add, listener) {
			var w3 = add ? window.addEventListener : window.removeEventListener;
			w3 ?
				w3('message', listener, !1)
			:
				(add ? window.attachEvent : window.detachEvent)('onmessage', listener);
		}
	}




