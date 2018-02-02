import {Injectable} from '@angular/core';
/*import {Subject} from 'rxjs/Subject';*/
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BusquedaUsuarioService {
  constructor(private http: HttpClient) {
  }

  busquedaPorID(id = '{{textoInput}}'): Observable<any> {
    return this.http.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4E17224BCF109E7447FB937A6BC1916A&steamids=' + id);
  }

  busquedaPorNombre(nombre = '{{textoInput}}'): Observable<any> {
    return this.http.get('http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=4E17224BCF109E7447FB937A6BC1916A&vanityurl=' + nombre);
  }

  cargarJuegos(): Observable<any> {
    return this.http.get('http://api.steampowered.com/ISteamApps/GetAppList/v2');
  }

  busquedaJuego(idJuego): Observable<any> {
    return this.http.get('http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=4E17224BCF109E7447FB937A6BC1916A&appid=' + idJuego);
  }

  getSteamLevel(id = '{{textoInput}}'): Observable<any> {
    return this.http.get(' http://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=4E17224BCF109E7447FB937A6BC1916A&steamid=' + id);
  }

  cuantosJuegosTieneMiColega(id = '{{textoInput}}'): Observable<any> {
    return this.http.get(' http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4E17224BCF109E7447FB937A6BC1916A&steamid=' + id + '&format=json');
  }

  estadisticasJugadorCSGO(id = '{{textoInput}}'): Observable<any> {
    return this.http.get(' http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=4E17224BCF109E7447FB937A6BC1916A&steamid=' + id);
  }

  estadisticasJugadorRUST(id = '{{textoInput}}'): Observable<any> {
    return this.http.get(' http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=252490&key=4E17224BCF109E7447FB937A6BC1916A&steamid=' + id);
  }

  estadisticasJugadorPAYDAY2(id = '{{textoInput}}'): Observable<any> {
    return this.http.get(' http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=218620&key=4E17224BCF109E7447FB937A6BC1916A&steamid=' + id);
  }

  ultimosJuegosJugados(id = '{{textoInput}}'): Observable<any> {
    return this.http.get(' http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=4E17224BCF109E7447FB937A6BC1916A&steamid=' + id + '&format=json');
  }
}
