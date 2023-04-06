import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../../models/product/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products?: Product[];
  currentProduct: Product = {};
  currentIndex = -1;
  name = '';
  id = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentProduct = {};
    this.currentIndex = -1;

    this.productService.findByName(this.name).subscribe({
      next: (data) => {
        this.refreshList();
        if(this.products){
          for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].name == this.name){
              this.currentProduct = this.products[i];
              this.currentIndex = i;
            }
          }
        }
      },
      error: (e) => console.error(e),
    });
  }
}
