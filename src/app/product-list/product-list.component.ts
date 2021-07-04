import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  
  /**[
    {
      name: "Ivomec",
      type: "Antiparasitario",
      image:"assets/img/ivomec500ml.jpg",
      price: 1350,
      stock: 3,
      oferta: false,
      quantity: 0,
    },
    {
      name: "Cobrexilin",
      type: "Minerales",
      image:"assets/img/ivomec500ml.jpg",
      price: 1110,
      stock: 0,
      oferta: false,
      quantity: 0,
    },
    {
      name: "Respi 8",
      type: "Respiratoria",
      image:"assets/img/ivomec500ml.jpg",
      price: 1585,
      stock: 5,
      oferta: false,
      quantity: 0,
    },

  ];*/

  constructor(
    private cart: ProductCartService,
    private productsDataService: ProductDataService) {  
  }

  ngOnInit(): void {
    this.productsDataService.getAll()
    .subscribe(products => this.products = products)
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
