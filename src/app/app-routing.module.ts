import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPresentationComponent } from './Componentes/products-presentation/products-presentation.component';
import { UserControllerComponent } from './Componentes/user-controller/user-controller.component';
import { CartCotrollerComponent } from './Componentes/cart-cotroller/cart-cotroller.component';

const routes: Routes = [
  { path: 'Products', component: ProductsPresentationComponent },
  { path: 'Log', component: UserControllerComponent },
  { path: 'Cart', component: CartCotrollerComponent },
  { path: '', redirectTo: 'Products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
