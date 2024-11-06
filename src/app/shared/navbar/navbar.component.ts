import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  router = inject(Router);
  id?: string | null;

  ngOnInit() {
    this.id = localStorage.getItem('id');
  }

  logout() {
    localStorage.setItem('id', '');
    this.router.navigate(['/login']);
  }
}
