import { Component, OnInit } from '@angular/core';
import {BusquedaUsuarioService} from '../busqueda-usuario.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor(private route: ActivatedRoute, private PeticionAjax: BusquedaUsuarioService) { }

  ngOnInit() {
  }

}
