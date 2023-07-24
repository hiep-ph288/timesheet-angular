import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBranchFilter } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private http: HttpClient) {}
  readonly BRANCH_URL = `${environment.apiUrl}services/app/Branch/`;

  getAllBranchFilter(): Observable<IBranchFilter[]> {
    return this.http
      .get<{ result: IBranchFilter[] }>(`${this.BRANCH_URL}GetAllBranchFilter`)
      .pipe(map((response) => response.result));
  }
}
