import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../Services/registerUser/register-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userInput = '';
  mailInput = '';
  passWordInput = '';
  repeatPasswordInput = '';
  check = false;

  constructor(private api: RegisterUserService, private router: Router) {}

  ngOnInit(): void {}

  validarFormatoCorreo() {
    console.log(this.mailInput);
    let EMAIL_REGEX =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.mailInput.match(EMAIL_REGEX)) {
      alert('La dirección de email  +  es correcta.');
    } else {
      alert('La dirección de email es incorrecta.');
    }
  }

  validarEntradaValida(entrada: string) {
    console.log(this.userInput);
    let noAceptados = /^[A-Za-z0-9\s]+$/g;
    if (noAceptados.test(entrada)) {
      alert('La cadena es válida');
    } else {
      alert('Cadena con caracteres no válidos');
    }
  }

  deAcuerdo() {
    if (this.check === true) {
      this.check = false;
      alert(':c');
    } else {
      this.check = true;
      alert('wiiii');
    }
  }

  realizarRegistro() {
    if (this.passWordInput === this.repeatPasswordInput) {
      if (this.check == true) {
        let data = {
          name: this.userInput,
          email: this.mailInput,
          password: this.passWordInput,
        };

        this.api.registerUser(data).subscribe((res) => {
          console.log('asd: ' + res);
        });
      } else {
        alert('Acepte la petición de cuidar los libros :c');
      }
    } else {
      alert('Las contraseñas no coinciden!');
    }
    this.router.navigate(['/Products']);
  }
}
