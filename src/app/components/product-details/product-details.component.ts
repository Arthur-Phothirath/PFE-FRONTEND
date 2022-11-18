import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentProduct: Product = {
    name: '',
    description: '',
    price: 0,
    status: '',
  };
  message = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProduct(this.route.snapshot.params['id']);
    }
    console.log(this.currentProduct);
    console.log(this.viewMode);
  }

  getProduct(id: number): void {
    this.productService.get(id).subscribe({
      next: (data) => {
        this.currentProduct = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: string): void {
    const data = {
      name: this.currentProduct.name,
      description: this.currentProduct.description,
      status: status,
    };

    this.message = '';

    this.productService.update(this.currentProduct.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentProduct.status = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  updateProduct(): void {
    this.message = '';

    this.productService
      .update(this.currentProduct.id, this.currentProduct)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This product was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteProduct(): void {
    this.productService.delete(this.currentProduct.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/products']);
      },
      error: (e) => console.error(e),
    });
  }
}
