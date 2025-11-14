import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  
  message: string = '';
  loading = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (!this.email || !this.password || !this.name) {
      this.message = 'All fields are required';
      return;
    }

    this.loading = true;
    this.message = '';

    this.authService.register(this.name, this.email, this.password).subscribe({
      next: (res) => {
        this.loading = false;
        this.message = res.message || 'Signup successful';
      },
      error: (err) => {
        this.loading = false;
        this.message = err.error?.error || 'Signup failed';
      }
    });
  }
}
