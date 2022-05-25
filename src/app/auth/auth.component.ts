import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  error = '';
  isLoading = false;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      //...
    } else {
      this.authService.signup(email, password).subscribe({
        next: (response) => {
          console.log(response);
          this.isLoading = false;
        },
        error: (errorMessage) => {
          this.error = errorMessage;
          this.isLoading = false;
        },
      });
    }
    form.reset();
  }
}
