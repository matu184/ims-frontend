import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'create', component: ProductCreateComponent }
    ]
  }
];
