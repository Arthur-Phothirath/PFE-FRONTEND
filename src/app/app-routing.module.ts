import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/modules/home/home.module').then(m => m.HomeModule)},
  { path: 'auth', loadChildren: () => import('./components/modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'product', loadChildren: () => import('./components/modules/product/product.module').then(m => m.ProductModule) },
  { path: 'user', loadChildren: () => import('./components/modules/user/user.module').then(m => m.UserModule)},
  { path: 'profile', loadChildren: () => import('./components/modules/profile/profile.module').then(m => m.ProfileModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
