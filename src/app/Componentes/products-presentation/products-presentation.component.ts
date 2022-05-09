import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FakeLibraryService } from '../../Services/getProducts/fake-library.service';
//import swal from '../../utils/sweetAlert';

@Component({
  selector: 'app-products-presentation',
  templateUrl: './products-presentation.component.html',
  styleUrls: ['./products-presentation.component.css'],
})
export class ProductsPresentationComponent implements OnInit {
  libros: any[] = [];
  busqueda: string = ' ';
  searchValue: string = '';
  userId: string;
  userCartId: string;
  isLoading: boolean = false;
  inicial = 0;

  constructor(
    private api: FakeLibraryService,
    private _activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /*this.itemCartsInfo.push('123');
    console.log(this.itemCartsInfo);*/
    this.isLoading = true;
    this.api.getAll().subscribe((res) => {
      //this.libros = res;
      //console.log(res);
      //this.test = 'Este es el mensaje de prueba actualizado';

      for (let i = 0; i < res.length; i++) {
        //console.log('ekisde');
        //console.log(res[2].title);
        let temp = res[i];
        console.log(temp.id);

        let book = [
          temp.title,
          temp.price,
          temp.category,
          temp.descripcion,
          temp.image,
          temp.id,
        ];
        this.libros.push(book);
      }

      if (this.libros.length == 0) {
        this.searchValue = '';
      }
      this.actualizarBusquedaInit();
      this.isLoading = false;
    });

    this._activeRouter.params.subscribe((params: Params) => {
      this.userId = params['num'];
    });
  }

  actualizarBusquedaInit() {
    //aca, no en Init el inicial, sino lo hace al recargar
    this.inicial = 1;
    this.busqueda = this.searchValue;
  }

  actualizarBusqueda() {
    console.log('buscnado: ' + this.searchValue);
    if (this.searchValue.trim().length >= 0) {
      this.busqueda = this.searchValue;
    } else {
      /*swal(
        '¡Agregue una cadena válida!',
        '¡ Ya deja de intentar romper cosas (╯°□°）╯ !',
        'error'
      );*/
    }
  }
}
