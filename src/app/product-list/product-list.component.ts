import { Component, OnInit } from '@angular/core';
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
      oferta: true,
      quantity: 0,
    },

  ];


  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Product): void{
    if(product.quantity < product.stock)
      product.quantity ++;
  }

  downQuantity(product: Product): void{
    if(product.quantity > 0)
      product.quantity --;
  }

  changeQuantity(event: any, product: Product): void{
    //console.log(event.key);//en la consola puedo ver todo lo q esta dentro del event y utilizar cualquiera
                          //de sus atributos. (.key, .code, .location, .defaultPrevented, etc.)
    event.preventDefault(event.key >=0 && event.key<=9);
    //if(event.key >=0 && event.key<=9)


  }

}
