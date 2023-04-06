import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
})
export class UserModule { }
