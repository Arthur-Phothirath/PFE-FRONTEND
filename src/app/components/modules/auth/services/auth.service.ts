import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl =
  'http://localhost:8000/' || process.env['ANGULAR_APP_BACKEND_BASE_URL'];

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      baseUrl + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(
    name: string,
    email: string,
    password: string,
    contactNumber: number
  ): Observable<any> {
    return this.http.post(
      baseUrl + 'register',
      {
        name,
        email,
        password,
        contactNumber,
      },
      httpOptions
    );
  }
}
