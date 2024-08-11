import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {

  transform(name:any, gender:any) {
    
    if(gender == "male"){
      return "Mr."+name;
    }else{
      return "Mrs."+name;
    }
  }

}
