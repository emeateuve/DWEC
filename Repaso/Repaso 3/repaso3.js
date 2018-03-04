// Ejercicios de DOM

function crearPagina() {
    var cajaColores = document.getElementById('cajaColores');
    var cuerpo = document.getElementById('cuerpo');

    var arrayColores = ['blue','pink','yellow','red'];
    cajaColores.style.border = '1px solid black';

    for (let i = 0; i < arrayColores.length; i++){
        let nuevodiv = document.createElement('div');
        nuevodiv.id = i
        nuevodiv.style.height = '50px';
        nuevodiv.style.width = '50px';
        nuevodiv.style.display = 'inline-block';
        nuevodiv.style.background = arrayColores[i];
        cajaColores.appendChild(nuevodiv);
    }






}