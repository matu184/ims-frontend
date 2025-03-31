import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { Location } from '../../models/location.model';

import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    quantity: 0,
    minimumQuantity: 0,
    categoryId: 0,
    locationId: 0,
    price: 0
  };

  categories: Category[] = [];
  locations: Location[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => this.categories = data);
    this.locationService.getLocations().subscribe((data: Location[]) => this.locations = data);
  }

  create(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      alert('Produkt erfolgreich erstellt!');
    });
  }
}
