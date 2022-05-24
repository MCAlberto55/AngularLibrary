import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
})
export class AppFooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  muyPronto() {
    alert("¡Muy pronto!', '¡ que no panda el cunico ( ͡ᵔ ͜ʖ ͡ᵔ) !");
  }
}
