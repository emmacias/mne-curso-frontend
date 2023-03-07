import { AbstractControl } from '@angular/forms';

export function BlankValidator(control: AbstractControl) {
  if (control.value && control.value.length > 0 && control.value.trim() == '') {
    return { blank: true };
  }
  return null;
}
