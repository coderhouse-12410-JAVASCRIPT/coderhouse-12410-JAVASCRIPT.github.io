//Llamada a la API de provincias

$(document).ready(function(){

    $.getJSON("https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre", function(data){
        $.each(data.provincias, function(indice){
            var option = $("<option>" + data.provincias[indice].nombre + "</option>");
            $("#provincia").append(option);
            
            });
            //console.log(data.provincias);
        });
    });