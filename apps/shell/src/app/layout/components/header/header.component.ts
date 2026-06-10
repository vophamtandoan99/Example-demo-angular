import { Component } from '@angular/core';
import { TDSHeaderComponent } from 'tds-ui/header';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TDSHeaderComponent,
    TDSAvatarModule,
    TDSDropDownModule,
    NgIf,
    RouterModule,
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
