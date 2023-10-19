import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obscure'
})
export class ObscurePipe implements PipeTransform {

  transform(value: string, obscure = true): string {
    return obscure
      ? value?.replace(/./g, '*')
      : value;
  }
}
