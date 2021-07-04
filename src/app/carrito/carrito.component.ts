import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  cartList$: Observable<Product[]>;

  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

  

}
