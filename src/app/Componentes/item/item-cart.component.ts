import { Component, OnInit, Input } from '@angular/core';
import { AddToCartService } from '../../Services/addToCart/add-to-cart.service';
//import swal from '../../utils/sweetAlert';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css'],
})
export class ItemCartComponent implements OnInit {
  @Input() libros: any[];
  @Input() test: string;
  @Input() encryptedUserId: string = '';
  alerts: string[];
  logged: boolean = false;
  @Input() inicial: number;

  constructor(private api: AddToCartService) {}

  ngOnChanges() {
    console.log('a ver aki');
    console.log(this.libros);
  }

  ngOnInit(): void {
    if (localStorage.getItem('UserToken')) {
      this.logged = true;
    }
  }

  addToCart(item: any[]) {
    if (localStorage.getItem('UserToken')) {
      console.log(item);

      console.log('Agregando al carrito con id de producto ' + item[4]);

      this.api.add(item[4]).subscribe((res) => {
        console.log('respuesta de add' + res);
        // swal(
        //   '¡Libro agregado al carrito!',
        //   'Gracias por su preferencia owo',
        //   'success'
        // );
      });
    } else {
      // swal(
      //   '¡No puede agregar elementos al carrito!',
      //   'Debe iniciar sesión primero nwn',
      //   'warning'
      // );
    }
  }

  /*Idealmente se haría una petición al backend que retorne los datos que encuentre,
pero con fakeStore no se puede simular una llamada que retorna lo encontrado*/
}
