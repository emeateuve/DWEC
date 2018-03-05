import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {ServicioajaxService} from "../servicioajax.service";

@Component({
  selector: 'app-peticion-ajax',
  templateUrl: './peticion-ajax.component.html',
  styleUrls: ['./peticion-ajax.component.css'],
  providers: [ServicioajaxService]
})
export class PeticionAjaxComponent implements OnInit {
  listaNoticias: any;

  constructor(private servicio: ServicioajaxService) {

  }

  ngOnInit() {
    this.servicio.searchV2().subscribe(
      data => {this.listaNoticias=data.page.items; console.log(this.listaNoticias);},
    );


  }
}
