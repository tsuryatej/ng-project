import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  isNavOpen = false;

  toggleMenu(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
