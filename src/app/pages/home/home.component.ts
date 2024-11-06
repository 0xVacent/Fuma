import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from '../../interfaces/user.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  auth = inject(AuthService);
  routes = inject(Router);



  user: UserInterface = {
    username: '',
    email: '',
    id: 0,
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

  bkpUser: UserInterface = {
    username: '',
    email: '',
    id: 0,
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


  ngOnInit() {
    if (!localStorage.getItem('id')) {
      this.routes.navigate(['/login']);
    } else {
      this.auth.getData().subscribe((res) => {
        this.user = res[0];
      })

    }

  }

  update() {
    this.auth.updateUser(this.user as UserInterface).subscribe((res) => console.log(res));
    alert('stats updated');
  }

  reset() {
    this.auth.getData().subscribe((res) => {
      this.user = res[0];
    })
  }
}
