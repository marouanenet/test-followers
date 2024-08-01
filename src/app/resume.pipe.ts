import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume',
  standalone: true
})
export class ResumePipe implements PipeTransform {

  transform(value: any, limit?: number):any{
    var defaultLimit = (limit) ? limit : 5
    if(!value) return null;
    
    return value.substr(0,defaultLimit) + '...';
  }

}
