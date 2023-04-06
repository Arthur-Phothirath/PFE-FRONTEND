import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../../../models/product/product.model';

const baseUrl =
  'http://localhost:8000/product' ||
  process.env['ANGULAR_APP_BACKEND_BASE_URL'] + 'product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  get(id: any): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  findById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?id=${id}`);
  }
  findByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?name=${name}`);
  }
}
