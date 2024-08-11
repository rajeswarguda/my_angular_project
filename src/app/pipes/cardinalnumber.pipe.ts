import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardinalnumber',
  standalone: true
})
export class CardinalnumberPipe implements PipeTransform {

  transform(input: any) {

    let ord = 'th';

  if (input % 10 == 1 && input % 100 != 11)
  {
    ord = 'st';
  }
  else if (input % 10 == 2 && input % 100 != 12)
  {
    ord = 'nd';
  }
  else if (input % 10 == 3 && input % 100 != 13)
  {
    ord = 'rd';
  }

  return input+ord;

  }

}
