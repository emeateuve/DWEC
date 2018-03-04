function recibeCadena(cadena) {
    var arrayMayusculas = [];
    var arrayMinusculas = [];

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == cadena[i].toUpperCase()) {
            arrayMayusculas.push(i)
        }
        if (cadena[i] == cadena[i].toLowerCase()) {
            arrayMinusculas.push(i)
        }
    }
    console.log('Hay ' + arrayMinusculas.length + ' letras minúsculas');
    console.log('Hay ' + arrayMayusculas.length + ' letras mayúsculas');
}

// recibeCadena('AAAaaAAAaaaaa');

function numeroCaracter(cadena, caracter) {
    var numeroRepetidas = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() == caracter.toLowerCase()) {
            numeroRepetidas++;
        }
    }
    console.log('Se repite la letra', caracter.toUpperCase(), numeroRepetidas, 'veces')
}

// numeroCaracter('Hey muy buenas a todos', 'a')
