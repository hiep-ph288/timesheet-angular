import { IUser } from './../models/model';
import { Observable, map } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  readonly USER_URL = `${environment.apiUrl}services/app/User/`;

  getUser(): Observable<IUser[]> {
    return this.http
      .get<{ result: IUser[] }>(`${this.USER_URL}GetUserNotPagging`)
      .pipe(
        map((response) => {
          return response.result;
        })
      );
  }
}
