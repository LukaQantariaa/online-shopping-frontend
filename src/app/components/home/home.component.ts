import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public categories: any;

  constructor(private home: HomeService) { }

  ngOnInit() {
    this.home.getCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories)
    })
  }

}
