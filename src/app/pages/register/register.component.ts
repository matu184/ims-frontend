import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../services/auth.service';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  username = '';
  firstName = '';
  lastName = '';
  password = '';
  role = 'Mitarbeiter'; 

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  register(): void {
    const data = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      role: this.role
    };

    this.authService.register(data).subscribe({
      next: (res) => {
        if (res.success) {
          this.snackBar.open(res.message || 'Registrierung erfolgreich!', 'OK', { duration: 3000 });
          this.router.navigate(['/login']);
        } else {
          this.snackBar.open('Registrierung fehlgeschlagen', 'Schließen', { duration: 3000 });
        }
      },
      error: () => {
        this.snackBar.open('Registrierung fehlgeschlagen', 'Schließen', { duration: 3000 });
      }
    });
  }
}
