import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product: any = {};
  productAddedId: any = localStorage.getItem('productId');
  // this ( ! ) => if you didn't want to initialize the varaible
  productId!: number;
  loading: boolean = false;
  added: any = localStorage.getItem('added');
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productId = this._ActivatedRoute.snapshot.params?.['id'];
    this.getDetails();
  }

  // get details of product
  getDetails() {
    this.loading = true;
    this._ProductsService.getProductDetails(this.productId).subscribe(
      (response) => {
        this.product = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
}
