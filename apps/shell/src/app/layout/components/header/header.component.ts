import { Component } from '@angular/core';
import { TDSHeaderComponent } from 'tds-ui/header';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TDSHeaderComponent, TDSAvatarModule, TDSDropDownModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
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
