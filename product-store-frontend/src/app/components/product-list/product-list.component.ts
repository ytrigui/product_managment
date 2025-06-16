import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);


import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import {
  GridComponent,
  GridModule,
  PageSettingsModel,
  PageService,
  SortService,
  FilterService,
  GroupService,
  RowDDService,
  SelectionService,
  ReorderService,
  ResizeService,

} from '@syncfusion/ej2-angular-grids';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import {DialogComponent, DialogModule} from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, GridModule, ButtonModule, ButtonModule,DialogModule],
  encapsulation: ViewEncapsulation.None,
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    RowDDService,
    SelectionService,
    ReorderService,
    ResizeService
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;

  @ViewChild('productDialog') public productDialog!: DialogComponent;

  products$!: Observable<Product[]>;

  currentProducts: Product[] = [];

  selectedProduct!: Product | null;
  public showDialog: boolean = false;


  public pageSettings: PageSettingsModel = { pageSize: 6 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
    this.products$.subscribe(products => {
      this.currentProducts = products;
    });
  }

  // Fixed continuous numbering
  getRowIndex(data: any): number {
    if (!this.currentProducts) return 0;
    const index = this.currentProducts.findIndex(p => p.id === data.id);
    return index >= 0 ? index + 1 : 0;
  }


  @ViewChild('confirmDialog') public confirmDialog!: DialogComponent;

  pendingDeleteId: string | null = null;

  public dialogButtons = [
    {
      click: () => this.confirmDelete(),
      buttonModel: { content: 'Yes', isPrimary: true, cssClass: 'e-danger' }
    },
    {
      click: () => this.confirmDialog.hide(),
      buttonModel: { content: 'No' }
    }
  ];


  delete(id: string): void {
    const productToDelete = this.currentProducts.find(p => p.id === id);
    if (!productToDelete) return;

    this.selectedProduct = productToDelete;
    this.pendingDeleteId = id;
    this.confirmDialog.show();
  }

  confirmDelete(): void {
    if (!this.pendingDeleteId) return;

    this.productService.delete(this.pendingDeleteId).subscribe(() => {
      this.products$ = this.productService.getAll();
      this.confirmDialog.hide();
      this.pendingDeleteId = null;
    });
  }

  openProductDetails(product: Product): void {
    this.selectedProduct = product;
    this.productDialog.show();
  }

}

