import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoryListComponent} from './admin/category/category-list/category-list.component';
import {CategoryCreateComponent} from './admin/category/category-create/category-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './pages/user/login/login.component';
import {RegisterComponent} from './pages/user/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { UserDetailComponent } from './admin/user/user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
