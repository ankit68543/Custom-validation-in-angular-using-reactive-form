import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { IValidationError } from '../../Interfaces';

@Component({
  selector: 'app-error',
  templateUrl: './app-error.component.html',
  styleUrls: ['./app-error.component.scss'],
})
export class AppErrorComponent {
  @Input() control: AbstractControl;
  @Input() order: string[];
  @Input() always = false;

  getErrorMessage(): string {
    const errors = this.control.errors || {};
    const errorList = Object.keys(errors);

    if (errorList.length === 0) {
      return '';
    }

    const error = this.getFirstError(errors, errorList);

    return error.message;
  }

  private getFirstError(
    errors: ValidationErrors,
    keys: string[]
  ): IValidationError {
    if (!this.order || this.order.length === 0) {
      const error = errors[keys[0]];
      return error;
    }

    for (const validation of this.order) {
      if (keys.includes(validation)) {
        return errors[validation];
      }
    }
    return { message: '' };
  }
}
