import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  ICustomer,
} from '../models/model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  readonly CUSTOMER_URL = `${environment.apiUrl}services/app/Customer/`;

  getCustomerAll(): Observable<ICustomer[]> {
    return this.http
      .get<{ result: ICustomer[] }>(`${this.CUSTOMER_URL}GetAll`)
      .pipe(map((response) => response.result));
  }

}
