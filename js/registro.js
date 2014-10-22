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
        $('input[type="submit"]').val('Procesando...');
        $.ajax({
            type:       "POST",
            url:        "php/RegistraInfo.php", 
            data:       $( "form" ).serialize(),
            success:    function(data){
                console.log(data);
                var data_json = $.parseJSON(data);
                alert("Gracias por registrarte " + data_json.nombre);
                if(data_json.evento == 'canagraf')
                    window.location = "canagraf.html";
                else if(data_json.evento == 'ametiq')
                    window.location = "ametiq.html";
                else if(data_json.evento == 'acoban')
                    window.location = "acoban.html";
                else
                    window.location = "registro.html";
            }
        });
	}// enviarFormaAJAX


})(jQuery);