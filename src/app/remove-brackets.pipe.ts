import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeBrackets'
})
export class RemoveBracketsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.substring(1, value.length - 1);
  }

}
