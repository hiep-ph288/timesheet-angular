import { Pipe, PipeTransform } from '@angular/core';
import { IProjectUserData } from '../models/model';

@Pipe({
  name: 'groupData',
})
export class GroupDataPipe implements PipeTransform {
  transform(projectsData: IProjectUserData[]): {
    [key: string]: IProjectUserData[];
  } {
    return projectsData.reduce(
      (acc: { [key: string]: IProjectUserData[] }, cur: IProjectUserData) => {
        const customerName = cur.customerName;
        if (!acc[customerName]) {
          acc[customerName] = [];
        }
        acc[customerName].push(cur);
        return acc;
      },
      {}
    );
  }
}
