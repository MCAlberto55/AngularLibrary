import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  libros: any[] = [];
  mensaje: string = 'KISAWEA';
  busqueda: string = ' ';
  searchValue: string = '';
  userId: string = '';
  userCartId: string = '';
  logged = false;
  title = 'Library';

  constructor() {}

  ngOnChanges() {}

  ngOnInit(): void {
    console.log('REPITO');

    if (localStorage.getItem('UserToken')) {
      this.logged = true;
      console.log('sesion iniciada');
      console.log(localStorage.getItem('UserToken'));
    } else {
      console.log('no hay sesion iniciada');
    }
  }

  actualizarBusqueda() {
    console.log('buscnado: ' + this.searchValue);
    this.busqueda = this.searchValue;
  }
}
