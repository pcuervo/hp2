(function($){

	"use strict";

	$(function(){

		$('#forma-registro').validate({
			submitHandler: function(){
				enviarFormaAJAX();
			} 
		});	

	});

	function enviarFormaAJAX(){
		$('form').submit(function(e){
            e.preventDefault();
            $.ajax({
                type:       "POST",
                url:        "php/RegistraInfo.php", 
                data:       $( "form" ).serialize(),
                success:    function(data){
                    var data_json = $.parseJSON(data);
                    alert("Gracias por registrarte " + data_json.nombre);
                    window.location = "registro.html";
                }
            });
        });
	}

})(jQuery);