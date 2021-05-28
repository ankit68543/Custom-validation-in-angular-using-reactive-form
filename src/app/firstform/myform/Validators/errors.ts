import { ValidationErrors } from '@angular/forms';

export const requiredError: () => ValidationErrors = () => ({
  required: { message: 'This is required' },
});

export const emailRequired: () => ValidationErrors = () => ({
  required: { message: 'Email is required' },
});

export const emailInvalid: () => ValidationErrors = () => ({
  required: { message: 'Email is not in correct format' },
});

export const minMax: () => ValidationErrors = () => ({
  required: { message: 'Quantity must be within 1 and 10' },
});

export const notAnInteger: () => ValidationErrors = () => ({
  required: { message: 'Quantity must be integer' },
});
