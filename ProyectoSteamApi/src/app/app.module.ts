import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import {BusquedaUsuarioService} from './busqueda-usuario.service';
import {RouterModule, Routes} from '@angular/router';
import {UsuarioComponent} from './main/usuario/usuario.component';
import {InicioComponent} from './main/inicio/inicio.component';
import {OnInit} from '@angular/core';
import {GamesComponent} from './games/games.component';
import { MoreComponent } from './more/more.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'usuario/:tikensiyo', component: UsuarioComponent},
  {path: 'games', component: GamesComponent},
  {path: 'games/:juegensiyo', component: GamesComponent},
  {path: 'games/:idjuegensiyo', component: GamesComponent},
  {path: 'more', component: MoreComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    UsuarioComponent,
    InicioComponent,
    GamesComponent,
    MoreComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [BusquedaUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
