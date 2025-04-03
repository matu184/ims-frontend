import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard'; 
import { AdminGuard } from './guards/admin.guard';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: ProductCreateComponent, canActivate: [AdminGuard] },
      { path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AdminGuard] },
    ]
  }
];
