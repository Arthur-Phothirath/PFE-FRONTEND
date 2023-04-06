import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    AddProductComponent,
  ],
})
export class ProductModule {}
