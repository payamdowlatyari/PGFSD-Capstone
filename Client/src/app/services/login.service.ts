import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  sendCredential(username: string, password: string) {
    
    let params = 'username='+username+'&password='+password;
    let headers = new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post( `${this.apiServerUrl}/login`, params, {headers: headers, withCredentials : true});
  }

  logout() {
     return this.http.get(`${this.apiServerUrl}/logout`, { withCredentials: true });
   }

}
