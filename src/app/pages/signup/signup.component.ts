import { routes } from './../../app.routes';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInterface } from '../../interfaces/user.interface';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  auth = inject(AuthService);
  routes = inject(Router);

  // userForm = new FormBuilder().group({
  //   username: ['', Validators.required, Validators.minLength(3)],
  //   email: ['', Validators.required, Validators.email],
  //   password: ['', Validators.required, Validators.minLength(6)],
  // })

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  user: UserInterface = {
    username: '',
    email: '',
    password: '',
    smoked: {
      cigarretes: 0,
      handmade_cigarretes: 0,
      cigars: 0,
      vapes: 0,
      weed: 0,
      blunts: 0,
      lavander: 0
    }
  }


  signUp(){

    this.user.username = this.userForm.value.username as string;
    this.user.email = this.userForm.value.email as string;
    this.user.password = this.userForm.value.password as string;
    this.user.smoked.cigarretes = 0;
    this.user.smoked.handmade_cigarretes = 0;
    this.user.smoked.vapes = 0;
    this.user.smoked.weed = 0;
    this.user.smoked.blunts = 0;
    this.user.smoked.lavander = 0;

    this.auth.postUser(this.user).subscribe({
      next: (res) => {
        alert('user created');
        this.routes.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
