import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl ) {
  // tslint:disable-next-line:max-line-length
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (control && (control.value !== null || control.value !== undefined)) {
if (!regex.test(control.value)) {
  return {
    isError: true,
  };

}
}
return null;
}

export function passValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
      const confirmpwd = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
          const passValue = passControl.value;
          if (passValue !== confirmpwd || passValue === '') {
              return {
                  isError: true,
              };
          }
      }
  }

  return null;
}
