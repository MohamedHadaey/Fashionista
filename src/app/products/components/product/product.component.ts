import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data!:product;
  @Output() item = new EventEmitter();
  addButton:boolean=false;
  amount:number=1;
  constructor() { }

  ngOnInit(): void {
  }

   // send item clicked and amout to parent
   add(){
    this.item.emit({data:this.data , quantity:this.amount});
    }

    added(){
      localStorage.setItem("added" , "true")
    }
}
