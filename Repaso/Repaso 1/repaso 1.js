// Primer repaso
var arrayNumeros = [10,20,30];
function max(array) {
    console.log(Math.max(array[0],array[1],array[2]));
}
// max(arrayNumeros);
var arrayContatos = [];
class Agenda {
    constructor(nombre,direccion,telefono,email){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.arrayContactos = arrayContatos;
    }


    introducirContacto(){
        var nuevocontacto = {nombre: this.nombre,
                        direccion: this.direccion,
                        telefono:this.telefono,
                        email:this.email};
        this.arrayContactos.push(nuevocontacto);
    }

    mostrarContacto(nombre){
        for (let i = 0; i < this.arrayContactos.length; i++){
            if(nombre == this.arrayContactos[i].nombre){
                console.log(this.arrayContactos[i])
            }
        }
    }

    mostrarTodos(){
        for (let i = 0; i < this.arrayContactos.length; i++){
            console.log(this.arrayContactos[i]);
        }
    }
}

// var josele = new Agenda('Jose','calle del jose', '619619619', 'josele@gmail.com');
// var migue = new Agenda('Migue','calle del Migue', '666666666', 'migue@gmail.com');
// var antonio = new Agenda('Antonio','calle del Antonio', '654654654', 'antonio@gmail.com');
// var pedro = new Agenda('Pedro','calle del Pedro', '621621621', 'pedro@gmail.com');

// josele.introducirContacto();
// migue.introducirContacto();
// antonio.introducirContacto();
// pedro.introducirContacto();
//
// pedro.mostrarContacto('Migue');
// pedro.mostrarTodos();