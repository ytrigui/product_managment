import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import {
  TextBoxModule,
  NumericTextBoxModule,
} from '@syncfusion/ej2-angular-inputs';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule,
    TextBoxModule,
    NumericTextBoxModule,
    ButtonModule,
    CardModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  constructor(public productService: ProductService, public router: Router) {}

  save() {
    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
