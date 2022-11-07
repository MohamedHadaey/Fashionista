import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts:any[] = [];
  total:any = 0;
  success : boolean = false;
  constructor(private _CartsService:CartsService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

   // get products in your cart
   getCartProducts(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getToatalPrice();
  }

   // get total price of cart
   getToatalPrice(){
    this.total = 0;
    for(let x in this.cartProducts){
      this.total += this.cartProducts[x].data.price * this.cartProducts[x].quantity;
      this.total = Math.round(this.total);
    }
  }

  // plus amount of product in your cart
  plusAmount(index:number){
    if( this.cartProducts[index].quantity<100){
      this.cartProducts[index].quantity++;
      this.getToatalPrice();
    }
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  // detect change in amount of product in your cart
  detectAmountChange(){
    this.getToatalPrice();
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

    // minas amount of product in your cart
    minsAmount(index:number){
      if(this.cartProducts[index].quantity>1){
        this.cartProducts[index].quantity--;
        this.getToatalPrice();
      }
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }

    // delete product of your cart
    deleteProduct(index:number){
      this.cartProducts.splice(index , 1);
      this.getToatalPrice();
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }

    // clear products in your cart
    clearCart(){
      this.cartProducts=[];
      this.getToatalPrice();
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }

      // order your cart
  orderCart(){
    let products = this.cartProducts.map((item) => {
      return {productId: item.data.id, quantity:item.quantity}
    })

    let model = {
      userId:5,
      date: new Date(),
      products:products
    }

    if(this.success == false){
      this._CartsService.orderYourCart(model).subscribe((response) => {
        this.success = true
      } , (error) => {
        alert("Failed to order your cart!")
      })
    }else{
      alert("You have been already ordered you cart")
    }

  }

}
