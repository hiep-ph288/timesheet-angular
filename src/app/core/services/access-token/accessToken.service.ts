import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  constructor() {}
  getToken(): String | null {
    return localStorage.getItem('token');
  }

  setToken(value: string) {
    localStorage.setItem('token', value);
  }

}
