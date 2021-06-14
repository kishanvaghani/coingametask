import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url="https://touku-api.angelium.net/api/xchat/api-token-auth-touku/"
  constructor(private http:HttpClient) { }
  loginUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, user);
  }
}
