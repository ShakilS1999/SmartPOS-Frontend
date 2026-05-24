import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../services/product';
import { ToastService } from '../../shared/toast.service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

  private productService = inject(Product);
  private router = inject(Router);
  private toast = inject(ToastService);

  productName = '';
  barcode = '';
  price = 0;
  stockQuantity = 0;

  saveProduct() {
    const data = {
      productName: this.productName,
      barcode: this.barcode,
      price: this.price,
      stockQuantity: this.stockQuantity
    };

    this.productService.addProduct(data).subscribe({
      next: () => {
        this.toast.success('Product Added!');
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
        this.toast.error('Add Product Failed!');
      }
    });
  }

}