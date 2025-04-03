import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgFor, RouterModule, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined; p: any;

  constructor(
    private productService: ProductService, 
    private snackBar: MatSnackBar, 
    private dialog: MatDialog, 
    public authService: AuthService) {}

  ngOnInit(): void {
    this.products$ = this.productService.products$;
    this.productService.loadProducts();
  }

  delete(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Produkt löschen',
        message: 'Möchtest du dieses Produkt wirklich löschen?'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(id).subscribe(() => {
          this.snackBar.open('Produkt erfolgreich gelöscht.', 'Schließen', { duration: 3000 });
          this.productService.loadProducts(); 
        });
      }
    });
  }
}
