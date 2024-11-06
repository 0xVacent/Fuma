import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  auth = inject(AuthService);
  routes = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  login() {
    this.auth.getUser(this.loginForm.value.username as string, this.loginForm.value.password as string).subscribe({
      next: (res) => {
        alert('user logged in');
        console.log(res);
        localStorage.setItem('id', res[0].id?.toString() as string);
        this.routes.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
