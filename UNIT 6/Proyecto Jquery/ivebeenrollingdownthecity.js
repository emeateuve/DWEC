var booleano = false
var arrayPelis = [];

function buscar() {
    $('#boton').click(function () {
        if(booleano === false){
            booleano = true
            $.ajax({
                url: "http://www.omdbapi.com/?s=" + $("#pelicula").val()+"&apikey=31b14819",
                success: function(response) {
                    console.log($('#pelicula'))
                    console.log(response)
                    anadir(response)
                    booleano = false
                },
                error: function (fallo) {
                    noexiste(fallo);
                }
            });
            $('#pelicula').val('');
        }
    })
}

function anadir(pelicula) {
    var largoPelis = 0;
    for(i = largoPelis;i < pelicula['Search'].length;i++){
        arrayPelis.push(pelicula['Search'][i].Poster);
        var cuadro = $("<div></div>").css('text-align','center');
        var imagen = $("<img>").attr("src",'' + arrayPelis[i]);
        var titulo = $('<a href="#">'+pelicula['Search'][i].Title+'</a>')
        cuadro.append(imagen);
        cuadro.append(titulo);
        $('#resultado').append(cuadro)
    }
}

function noexiste(fallo) {
    var error_principal = document.getElementById("resultado");
    var error_div = document.createElement("div");
    var error_parrafo = document.createElement("a");
    error_parrafo.innerHTML = "Lo sentimos, la película que estás buscando no existe." + fallo
    error_div.appendChild(error_parrafo);
    error_principal.appendChild(error_div);

}

$(document).ready(function () {
    buscar();
});
/*
MI KEY DE OBDMAPI: 31b14819
*/
