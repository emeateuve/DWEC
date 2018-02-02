import {Component, OnInit} from '@angular/core';
import {BusquedaUsuarioService} from '../busqueda-usuario.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private id: any;
  private juegos: any;
  private idJuego: any;
  textoJuego = '';
  nuevoarray = [];

  constructor(private route: ActivatedRoute, private PeticionAjax: BusquedaUsuarioService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['juegensiyo'];
      this.loadData();
    });
  }

  loadData() {
    this.PeticionAjax.cargarJuegos().subscribe(data => {
      console.log(data);
      this.juegos = data;
      this.nuevoarray = this.juegos.applist.apps;
      console.log('entra')
      console.log('texto juego: ' + this.textoJuego)
    });
    this.PeticionAjax.busquedaJuego(this.idJuego);
  }

  buscaJuegaso() {
    console.log('texto: ' + this.textoJuego);
    for (let i = 0; i < this.nuevoarray.length; i++) {
      if (this.juegos.applist.apps[i].name === this.textoJuego) {
        this.idJuego = this.juegos.applist.apps[i].appid;
        console.log(this.idJuego);
      }
    }
  }

}
