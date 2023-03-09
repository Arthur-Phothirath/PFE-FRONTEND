import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductsListComponent } from './components/product/products-list/products-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/user/index/index.component';
import { ViewComponent } from './components/user/view/view.component';
import { EditComponent } from './components/user/edit/edit.component';
import { CreateComponent } from './components/user/create/create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products/list', component: ProductsListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'user/index', component: IndexComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/:id/view', component: ViewComponent },
  { path: 'user/:id/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
