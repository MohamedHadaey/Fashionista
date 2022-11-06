import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts:any[] = [];
  total:any = 0;
  success : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
