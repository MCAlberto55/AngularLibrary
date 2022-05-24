import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../Services/logIn/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-controller',
  templateUrl: './user-controller.component.html',
  styleUrls: ['./user-controller.component.css'],
  providers: [],
})
export class UserControllerComponent implements OnInit {
  correo: string = '';
  password: string = '';
  token: string = '';
  isLoading = false;

  constructor(private api: LogInService, private router: Router) {}

  ngOnInit(): void {
    console.log('?: ' + this.token);
    if (localStorage.getItem('UserToken')) {
      window.location.href = '';
    }
  }

  ingresar() {
    this.isLoading = true;

    console.log(
      'logeando con usuario ' + this.correo + ' y contraseña ' + this.password
    );

    this.api.logIn(this.correo, this.password).subscribe((res) => {
      console.log('respuesta: ' + JSON.stringify({ res }));
      this.token = res.token;
      this.addTokenToLocal(this.token);
      this.isLoading = false;
    });
    this.backToProducts();
  }

  backToProducts() {
    this.router.navigate(['/Products']);
    //window.location.href = '';
  }

  addTokenToLocal(token: string) {
    localStorage.setItem('UserToken', token);
    console.log('sesion iniciada, token: ' + localStorage.getItem('UserToken'));
  }

  validarFormatoCorreo() {
    console.log(this.correo);
    let EMAIL_REGEX =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.correo.match(EMAIL_REGEX)) {
      alert('La dirección de email  es correcta.');
    } else {
      alert('La dirección de email es incorrecta.');
    }
  }

  validarEntradaValida(entrada: string) {
    console.log(this.password);
    let noAceptados = /^[A-Za-z0-9\s]+$/g;
    if (noAceptados.test(entrada)) {
      alert('La cadena es válida');
    } else {
      alert('La cadena contiene caracteres especiales');
    }
  }
}
