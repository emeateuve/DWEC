import {Component, OnInit} from '@angular/core';
import {BusquedaUsuarioService} from "../../busqueda-usuario.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: any;
  nivelUsuario: any;

  arrayUsuarios = [];

  arrayIds = [
    '76561198032558274',
    '76561198135938575',
    '76561198080185520',
    '76561198121101795'
  ];

  textoInput = '';

  constructor(private route: ActivatedRoute, private PeticionAjax: BusquedaUsuarioService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.arrayIds.length + 1; i++) {
      this.PeticionAjax.busquedaPorID(this.arrayIds[i]).subscribe(user => {
        this.usuario = user.response.players[0];
        this.arrayUsuarios.push({
          nombre: this.usuario.personaname,
          steamid: this.usuario.steamid,
          avatar: this.usuario.avatarfull,
          pais: this.usuario.loccountrycode
        });
      })

    }
  }

  cogeSteamLevel(id) {
    this.PeticionAjax.getSteamLevel(id).subscribe(nivel => {

    })
  }

}
