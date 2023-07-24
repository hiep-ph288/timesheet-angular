import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faSignOutAlt = faSignOutAlt;
  constructor(private router: Router) {}
  navigateHome() {
    this.router.navigate(['/app/main/home']);
  }
}
