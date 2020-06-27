import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: any, start?: number,limit?:number): any {
    
    if (!value) {
      return null;
    }
    let maStart=(start)? start : 0;
    let maLimit=(limit)? limit:30;
    return (<string>value).substr(maStart,maLimit)+' ...';
  }

}
