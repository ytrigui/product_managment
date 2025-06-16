import { Component, OnInit } from '@angular/core';
import { CommonModule }       from '@angular/common';   // ← async, ngIf, ngFor live here
import { RouterLink }         from '@angular/router';
import { Observable }         from 'rxjs';

import { Product }            from '../../models/product.model';
import { ProductService }     from '../../services/product.service';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  standalone: true,                         // ← must be true in a stand-alone app
  imports: [CommonModule, RouterLink, MatButton],      // ← CommonModule is critical!
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

  delete(id: string): void {
    if (confirm('Are you sure?')) {
      this.productService.delete(id).subscribe(() => {
        this.products$ = this.productService.getAll();   // refresh list
      });
    }
  }
}
