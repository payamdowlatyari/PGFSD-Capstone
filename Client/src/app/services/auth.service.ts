// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subject } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { LoginData } from '../models/loginData';
// import { SignupData } from '../models/signupData';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiServerUrl = environment.apiBaseUrl;
//   private isAuthenticated: boolean = false;
//   private isAdmin: boolean = false;
//   private token: string = "";
//   private tokenTimer!: any;
//   private userId!: number;
//   private authStatusListener = new Subject<boolean>();
//   private adminStatusListener = new Subject<boolean>();

//   constructor(private http: HttpClient, private router: Router) { }

//   getToken() {
//     return this.token;
//   }

//   getIsAuth() {
//     return this.isAuthenticated;
//   }

//   getIsAdmin() {
//     return this.isAdmin;
//   }

//   getAuthStatusListener() {
//     return this.authStatusListener.asObservable();
//   }

//   getAdminStatusListener() {
//     return this.adminStatusListener.asObservable();
//   }

//   getUserId() {
//     return this.userId;
//   }

//   login(username: string, password: string) {
//     const loginData: LoginData = {username: username, password: password};
//     this.http.post<{access_token: string, expiresIn: string}>(`${this.apiServerUrl}/api/login`, loginData)
//       .subscribe({
//         next : response => {
//             console.log(response);
//             const token = response.access_token;
//             this.token = token;
//             if (token !== null && token !== "") {
//               const expiresInDuration: number = Number(response.expiresIn);
//               this.setAuthTimer(expiresInDuration);
//               this.isAuthenticated = true;
//               this.authStatusListener.next(true);
//               const now = new Date();
//               const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
//               console.log(expirationDate);
//               this.http.get<number>(`${this.apiServerUrl}/api/user`)
//                 .subscribe(response => {
//                   console.log(response)
//                   const userId = response;
//                   this.userId = userId;
//                   this.saveAuthData(token, expirationDate, userId);
//                   this.http.get<boolean>(`${this.apiServerUrl}/api/user/isAdmin`)
//                     .subscribe(response => {
//                       this.isAdmin = response;
//                       this.adminStatusListener.next(response);
//                     });
//                   this.router.navigate(['/']);
//                 });
//             }
//         },
//         error : error => {
//           console.log(error);
//           this.authStatusListener.next(false);
//         }
//       });
//   }

//   getUserById(id: number) {
//     return this.http.get<{
//             id: number,
//             firstName: string,
//             lastName: string,
//             timestamp: number,
//             city: string,
//             country: string
//           }>(`${this.apiServerUrl}/api/users/getUserById/` + id);
//   }

//   createUser(firstname: string, lastname: string, email: string, password: string) {
//     const signupData: SignupData = {
//       firstname: firstname,
//       lastname: lastname,
//       username: email,
//       password: password
//     };
//     console.log(signupData);
//     this.http.post(`${this.apiServerUrl}/api/user/signup`, signupData)
//       .subscribe({
//         next: response => {
//           this.router.navigate(["/"]);
//         },
//         error: error => {
//           this.authStatusListener.next(false);
//         }
//       });
//   }

//   changePassword(userId: number, oldPassword: string, newPassword: string) {
//     const changePasswordData = {userId: userId, oldPassword: oldPassword, newPassword: newPassword};
//     this.http.post(`${this.apiServerUrl}/api/users/changePassword`, changePasswordData)
//     .subscribe({
//       next: response => {
//         alert("Password updated!")
//         this.router.navigate(["/userInfo", userId]);
//       },
//       error: error => {
//         this.router.navigate(["/userInfo", userId]);
//       }
//     });
//   }

//   updateUser(id: number, firstname: string, lastname: string, dob: Date, email: string, phone: string) {
//       const changeUserData = {firstname: firstname, lastname: lastname, timestamp: dob.getTime(), email: email, phone: phone};
//       this.http.put(`${this.apiServerUrl}/api/users/updateUser/` + id, changeUserData)
//         .subscribe({
//           next: response => {
//             alert("User updated!");
//             this.router.navigate(["/userInfo", id]);
//           },
//           error: error => {
//             this.router.navigate(["/userInfo", id]);
//           }
//         });
//   }

//   logout() {
//     this.token = "";
//     this.isAuthenticated = false;
//     this.userId = -100;
//     this.authStatusListener.next(false);
//     clearTimeout(this.tokenTimer);
//     this.clearAuthData();
//     if (this.isAdmin) {
//       this.isAdmin = false;
//       this.adminStatusListener.next(false);
//     }
//     this.http.get(`${this.apiServerUrl}/api/user/logout`)
//       .subscribe(response => {
//         console.log(response);
//         this.router.navigate(['/']);
//       })

//   }

//   autoAuthUser() {
//     const authInformation  = this.getAuthData();
//     const now = new Date();
//     if (!authInformation) {
//       return;
//     }
//     const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
//     if (expiresIn > 0) {
//       console.log(authInformation)
//       this.token = authInformation.token;
//       this.isAuthenticated = true;
//       this.userId = authInformation.userId;
//       this.setAuthTimer(expiresIn / 1000);
//       this.authStatusListener.next(true);
//       this.http.get<boolean>(`${this.apiServerUrl}/api/user/isAdmin`)
//         .subscribe(response => {
//           this.isAdmin = response;
//           this.adminStatusListener.next(response);
//         });
//     }

//   }

//   private setAuthTimer(duration: number) {
//     console.log("Setting timer: " + duration);
//     this.tokenTimer = setTimeout(() => {
//       this.logout();
//     }, duration * 1000);
//   }

//   private saveAuthData(token: string, exiprationDate: Date, userId: number) {
//     localStorage.setItem("token", token);
//     localStorage.setItem("expiration", exiprationDate.toISOString());
//     localStorage.setItem("userId", userId + "");
//   }

//   private clearAuthData() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("expiration");
//     localStorage.removeItem("userId");
//   }

//   private getAuthData() {
//     const token = localStorage.getItem("token");
//     const expirationDate = localStorage.getItem("expiration");
//     const userId = Number(localStorage.getItem("userId"));
//     if (!token || !expirationDate || !userId) {
//       return;
//     }
//     return {
//       token: token,
//       expirationDate: new Date(expirationDate),
//       userId
//     }
//   }
// }


