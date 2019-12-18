import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { ProductsService } from '../../services/products.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: any;
  notFound: boolean = false
  loading: boolean = true

  constructor(private route:ActivatedRoute, private ProductsService: ProductsService) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id']
    this.ProductsService.getProductById(id).subscribe((r) => {
      this.loading = false
      this.product = r
      console.log(r)
    }, (err:HttpErrorResponse)=>{this.notFound = true; this.loading = false})
    console.log(this.route.snapshot.params['id'])
  }

}
