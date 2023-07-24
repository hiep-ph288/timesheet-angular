import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProjectUserData, IQuantity } from '../models/model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // private projectData: IProjectUserData[] = [];

  constructor(private http: HttpClient) {}
  readonly PROJECT_URL = `${environment.apiUrl}services/app/Project/`;

  public getProject(
    status: number,
    searchInput: string
  ): Observable<IProjectUserData[]> {
    if (status === 1 || status === 0) {
      return this.http
        .get<{ result: IProjectUserData[] }>(
          `${this.PROJECT_URL}getAll?status=${status}&search=${searchInput}`
        )
        .pipe(
          map((response: { result: IProjectUserData[] }) => response.result)
        );
    } else {
      return this.http
        .get<{ result: IProjectUserData[] }>(
          `${this.PROJECT_URL}getAll?search=${searchInput}`
        )
        .pipe(
          map((response: { result: IProjectUserData[] }) => response.result)
        );
    }
  }

  getQuantityProject(): Observable<IQuantity> {
    return this.http
      .get<{ result: IQuantity }>(`${this.PROJECT_URL}GetQuantityProject`)
      .pipe(map((response: { result: IQuantity }) => response.result));
  }

  deactiveProject(id: number): Observable<number> {
    return this.http.post<number>(`${this.PROJECT_URL}Inactive`, { id });
  }

  activeProject(id: number): Observable<number> {
    return this.http.post<number>(`${this.PROJECT_URL}Active`, { id });
  }
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.PROJECT_URL}Delete?Id=${id}`);
  }
}
