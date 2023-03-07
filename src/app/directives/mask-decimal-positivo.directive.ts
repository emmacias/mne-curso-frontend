import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaskDecimalPositivo]'
})
export class MaskDecimalPositivoDirective {

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    const e = (event as KeyboardEvent);
    const value = event.target.value;
    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || // Delete, Backspace, Tab, Escape, Enter
        (e.keyCode == 110 && !value.includes('.')) || // Allow: . (Only once)
        (e.keyCode == 190 && !value.includes('.')) || // Allow: . (Only once)
        (e.keyCode == 65 && e.ctrlKey === true) ||    // Allow: Ctrl+A
        (e.keyCode == 67 && e.ctrlKey === true) ||    // Allow: Ctrl+C
        (e.keyCode == 86 && e.ctrlKey === true) ||    // Allow: Ctrl+V
        (e.keyCode == 88 && e.ctrlKey === true) ||    // Allow: Ctrl+X
        (e.keyCode >= 35 && e.keyCode <= 39)) {       // Allow: home, end, left, right
      return;
    }

    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

}
