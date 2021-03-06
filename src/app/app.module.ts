import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarritoComponent } from './carrito/carrito.component';

import { FormsModule } from '@angular/forms';
import { VetProductComponent } from './vet-product/vet-product.component';
import { VetAboutComponent } from './vet-about/vet-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CarritoComponent,
    VetProductComponent,
    VetAboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
