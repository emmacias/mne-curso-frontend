import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectInFocus]'
})
export class SelectInFocusDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('focus') setInputFocus() {
    const input: HTMLInputElement = this.elementRef.nativeElement as HTMLInputElement;
    input.select();
  }

}
