import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  requiredError,
  emailRequired,
  emailInvalid,
  minMax,
  notAnInteger,
} from './errors';

export function required(control: AbstractControl): ValidationErrors {
  const isEmpty = [undefined, null, ''].includes(control.value);
  if (isEmpty || `${control.value}`.trim().length === 0) {
    return requiredError();
  }
  return null as any;
}

export function requiredEmail(control: AbstractControl): ValidationErrors {
  const isEmpty = [undefined, null, ''].includes(control.value);
  if (isEmpty || `${control.value}`.trim().length === 0) {
    return emailRequired();
  }
  return null as any;
}

export function validEmail(control: AbstractControl): ValidationErrors {
  if (!control || !control.value) {
    return null as any;
  }

  const value = `${control.value}`;

  if (value.length === 0) {
    return null as any;
  }

  const regex = /^\w(\w|[\.-])+@\w+\.[a-zA-Z]{2,}$/;

  const isEmail = regex.test(value);

  if (!isEmail) {
    return emailInvalid();
  }
  return null as any;
}

export function minMaxValue(control: AbstractControl): ValidationErrors {
  if (!control || !control.value) {
    return null as any;
  }

  const value = `${control.value}`;

  if (value.length === 0) {
    return null as any;
  }

  const isInt = Number.isInteger(+control.value);

  if (!isInt) {
    return notAnInteger();
  }

  if (!IsInRange(parseInt(value))) {
    return minMax();
  }

  return null as any;
}

const IsInRange = (value: number) => {
  return value > 0 && value < 11;
};
