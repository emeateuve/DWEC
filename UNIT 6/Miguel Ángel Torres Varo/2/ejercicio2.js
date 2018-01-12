function creaEnlace(url,texto,nodo) {
    var nuevoenlace = document.createElement("a");
    nuevoenlace.setAttribute("href", url);
    nuevotexto = document.createTextNode(texto);
    nuevoenlace.appendChild(nuevotexto);
    placeholder = document.getElementById(nodo);
    placeholder.appendChild(nuevoenlace);
}

