import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})


export class ProductFormComponent {
  product: Product = {
    name: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router) {}

  save() {
    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
