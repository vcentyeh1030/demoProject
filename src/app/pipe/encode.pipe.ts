import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encode'
})
export class EncodePipe implements PipeTransform {

  transform(str: string): any {
    return (str.length > 10) ? str.slice(0, 3) + '***' + str.slice(7, str.length) : '***';
  }

}
