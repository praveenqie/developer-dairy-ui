import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; //

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;

  toggleNav() {
    this.isOpen = !this.isOpen;
    const sidenav = document.getElementById('sidenav');
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');

    if (sidenav && content && overlay) {
      if (this.isOpen) {
        sidenav.classList.add('open');
        content.classList.add('sidenav-open');
        overlay.classList.add('open');
      } else {
        sidenav.classList.remove('open');
        content.classList.remove('sidenav-open');
        overlay.classList.remove('open');
      }
    }
  }

  closeNav() {
    this.isOpen = false;
    const sidenav = document.getElementById('sidenav');
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');

    if (sidenav && content && overlay) {
      sidenav.classList.remove('open');
      content.classList.remove('sidenav-open');
      overlay.classList.remove('open');
    }
  }
}
