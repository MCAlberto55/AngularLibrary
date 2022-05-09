import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
})
export class AppFooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  muyPronto() {
    swal('¡Muy pronto!', '¡ que no panda el cunico ( ͡ᵔ ͜ʖ ͡ᵔ) !', 'info');
  }
}
