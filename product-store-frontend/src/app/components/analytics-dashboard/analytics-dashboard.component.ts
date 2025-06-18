import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent implements OnInit {
  totalProducts = 0;
  lastAddedProduct: Product | null = null;
  allProducts: Product[] = [];
  maxPriceProduct: Product | null = null;
  minPriceProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.totalProducts = products.length;
      this.lastAddedProduct = products[products.length - 1];// Assuming latest is last

      this.maxPriceProduct = products.reduce((max, curr) =>
        (curr.price > (max.price || 0)) ? curr : max, products[0]
      );

      // Min price product
      this.minPriceProduct = products.reduce((min, curr) =>
        (curr.price < (min.price || Infinity)) ? curr : min, products[0]
      );
    });


  }
}
