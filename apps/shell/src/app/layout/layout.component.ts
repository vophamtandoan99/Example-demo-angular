import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TDSLayoutModule } from 'tds-ui/layout';
import { TDSHeaderComponent } from "tds-ui/header";
import { TDSAvatarModule } from "tds-ui/avatar";
import { TDSDropDownModule } from "tds-ui/dropdown";

@Component({
  standalone: true,
  imports: [RouterModule, TDSLayoutModule, TDSHeaderComponent, TDSAvatarModule, TDSDropDownModule],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  public year: number = new Date().getFullYear();

  get userEmail(): string | null {
    return localStorage?.getItem('email') ?? '';
  }

  onLogout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  }
}
