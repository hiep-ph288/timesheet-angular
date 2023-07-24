import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listType',
})
export class ListTypePipe implements PipeTransform {
  transform(type: number): string {
    switch (type) {
      case 3:
        return 'All';
      case 0:
        return 'Staff';
      case 1:
        return 'Internship';
      case 2:
        return 'Collaborator';
      default:
        return '';
    }
  }
}
