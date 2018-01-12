var svg = "http://www.w3.org/2000/svg";

function creaCuadrado(id,tamaño) {
    var cuadrado = document.createElementNS(svg,"rect");
    cuadrado.setAttributeNS(null,"id",id);
    cuadrado.setAttributeNS(null,"width",tamaño);
    cuadrado.setAttributeNS(null,"height",tamaño);
    cuadrado.setAttributeNS(null,"fill",'blue');
    cuadrado.setAttributeNS(null,"stroke","none");
    document.getElementById("mySVG").appendChild(cuadrado);
}

function otracosa() {
    var cuadrado3 = document.getElementById("rectangulo");
    setInterval(animaRectangulo,500)

}

function animaRectangulo() {
    var cuadrado2 = document.getElementById("rectangulo");
    if (cuadrado2.getAttribute("width") == 350){
        clearInterval()
    }
    for(let i = 0; i<350;i++){
        console.log(cuadrado2.getAttribute("width"));
        if(cuadrado2.getAttribute("width") < 350){
            cuadrado2.setAttributeNS(null,"width",cuadrado2.getAttribute("width")+1);
        } else {
            cuadrado2.setAttributeNS(null,"width",350)
        }
    }
}



/*function intervalo() {
    setInterval(animaRectangulo,5)
}*/