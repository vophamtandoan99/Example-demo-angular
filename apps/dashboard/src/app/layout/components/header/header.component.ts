import { Component } from '@angular/core';
import { TDSHeaderComponent } from 'tds-ui/header';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { RouterModule } from '@angular/router';

import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TDSHeaderComponent,
    TDSAvatarModule,
    TDSDropDownModule,
    RouterModule,
    TDSBreadCrumbModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get userEmail(): string | null {
    return localStorage?.getItem('email') ?? '';
  }

  onLogout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  }
}
