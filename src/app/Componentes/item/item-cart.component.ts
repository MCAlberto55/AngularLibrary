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
  @Input() busqueda: string = ' ';
  @Input() encryptedUserId: string = '';
  librosFiltrados: any[];
  alerts: string[];
  logged: boolean = false;
  @Input() inicial: number;

  constructor(private api: AddToCartService) {}

  ngOnChanges() {
    console.log('a ver aki');
    console.log(this.libros);
    console.log('cambio notificado: ' + this.busqueda);

    this.librosFiltrados = this.actualizarBusqueda(this.busqueda, this.libros);
  }

  ngOnInit(): void {
    if (localStorage.getItem('UserToken')) {
      this.logged = true;
    }
  }

  addToCart(item: any[]) {
    if (localStorage.getItem('UserToken')) {
      console.log(item);
      let itemInfo: string;
      itemInfo = JSON.stringify({
        //con back listo, no pasará 1
        userId: 1,
        date: new Date(),
        products: [{ productId: item[5], quantity: 1 }],
      });
      console.log('Agregando al carrito con id de producto ' + item[5]);
      this.api.add(itemInfo).subscribe((res) => {
        console.log(res);
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
  actualizarBusqueda(busqueda: string, libros: any[]) {
    let librosFiltrados: any[];
    librosFiltrados = libros.filter((book) => {
      return book[0].includes(busqueda);
    });

    if (librosFiltrados.length == 0) {
      if (this.inicial != 0) {
        // swal(
        //   '¡No hemos encontrado ese libro!',
        //   'Intenta ingresando otros datos ಥ_ಥ',
        //   'error'
        // );
      }
      console.log('inicial :' + this.inicial);

      return libros;
    } else {
      console.log('Nuevo array: ' + librosFiltrados);
      return librosFiltrados;
    }
  }
}
