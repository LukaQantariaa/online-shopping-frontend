import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { SubCategoryService } from '../../services/sub-category.service'

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  public subCategory: any;
  public notFound: boolean = false;
  public loading: boolean = true

  constructor(private route:ActivatedRoute, private subCategories: SubCategoryService) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id']
    console.log(this.route.snapshot.params['id'])
    this.subCategories.getSubCategoryById(id).subscribe((res) => {
      if(res == null) {
        this.notFound = true
        this.loading = false
      } else {
        this.subCategory = res;
        this.loading = false
      }
      console.log(res) 
    })
  }
  

}
