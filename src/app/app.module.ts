import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCartComponent } from './Componentes/item/item-cart.component';
import { CartCotrollerComponent } from './Componentes/cart-cotroller/cart-cotroller.component';
import { UserControllerComponent } from './Componentes/user-controller/user-controller.component';
import { FormsModule } from '@angular/forms';
import { ProductsPresentationComponent } from './Componentes/products-presentation/products-presentation.component';
import { AppHeaderComponent } from './Componentes/app-header/app-header.component';
import { LoadingSpinnerComponent } from './Componentes/loading-spinner/loading-spinner.component';
import { AppFooterComponent } from './Componentes/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCartComponent,
    CartCotrollerComponent,
    UserControllerComponent,
    ProductsPresentationComponent,
    AppHeaderComponent,
    LoadingSpinnerComponent,
    AppFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
