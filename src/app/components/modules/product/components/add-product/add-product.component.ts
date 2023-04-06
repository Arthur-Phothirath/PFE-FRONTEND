import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../../models/product/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price_init: 0,
    price_sale: 0,
    status: 'Unpublished',
    categories: [1],
  };
  submitted = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  saveProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
      price_init: this.product.price_init,
      price_sale: this.product.price_sale,
      status: this.product.status,
      categories: this.product.categories,
    };

    this.productService.create(data).subscribe({
      next: (res) => {
        // console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: 'Test',
      description: 'Test',
      price_init: 0,
      price_sale: 0,
      status: 'Unpublished',
      categories: [1],
    };
  }
}
