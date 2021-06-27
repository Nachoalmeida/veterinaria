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
    },
    {
      name: "Cobrexilin",
      type: "Minerales",
      image:"assets/img/ivomec500ml.jpg",
      price: 1110,
      stock: 0,
      oferta: false,
    },
    {
      name: "Respi 8",
      type: "Respiratoria",
      image:"assets/img/ivomec500ml.jpg",
      price: 1585,
      stock: 5,
      oferta: true,
    },

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
