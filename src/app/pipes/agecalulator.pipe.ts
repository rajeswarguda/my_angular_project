import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agecalulator',
  standalone: true
})
export class AgecalulatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
