import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'code'
})
export class ProductCodePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if(value > 999) return value;
    let paddingLength = 4;
    if(args && args[0]) paddingLength = args[0];
    let result = value.toString();
    for(let i=0; i < (paddingLength-value.toString().length); i++){
      result = '0' + result;
    }
    return result;
  }

}
