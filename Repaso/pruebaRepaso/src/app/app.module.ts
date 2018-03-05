import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {PeticionAjaxComponent} from './peticion-ajax/peticion-ajax.component';
import {PeticionComponent} from './peticion/peticion.component';
import {ServicioajaxService} from "./servicioajax.service";


const appRoutes: Routes = [
  {path: 'peticionajax', component: PeticionAjaxComponent},
  {path: '', component: PeticionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PeticionAjaxComponent,
    PeticionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [ServicioajaxService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
