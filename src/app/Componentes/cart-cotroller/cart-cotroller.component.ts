import { Component, Input, OnInit } from '@angular/core';
import { GetCartService } from '../../Services/GetCart/get-cart.service';
import { GetSingleBookService } from '../../Services/getASingle/get-single-book.service';
import { ReservacionService } from '../../Services/Reservar/reservacion.service';

@Component({
  selector: 'app-cart-cotroller',
  templateUrl: './cart-cotroller.component.html',
  styleUrls: ['./cart-cotroller.component.css'],
})
export class CartCotrollerComponent implements OnInit {
  numItemsCart = 0;
  private userCartId: string;
  isLoading = false;
  librosCarrito: any[] = [];
  router: any;

  constructor(
    private GetCartService: GetCartService,
    private ReservacionService: ReservacionService,
    private getBookService: GetSingleBookService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.numItemsCart = 0;
    if (!localStorage.getItem('UserToken')) {
      window.location.href = '';
    } else {
      console.log('khe?');
      this.GetCartService.getCart().subscribe((res) => {
        let answer = res.items;
        console.log('respuesta' + res);
        console.log('respuesta' + answer);

        this.cargarLibros(answer);

        this.isLoading = false;
      });
    }
  }

  cargarLibros(answer: any) {
    this.librosCarrito.splice(0, this.librosCarrito.length);
    for (let i = 0; i < answer.length; i++) {
      let quantity = answer[i].quantity;
      this.numItemsCart += quantity;
      let temp = answer[i].book;

      console.log(temp.id);

      let book = [
        temp.title,
        temp.availableQuantity,
        //temp.createdAt,
        temp.description,
        temp.imageUrl,
        quantity,
        temp.id,
      ];
      this.librosCarrito.push(book);
    }
    console.log(this.librosCarrito);
  }

  generateQR() {
    this.ReservacionService.reservar().subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/Products']);
  }
}
