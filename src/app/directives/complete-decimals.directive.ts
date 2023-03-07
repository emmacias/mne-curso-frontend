import { Directive, ElementRef, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appCompleteDecimals]'
})
export class CompleteDecimalsDirective {

  @Output() ngModelChange = new EventEmitter();
  @Input("appCompleteDecimals") decimales!: number;

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('blur', ['$event']) setInputFocusOut(event: any) {
    const resEventValue = event.target.value;

    if (resEventValue && resEventValue != '-' && resEventValue != '.') {
      this.elementRef.nativeElement.value = parseFloat(resEventValue).toFixed(this.decimales);
    }

    if (resEventValue == '.') {
      this.elementRef.nativeElement.value = '';
    }

    this.ngModelChange.emit(this.elementRef.nativeElement.value);
  }

}
