import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAccount, ITokenAuth } from '../model/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  readonly AUTH_URL = `${environment.apiUrl}TokenAuth/Authenticate`;
  userLogin(userAccount: IAccount): Observable<ITokenAuth> {
    return this.http.post<ITokenAuth>(`${this.AUTH_URL}`, userAccount);
  }
  onLogout() {}
}
