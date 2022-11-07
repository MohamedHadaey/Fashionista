import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  products:any[] = [];
  loading:boolean=false;
  categories:string[]=[];
  cartProducts:any[]=[];
  constructor(private _ProductsService:ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategories()
  }

  // this function to get all products
  getAllProducts(){
    this.products = [];
    this.loading = true
    this._ProductsService.getAllProducts().subscribe((response) => {
      this.products = response;
      this.loading = false
    }, (error) => {
      this.loading = false;
      alert(error.name);
    })
  }

  // get all categories
  getCategories(){
    this._ProductsService.getAllCategories().subscribe((response) => {
      this.categories=response
    } , (error) => {
      alert(error.name);
    })
  }

   // filter categories
   filterCategories(event:any){
    let value = event.target.value;
    // short way to write condition
    (value == "all") ? this.getAllProducts() : this.getCategoryProducts(value);
  }

  // get specific category
  getCategoryProducts(value:any){
    this.products = [];
    this.loading = true
      this._ProductsService.getSpecificCategory(value).subscribe((response) => {
        this.products = response;
        this.loading = false;
      } , (error) => {
        this.loading = false;
        alert(error.name);
      })
  }

  // get Test
  getProductsOfCategory(event:any){
    let value = event.target.innerHTML;
    this.getCategoryProducts(value);
  }

  // add to cart
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.data.id == event.data.id);
      if(exist){
        alert("Product is already in your cart")
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }

    } else {
      this.cartProducts.push(event);
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }

  }
}
