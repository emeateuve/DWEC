import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  arrayFondos = [
    '/assets/2.jpg',
    '/assets/3.jpg',
    '/assets/4.jpg',
    '/assets/background.jpg'
  ];

  posicionFondo = 0;
  fondoActual = '';
  ngOnInit() {

  }

  cambiaFondo() {
    if (this.posicionFondo >= this.arrayFondos.length + 1) {
      this.posicionFondo = 0;
    } else {
      this.fondoActual = this.arrayFondos[this.posicionFondo];
      this.posicionFondo += 1;

    }
  }


}
