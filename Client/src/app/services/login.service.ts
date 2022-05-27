import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  registrationUser(value: any) {
    throw new Error('Method not implemented.');
  }
  authenticateUser(loginValue: { username: any; password: any; }) {
    throw new Error('Method not implemented.');
  }


  private apiServerUrl = environment.apiBaseUrl;
  isAuthenticated: boolean = false;
  user: any;
  httpService: any;
  token: any;
  data: any;

  constructor(private http: HttpClient) { }

  sendCredential(username: string, password: string) {
    let url = `${this.apiServerUrl}/api/login`;
    let params = 'username='+username+'&password='+password;
    let headers = new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

  getToken(user: any): Observable<any> {
    return this.httpService.post(
      `${this.apiServerUrl}/token/generate-token`,
      user
    );
  }

  authenticate(user:any): Observable<any>{
    return this.httpService.post(`${this.apiServerUrl}/authenticate}`, user);
  }

  getUser(id: any): Observable<any> {
    return this.httpService.get(`${this.apiServerUrl}/user/${id}`);
  }

  getAllUser(): Observable<any> {
    return this.httpService.get(`${this.apiServerUrl}/user`);
  }
  
  logout() {
     return this.http.get(`${this.apiServerUrl}/api/logout`, { withCredentials: true });
   }

   signup(data: any){
    return this.http.post<string>(`${this.apiServerUrl}/api/signup`,
      {username: data.username, firstName: data.firstname, password: data.password,
      lastName: data.lastname}, { withCredentials: true });
  }


}
