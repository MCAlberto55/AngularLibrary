import { Component, Input, OnInit } from '@angular/core';
import { GetUserInfoService } from '../../Services/getUserInfo/get-user-info.service';
import { GetCartService } from '../../Services/GetCart/get-cart.service';
import { GetSingleBookService } from '../../Services/getASingle/get-single-book.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-cart-cotroller',
  templateUrl: './cart-cotroller.component.html',
  styleUrls: ['./cart-cotroller.component.css'],
})
export class CartCotrollerComponent implements OnInit {
  numItemsCart = 0;
  private userCartId: string;
  isLoading = false;
  librosCarrito: any[];

  constructor(
    private userInfoService: GetUserInfoService,
    private userCartService: GetCartService,
    private getBookService: GetSingleBookService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    if (!localStorage.getItem('UserToken')) {
      window.location.href = '';
    } else {
      let userData = this.userInfoService.getInfo(
        JSON.stringify(localStorage.getItem('UserToken'))
      );

      this.userCartId = userData.cartId;

      console.log('khe?');
      this.userCartService.getCart(this.userCartId).subscribe((res) => {
        let librosInfo: any[] = [];
        console.log(JSON.stringify(res));
        console.log(res[0].products);
        let temp = res[0].products;
        console.log(temp[0]);

        res[0].products.forEach((bookId: any) => {
          this.numItemsCart++;
          console.log('resolviendo: ' + JSON.stringify(bookId));
          console.log('resolviendo: ' + bookId.productId); //SI FUNCIONAAAAAAAAAAAAAAAAAAA

          this.getBookService.getBook(bookId.productId).subscribe((res) => {
            console.log(res);
            librosInfo.push(res);
          });
          console.log('PUSH');
        });

        this.librosCarrito = librosInfo;
        console.log('total: ' + JSON.stringify(this.librosCarrito.length));
        console.log('----------------------------------------');
        console.log(librosInfo);
        this.isLoading = false;
      });
    }
  }

  calculateCost(): number {
    return Number(this.numItemsCart) * 40;
  }

  addBook(/*cantidad: string*/) {
    /*let temp = this.numItemsCart;
    this.numItemsCart = temp + Number(cantidad);*/
    swal('¡Oops!', 'Solo se puede rentar 1 ejemplar por usuario ಠ_ಠ', 'info');
  }

  generateQR() {
    swal(
      '¡Se ha generado su QR!',
      'Se le mandado a su correo ( ˙▿˙ )',
      'success'
    );
  }
}
