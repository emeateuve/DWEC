import {Component, OnInit} from '@angular/core';
import {BusquedaUsuarioService} from '../../busqueda-usuario.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any;
  nivelSteam: any;
  numeroJuegos: any;
  tieneCSGO = false;
  tieneRUST = false;
  tienePAYDAY2 = false;
  arrayJuegos = [];
  ultimosJugados = [];


  statsUsuarioCSGO: any;
  statsUsuarioRUST: any;
  statsUsuarioPAYDAY2: any;

  devuelvePorcentaje: any;
  porcentajeAciertoRUST: any;
  devuelvePorcentajeRUST: any;

  fechaconexion: any;
  fechacreacion: any;

  porcentajeHeadshotCSGO: any;

  arrayPAYDAY2 = [];
  PAYDAY2_nivel: any;
  PAYDAY2_atracos_fallidos: any;
  PAYDAY2_atracos_exito: any;
  PAYDAY2_normal: any;
  PAYDAY2_overkill: any;

  private id: any;

  constructor(private route: ActivatedRoute, private PeticionAjax: BusquedaUsuarioService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['tikensiyo'];
      this.loadData();
    });
  }

  loadData() {
    this.PeticionAjax.busquedaPorID(this.id).subscribe(data => {
      console.log('Usuario devuelto:')
      console.log(data);
      this.usuario = data;
      this.fechaconexion = this.unixToDate(data.response.players[0].lastlogoff);
      this.fechacreacion = this.unixToDate(data.response.players[0].timecreated);
    });
    this.PeticionAjax.getSteamLevel(this.id).subscribe(data => {
      this.nivelSteam = data;
    });
    this.PeticionAjax.cuantosJuegosTieneMiColega(this.id).subscribe(data => {
      this.arrayJuegos = data.response.games;
      this.numeroJuegos = data;
      this.tieneLosJuegos();
    });
    this.PeticionAjax.estadisticasJugadorCSGO(this.id).subscribe(keloke => {
      this.statsUsuarioCSGO = keloke;
      this.devuelvePorcentaje = this.calcularPorcentajeHeadshotCSGO();
    });
    this.PeticionAjax.estadisticasJugadorRUST(this.id).subscribe(keloke => {
      this.statsUsuarioRUST = keloke;
      this.devuelvePorcentajeRUST = this.calcularPorcentajeAciertoRUST();
    });
    this.PeticionAjax.estadisticasJugadorPAYDAY2(this.id).subscribe(keloke => {
      this.statsUsuarioPAYDAY2 = keloke;
      this.arrayPAYDAY2 = this.statsUsuarioPAYDAY2.playerstats.stats;
      this.buscarStatsPAYDAY2();
    });
    this.PeticionAjax.ultimosJuegosJugados(this.id).subscribe(ultimos => {
      for (let i = 0; i < ultimos.response.games.length; i++) {
        this.ultimosJugados.push({
          appid: ultimos.response.games[i].appid,
          nombre: ultimos.response.games[i].name,
          tiempoTotal: Math.round(ultimos.response.games[i].playtime_forever / 60 * 100) / 100,
          tiempo2semanas: Math.round(ultimos.response.games[i].playtime_2weeks / 60 * 100) / 100,
          imagen: 'http://media.steampowered.com/steamcommunity/public/images/apps/' + ultimos.response.games[i].appid + '/' + ultimos.response.games[i].img_logo_url + '.jpg'
        });
      }
    })
  }

  unixToDate(tiempo) {
    const arrayMeses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ];

    const fecha = new Date(tiempo * 1000);

    const segundo = '0' + fecha.getSeconds();
    const minuto = '0' + fecha.getMinutes();
    const hora = fecha.getHours();
    const dia = '0' + fecha.getDate();
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();

    return dia.substr(-2) + '/' + arrayMeses[mes] + '/' + anio + ' - ' + hora + ':' + minuto.substr(-2) + ':' + segundo.substr(-2);
  }

  calcularPorcentajeHeadshotCSGO() {
    this.porcentajeHeadshotCSGO = (this.statsUsuarioCSGO.playerstats.stats[25].value * 100) / this.statsUsuarioCSGO.playerstats.stats[0].value;
    return Math.round(this.porcentajeHeadshotCSGO * 100) / 100;
  }

  calcularPorcentajeAciertoRUST() {
    this.porcentajeAciertoRUST = (this.statsUsuarioRUST.playerstats.stats[9].value * 100) / this.statsUsuarioRUST.playerstats.stats[1].value;
    return Math.round(this.porcentajeAciertoRUST * 100) / 100;
  }

  buscarStatsPAYDAY2() {
    for (let i = 0; i < this.arrayPAYDAY2.length; i++) {
      if (this.arrayPAYDAY2[i].name == 'player_level') {
        this.PAYDAY2_nivel = this.arrayPAYDAY2[i].value;
      }
      if (this.arrayPAYDAY2[i].name == 'heist_failed') {
        this.PAYDAY2_atracos_fallidos = this.arrayPAYDAY2[i].value;
      }
      if (this.arrayPAYDAY2[i].name == 'heist_success') {
        this.PAYDAY2_atracos_exito = this.arrayPAYDAY2[i].value;
      }
      if (this.arrayPAYDAY2[i].name == 'difficulty_normal') {
        this.PAYDAY2_normal = this.arrayPAYDAY2[i].value;
      }
      if (this.arrayPAYDAY2[i].name == 'difficulty_overkill_145') {
        this.PAYDAY2_overkill = this.arrayPAYDAY2[i].value;
      }
    }
  }

  tieneLosJuegos() {
    for (let i = 0; i < this.arrayJuegos.length; i++) {
      if (this.arrayJuegos[i].appid == 730) {
        this.tieneCSGO = true;
      }
      if (this.arrayJuegos[i].appid == 252490) {
        this.tieneRUST = true;
      }
      if (this.arrayJuegos[i].appid == 218620) {
        this.tienePAYDAY2 = true;
      }
    }
  }

}
