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
  public juegoDevuelto: any;
  private quecosaotro: any;
  arrayJuegoLogros = [];

  constructor(private route: ActivatedRoute, private PeticionAjax: BusquedaUsuarioService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['juegensiyo'];
      this.loadData();
    });
    this.route.params.subscribe(params => {
      this.id = params['idjuegensiyo'];
      /*this.buscaPorId(this.id);*/
    });
  }

  /*buscaPorId(appid){
    this.PeticionAjax.busquedaPorID(appid).subscribe(juego =>{

    })
  }*/

  loadData() {
    this.PeticionAjax.cargarJuegos().subscribe(data => {
      this.juegos = data;
      this.nuevoarray = this.juegos.applist.apps;
    });
  }

  buscaAppId() {
    for (let i = 0; i < this.nuevoarray.length; i++) {
      if (this.juegos.applist.apps[i].name === this.textoJuego) {
        this.idJuego = this.juegos.applist.apps[i].appid;
        console.log('Nombre: ' + this.textoJuego + ' - Appid: ' + this.idJuego);

        this.PeticionAjax.busquedaJuego(this.idJuego).subscribe(data => {
          this.juegoDevuelto = data;
          for (let a = 0; a < 10; a++) {
            this.arrayJuegoLogros.push({
              nombre: this.juegoDevuelto.game.availableGameStats.achievements[a].displayName,
              descripcion: this.juegoDevuelto.game.availableGameStats.achievements[a].description,
              imagen: this.juegoDevuelto.game.availableGameStats.achievements[a].icon
            });
            console.log(this.arrayJuegoLogros[a].nombre);
          }
        });
      }
    }
  }

}
