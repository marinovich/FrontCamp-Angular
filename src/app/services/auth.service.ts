import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public updateAuthStatus: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  login = () => {
    this.http.post(`${SERVER_URL}/login`, { username: 'User', password: 'User2019' }, { withCredentials: true }).toPromise()
      .then(() => this.updateAuthStatus.emit(true))
      .catch((error) => console.log(error));
  }

  logout = () => {
    this.http.get(`${SERVER_URL}/logout`, { withCredentials: true }).toPromise()
      .then(() => this.updateAuthStatus.emit(false))
      .catch((error) => console.log(error));
  }

  loginStatus = async () => {
    const { isLoggedIn } = await this.http.get<{ isLoggedIn: boolean }>(`${SERVER_URL}/status`, { withCredentials: true }).toPromise();

    return isLoggedIn;
  }
}
