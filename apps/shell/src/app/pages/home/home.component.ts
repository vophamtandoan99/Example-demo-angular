import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { CategoriesComponent } from './components/categories/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PanelComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
