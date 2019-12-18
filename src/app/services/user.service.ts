import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getUserById(id: number){
    return this.http.get(`${this.base_url}/users/${id}`)
  }
  
}
