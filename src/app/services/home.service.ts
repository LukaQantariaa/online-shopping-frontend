import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private base_url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getCategories(){
    return this.http.get(`${this.base_url}/categories`)
  }
}
