import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

export function validateAllFormFields(formGroup: UntypedFormGroup | UntypedFormArray, showError: boolean = true): void {
  formGroup.markAsTouched();
  if (showError) {
    showInvalidField(formGroup);
  }
  Object.keys(formGroup.controls).forEach((field: string) => {
    const control: any = formGroup.get(field);
    if (control instanceof UntypedFormControl && control.enabled) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof UntypedFormGroup) {
      validateAllFormFields(control);
    } else if (control instanceof UntypedFormArray) {
      validateAllFormFields(control);
    }
  });
}

function showInvalidField(formGroup: UntypedFormGroup | UntypedFormArray): void {
  const invalid: string[] = [];
  const controls: any = formGroup.controls;
  for (const name in controls) {
    if (controls.hasOwnProperty(name)) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
  }
}
