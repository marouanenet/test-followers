import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {

  @Input('format') format : any;

  constructor(private el:ElementRef) { }

  @HostListener('blur')
  onBlur() {
    let value : string = this.el.nativeElement.value;
    
    if(this.format=="lowercase") {
      this.el.nativeElement.value = value.toLowerCase();
    }else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

  @HostListener('focus')
  onFocus() {
    console.log('On Focus');
  }

}
