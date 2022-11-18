import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    status: '',
  };
  submitted = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  saveProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
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
      name: '',
      description: '',
      price: 0,
      status: 'on road',
    };
  }
}
