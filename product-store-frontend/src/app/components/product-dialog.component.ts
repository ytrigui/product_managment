import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ data.name }}</mat-card-title>
        <mat-card-subtitle>\${{ data.price | number:'1.2-2' }}</mat-card-subtitle>
      </mat-card-header>
      <img   style="width: 100% ; height: 50%; max-height: 500px;  object-fit: cover"
             mat-card-image [src]="data.imageUrl || 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg'" alt="{{ data.name }}">
      <mat-card-content>
        <p>{{ data.description }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button color="primary" [routerLink]="'/edit/' + data.id">Edit</button>
        <button mat-button (click)="dialogRef.close()">Close</button>
      </mat-card-actions>
    </mat-card>
  `
})
export class ProductDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}
}
