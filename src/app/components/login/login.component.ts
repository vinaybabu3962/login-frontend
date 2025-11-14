import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  loading = false;

  constructor(private authService: AuthService,  private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      this.message = 'Email and Password are required';
      return;
    }

    this.loading = true;
    this.message = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.loading = false;
        this.message = res.message || 'Login successful';
        localStorage.setItem('loggedIn', 'true');

        this.router.navigate(['/success']);
      },
      error: (err) => {
        this.loading = false;
        this.message = err.error?.error || 'Login failed';
      },
    });
  }
}
