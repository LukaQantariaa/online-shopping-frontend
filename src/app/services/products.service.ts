import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private base_url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getProductById(id: number) {
    return this.http.get(`${this.base_url}/products/${id}`)
  }

}
