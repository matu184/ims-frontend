import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        if (res.success) {
          this.authService.saveToken(res.token);
          this.snackBar.open(res.message || 'Login erfolgreich!', 'OK', { duration: 3000 });
          this.router.navigate(['/']);
        } else {
          this.snackBar.open(res.message || 'Login fehlgeschlagen', 'Schließen', { duration: 3000 });
        }
      },
      error: () => {
        this.snackBar.open('Login fehlgeschlagen (Serverfehler)', 'Schließen', { duration: 3000 });
      }
    });
  }
  
}
