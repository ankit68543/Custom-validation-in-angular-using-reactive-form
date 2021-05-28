import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  minMaxValue,
  required,
  requiredEmail,
  validEmail,
} from './Validators/custom.validators';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  form: FormGroup;
  emailValue: string;
  quantityValue: number;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.InitForm();
  }

  private InitForm(): void {
    this.form = this.fb.group({
      email: [null, [requiredEmail, validEmail]],
      quantity: [null, [required, minMaxValue]],
    });
  }

  Save(): void {
    if (!this.form.valid) {
      this.form.controls.email.markAsTouched();
      this.form.controls.quantity.markAsTouched();
      return;
    }
    this.emailValue = this.form.value.email;
    this.quantityValue = this.form.value.quantity;
  }
}
