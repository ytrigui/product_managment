import { Routes } from '@angular/router';
import { WelcomeComponent }   from './components/welcome/welcome.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const routes: Routes = [
  { path: '',          component: WelcomeComponent },
  { path: 'products',  component: ProductListComponent },
  { path: 'add',       component: ProductFormComponent },
  { path: 'edit/:id',  component: ProductEditComponent }
];
