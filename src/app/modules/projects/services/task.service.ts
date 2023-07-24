import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAllTasks } from '../models/model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  readonly TASK_URL = `${environment.apiUrl}services/app/Task/`;

  getAllTask(): Observable<IAllTasks[]> {
    return this.http
      .get<{ result: IAllTasks[] }>(`${this.TASK_URL}GetAll`)
      .pipe(
        map((res) => {
          return res.result;
        })
      );
  }
}
