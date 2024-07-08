import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustompipe'
})
export class MyCustompipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
