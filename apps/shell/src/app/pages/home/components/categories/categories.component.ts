import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSCardModule } from "tds-ui/card";



@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, TDSCardModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  listData: Array<number> = [];

  ngOnInit(): void {
    this.listData = new Array(12).fill(0).map((_, index) => index);
  }
}
