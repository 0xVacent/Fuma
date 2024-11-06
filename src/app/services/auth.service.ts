import { UserInterface } from './../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase: string = 'http://localhost:3000';
  httpclient = inject(HttpClient);

  postUser(user: UserInterface){
    return this.httpclient.post(`${this.urlBase}/users`, user);
  }

  getUser(username: string, password: string){
    return this.httpclient.get<UserInterface[]>(`${this.urlBase}/users?username=${username}&password=${password}`);
  }

  getData(){
    return this.httpclient.get<UserInterface[]>(`${this.urlBase}/users?id=${localStorage.getItem('id')}`);
  }

  updateUser(user: UserInterface){
    return this.httpclient.put(`${this.urlBase}/users/${user.id}`, user);
  }

}
