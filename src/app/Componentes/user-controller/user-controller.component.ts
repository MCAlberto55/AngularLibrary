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
  username: string = 'johnd';
  password: string = 'm38rmF$';
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
      'logeando con usuario ' + this.username + ' y contraseña ' + this.password
    );

    this.api.logIn(this.username, this.password).subscribe((res) => {
      console.log('respuesta: ' + JSON.stringify({ res }));
      this.token = res;
      this.addTokenToLocal(JSON.stringify(this.token));
      this.isLoading = false;
    });
    //this.backToProducts();
  }

  backToProducts() {
    window.location.href = '';
  }

  addTokenToLocal(token: string) {
    localStorage.setItem('UserToken', token);
    console.log('sesion iniciada, token: ' + localStorage.getItem('UserToken'));
  }
}
