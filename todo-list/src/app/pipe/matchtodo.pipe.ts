import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './../models/Todo';

@Pipe({
  name: 'matchtodo'
})
export class MatchtodoPipe implements PipeTransform {

  transform(value: ToDo[], args?: any): any {
    return value.filter(val=>val.isCompleted==args);
  }

}
