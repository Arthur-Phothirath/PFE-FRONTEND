import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/user-create/create.component';
import { EditComponent } from './components/user-edit/edit.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users/list', component: UsersListComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/:id/view', component: ViewComponent },
  { path: 'user/:id/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
