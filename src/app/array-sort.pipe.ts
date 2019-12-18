import { Pipe, PipeTransform } from '@angular/core';
export interface Result {
  name:string,
  marks:{
      Maths:string,
      English:string,
      Science:string
  },
  rollNumber:string
}
@Pipe({
  name: 'arraySort'
})
export class ArraySortPipe implements PipeTransform {
  transform(array: Array<Result>, args: string): Array<Result> {
    array.forEach((obj:Result)=>{
      obj.name = obj.name.charAt(0).toUpperCase()+obj.name.substr(1)
    })
    array.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
