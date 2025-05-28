import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isNavOpen = false;

  toggleMenu(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  navTitle: string = 'Cyan';

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' }
  ];
  authLinks = [
  ];
}

