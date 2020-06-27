import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextFormat]'
})
export class TextFormatDirective {

  @Input('appTextFormat') myformat;
  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    let value:string=this.el.nativeElement.value;
    if(this.myformat=='L'){
      this.el.nativeElement.value=value.toLowerCase();
    }else if(this.myformat=='U'){
      this.el.nativeElement.value=value.toUpperCase();
    }
  }

}
