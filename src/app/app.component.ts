import { Component, OnInit } from '@angular/core';
import { GetUserInfoService } from './Services/getUserInfo/get-user-info.service';

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

  constructor(private userInfo: GetUserInfoService) {}

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
