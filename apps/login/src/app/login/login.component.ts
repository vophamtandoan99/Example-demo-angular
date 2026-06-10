import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { TDSCardModule } from 'tds-ui/card';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSButtonMenuModule } from 'tds-ui/button-menu';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import {
  Validators,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    TDSCardModule,
    TDSButtonModule,
    TDSButtonMenuModule,
    TDSFormFieldModule,
    TDSInputModule,
    ReactiveFormsModule,
    TDSCheckBoxModule,
    NgClass,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  isShowPassword = false;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.registerForm.invalid) {
      localStorage.setItem('email', this.registerForm.value.email);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']);
    }
  }

  onTogglePassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
