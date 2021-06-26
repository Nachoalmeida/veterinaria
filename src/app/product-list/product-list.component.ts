import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product = {
    "name": "Ivomec",
    "type": "Antiparasitario",
    "image":"assets/img/ivomec500ml.jpg",
    "price": "1350",
    "stock": "14"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
