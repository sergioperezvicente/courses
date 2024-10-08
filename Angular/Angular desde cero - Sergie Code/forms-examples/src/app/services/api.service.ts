import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL: string = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  public getAllProducts(sort?: string): Observable<IProduct[]> {
    // devuelve un observable de productos
    const params = sort ? `?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.baseURL}${params}`);
  }

  public getProductById(id: number | string): Observable<IProduct> {
    // devuelve un observable de 1 producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> {
    // devuelve un observable de categorías de productos
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(id:number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }
  
  public deleteProduct(id:number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}
