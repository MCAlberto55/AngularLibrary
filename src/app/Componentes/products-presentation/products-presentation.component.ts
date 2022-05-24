import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FakeLibraryService } from '../../Services/getProducts/fake-library.service';
import { GetSingleBookService } from '../../Services/getASingle/get-single-book.service';
//import swal from '../../utils/sweetAlert';

@Component({
  selector: 'app-products-presentation',
  templateUrl: './products-presentation.component.html',
  styleUrls: ['./products-presentation.component.css'],
})
export class ProductsPresentationComponent implements OnInit {
  libros: any[] = [];
  searchValue: string = '';
  userId: string;
  userCartId: string;
  isLoading: boolean = false;

  inicial = 0;
  lastPage = 0;
  currentPage = 1;

  constructor(
    private api: FakeLibraryService,
    private searchServive: GetSingleBookService,
    private _activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.api.getAll(this.currentPage.toString()).subscribe((res) => {
      let answer = res.items;
      this.currentPage = res.meta.currentPage;
      this.lastPage = res.meta.totalPages;
      console.log('Página actual: ' + this.currentPage);

      this.cargarLibros(answer);

      this.isLoading = false;
    });
  }

  cargarLibros(answer: any) {
    this.libros.splice(0, this.libros.length);
    for (let i = 0; i < answer.length; i++) {
      let temp = answer[i];
      console.log(temp.id);

      let book = [
        temp.title,
        temp.availableQuantity,
        //temp.createdAt,
        temp.description,
        temp.imageUrl,
        temp.id,
      ];
      this.libros.push(book);
    }
    console.log(this.libros);
  }

  siguientePagina() {
    if (this.currentPage < 5) {
      const newPage = this.currentPage + 1;
      this.currentPage = newPage;
      this.api.getAll(newPage.toString()).subscribe((res) => {
        let answer = res.items;
        this.cargarLibros(answer);
      });
    } else {
      alert('ya estas en el límite owo');
    }
  }

  paginaAnterior() {
    if (this.currentPage > 1) {
      const newPage = this.currentPage - 1;
      this.currentPage = newPage;
      this.api.getAll(newPage.toString()).subscribe((res) => {
        let answer = res.items;
        this.cargarLibros(answer);
      });
    } else {
      alert('ya estas en el límite owo');
    }
  }

  primeraPagina() {
    if (this.currentPage > 1) {
      this.currentPage = 1;
      this.api.getAll(this.currentPage.toString()).subscribe((res) => {
        let answer = res.items;
        this.cargarLibros(answer);
      });
    } else {
      alert('ya estas en el límite owo');
    }
  }

  ultimaPagina() {
    if (this.currentPage < this.lastPage) {
      this.currentPage = this.lastPage;
      this.api.getAll(this.lastPage.toString()).subscribe((res) => {
        let answer = res.items;
        this.cargarLibros(answer);
      });
    } else {
      alert('ya estas en el límite owo');
    }
  }

  buscarLibro() {
    this.searchServive.getBook(this.searchValue).subscribe((res) => {
      let answer = res.items;
      this.cargarLibros(answer);
    });
  }
}
