import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input() quantity!: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  @Input() max!: number;

  ngOnInit(): void {
  }


  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Se agotó el Stock");
    }

  }

  downQuantity(): void{
    if(this.quantity > 0)
      this.quantity --;
      this.quantityChange.emit(this.quantity);
  }

  changeQuantity(event: any): void{
    if(event.key >=0 && event.key<= this.max){
      this.quantityChange.emit(this.quantity);
    }else{
      event.preventDefault();
      alert("Ingrese un número entre 1 y " + (this.max));
    }
  }  

}
