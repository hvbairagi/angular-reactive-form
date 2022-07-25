import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meraUppercase',
})
export class MeraUppercasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }
}
