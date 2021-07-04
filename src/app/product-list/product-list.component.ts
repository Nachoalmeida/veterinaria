import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      name: "Ivomec",
      type: "Antiparasitarios",
      image:"assets/img/ivomec500ml.jpg",
      price: 1350,
      stock: 3,
      oferta: false,
      quantity: 0,
    },
    {
      name: "Suplenut",
      type: "Minerales",
      image:"assets/img/suplenut.png",
      price: 1110,
      stock: 0,
      oferta: false,
      quantity: 0,
    },
    {
      name: "Triple Poligen",
      type: "Biológicos",
      image:"assets/img/triplepoligen.png",
      price: 1585,
      stock: 5,
      oferta: false,
      quantity: 0,
    },
    {
      name: "Maxibiotic L.A.",
      type: "Antibióticos",
      image:"assets/img/maxibiotcla.png",
      price: 1960,
      stock: 10,
      oferta: false,
      quantity: 0,
    },
    {
      name: "Rotatec J5",
      type: "Biológicos",
      image:"assets/img/rotatecj5.png",
      price: 2250,
      stock: 7,
      oferta: false,
      quantity: 0,
    },

  ];

  constructor(private cart: ProductCartService) {
    
   }

  ngOnInit(): void {
  }

  maxReached(m: string){
    alert(m);
  }  

  addToCart(product: Product): void{
    this.cart.addToCart(product)
    product.stock -= product.quantity;
    product.quantity = 0;
  }

}
