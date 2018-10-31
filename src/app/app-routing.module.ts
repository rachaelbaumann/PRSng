import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import UserListComponent
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

// import Vendor components
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

// import Product components
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

// add more imports
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { injectComponentFactoryResolver } from '@angular/core/src/render3';

const routes: Routes = [
  {path: '', redirectTo: '/users/list', pathMatch: 'full'},

  {path: 'users/list', component: UserListComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},// want the detail of this dude, so we use :id
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/edit/:id', component: UserEditComponent},

  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent},

  {path: 'products/list', component: ProductListComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'products/create', component: ProductCreateComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
