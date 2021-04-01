import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./pages/user/register/register.component";
import {LoginComponent} from "./pages/user/login/login.component";
import {UserListComponent} from "./admin/user/user-list/user-list.component";
import {UserDetailComponent} from "./admin/user/user-detail/user-detail.component";
import {CategoryService} from "../service/category.service";
import {CategoryListComponent} from "./admin/category/category-list/category-list.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/users',
    component: UserListComponent
  },
  {
    path: 'admin/users/:id',
    component: UserDetailComponent
  },
  {
    path: 'admin/category',
    component: CategoryListComponent
  }
  // {
  //   path: 'users',
  //   component:LayoutComponent,
  //   loadChildren: () => import('./module/layout.module').then(module => module.LayoutModule)
  // },
  // {
  //   path: '',
  //   component:LayoutComponent,
  //   loadChildren: () => import('./module/layout.module').then(module => module.LayoutModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
