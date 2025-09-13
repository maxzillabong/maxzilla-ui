import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { z, ZodSchema } from 'zod';

export interface ValidationResult {
  success: boolean;
  errors?: string[];
  data?: any;
}

export interface ValidatableMixin {
  value: any;
  name?: string;
  required?: boolean;
  validationSchema?: ZodSchema;
  customValidator?: (value: any) => ValidationResult;
  errors: string[];
  touched: boolean;
  validate(): ValidationResult;
  reportValidity(): boolean;
  setCustomValidity(message: string): void;
  checkValidity(): boolean;
}

type Constructor<T = {}> = new (...args: any[]) => T;

export const ValidatableMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class ValidatableElement extends superClass implements ValidatableMixin {
    @property({ type: String }) name?: string;
    @property({ type: Boolean }) required = false;
    @property({ type: Array }) errors: string[] = [];
    @property({ type: Boolean }) touched = false;
    @property({ attribute: false }) validationSchema?: ZodSchema;
    @property({ attribute: false }) customValidator?: (value: any) => ValidationResult;

    value: any = '';

    validate(): ValidationResult {
      this.errors = [];

      // Check required
      if (this.required && !this.value) {
        this.errors = ['This field is required'];
        return { success: false, errors: this.errors };
      }

      // Custom validator
      if (this.customValidator) {
        const result = this.customValidator(this.value);
        if (!result.success) {
          this.errors = result.errors || [];
        }
        return result;
      }

      // Zod schema validation
      if (this.validationSchema) {
        try {
          const data = this.validationSchema.parse(this.value);
          return { success: true, data };
        } catch (error) {
          if (error instanceof z.ZodError) {
            this.errors = error.errors.map(e => e.message);
            return { success: false, errors: this.errors };
          }
        }
      }

      return { success: true, data: this.value };
    }

    reportValidity(): boolean {
      this.touched = true;
      const result = this.validate();
      this.requestUpdate();
      return result.success;
    }

    setCustomValidity(message: string): void {
      this.errors = message ? [message] : [];
      this.requestUpdate();
    }

    checkValidity(): boolean {
      const result = this.validate();
      return result.success;
    }
  }

  return ValidatableElement as Constructor<ValidatableMixin> & T;
};

// Common validation schemas
export const ValidationSchemas = {
  email: z.string().email('Please enter a valid email address'),
  url: z.string().url('Please enter a valid URL'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
  postalCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid postal code'),
  creditCard: z.string().regex(/^\d{13,19}$/, 'Please enter a valid credit card number'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  strongPassword: z.string()
    .min(12, 'Password must be at least 12 characters')
    .regex(/[A-Z].*[A-Z]/, 'Password must contain at least two uppercase letters')
    .regex(/[a-z].*[a-z]/, 'Password must contain at least two lowercase letters')
    .regex(/[0-9].*[0-9]/, 'Password must contain at least two numbers')
    .regex(/[^A-Za-z0-9].*[^A-Za-z0-9]/, 'Password must contain at least two special characters'),
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens'),
  number: z.coerce.number(),
  positiveNumber: z.coerce.number().positive('Must be a positive number'),
  integer: z.coerce.number().int('Must be a whole number'),
  percentage: z.coerce.number().min(0, 'Must be at least 0').max(100, 'Must be at most 100'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date (YYYY-MM-DD)'),
  time: z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/, 'Please enter a valid time (HH:MM or HH:MM:SS)'),
};