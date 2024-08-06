import { Component } from '@angular/core';
import * as data from './products.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination-assignement',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule, FormsModule],
  templateUrl: './pagination-assignement.component.html',
  styleUrl: './pagination-assignement.component.css'
})
export class PaginationAssignementComponent {

  myProducts = (data as any).default;

  p: any;

  searchCriteria: any = "";

  search() {
    this.myProducts = this.myProducts.filter((prod: any) => prod.category.startsWith(this.searchCriteria));
  }

  ascending() {
    this.myProducts.sort((a: any, b: any) => a.price - b.price);
  }

  descending() {
    this.myProducts.sort((a: any, b: any) => b.price - a.price);
  }

}
