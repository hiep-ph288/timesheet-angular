import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/model';

@Pipe({
  name: 'searching',
})
export class SearchingPipe implements PipeTransform {
  transform(value: IUser[], filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }
    const users = [];
    for (const user of value) {
      if (user.name.toLowerCase().includes(filteredString.toLowerCase())) {
        users.push(user);
      }
    }
    return users;
  }
}
