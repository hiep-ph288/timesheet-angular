import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isActive',
})
export class IsActivePipe implements PipeTransform {
  transform(value: number): string {
    return value === 1 ? 'Inactive' : 'Active';
  }
}
