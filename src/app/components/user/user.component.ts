import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { UserService } from './../../services/user.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  

  public user: any;
  public notFound: boolean = false;
  public loading: boolean = true

  constructor(private route:ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe(r => {
      if(r == null) {
        this.notFound = true; this.loading = false
      } else {
        this.loading = false
        this.user = r
        console.log(this.user)
      }
    })
    console.log(this.route.snapshot.params['id'])
  }

}
