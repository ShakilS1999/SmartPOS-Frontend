import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../services/product';
import { ToastService } from '../../shared/toast.service';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css'
})
export class EditProduct implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(Product);
  private toast = inject(ToastService);

  productId = 0;
  productName = '';
  barcode = '';
  price = 0;
  stockQuantity = 0;

  ngOnInit(): void {
    this.productId = Number(
      this.route.snapshot.paramMap.get('id')
    );
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProductById(this.productId).subscribe({
      next: (res: any) => {
        this.productName = res.productName;
        this.barcode = res.barcode;
        this.price = res.price;
        this.stockQuantity = res.stockQuantity;
      },
      error: (err) => console.log(err)
    });
  }

  updateProduct() {
    const data = {
      productId: this.productId,
      productName: this.productName,
      barcode: this.barcode,
      price: this.price,
      stockQuantity: this.stockQuantity
    };

    this.productService.updateProduct(this.productId, data).subscribe({
      next: () => {
        this.toast.success('Product Updated!');
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
        this.toast.error('Update Failed!');
      }
    });
  }

}