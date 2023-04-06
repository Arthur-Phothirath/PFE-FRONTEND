import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user/user.model';

const API_URL = 'http://localhost:8000/';

const baseUrl =
  'http://localhost:8000/user' ||
  process.env['ANGULAR_APP_BACKEND_BASE_URL'] + 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getAll(): Observable<User[]> {
    // return this.http.get<User[]>(baseUrl);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User[]>(baseUrl, { headers });
  }

  get(id: any): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
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
  findById(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?id=${id}`);
  }
  findByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?name=${name}`);
  }
}
