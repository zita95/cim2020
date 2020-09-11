import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descShortening'
})
export class DescShorteningPipe implements PipeTransform {

  transform(value: string, args: number): string {
    return value.length < args ? value : value.substr(0, value.lastIndexOf(' ', args)) + ' ... ';
  }

}
