import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import UserListComponent
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

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

// import PurchaseRequest components
import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestLinesComponent } from './purchase-request/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewListComponent } from './purchase-request/purchase-request-review-list/purchase-request-review-list.component';
import { PurchaseRequestReviewDetailComponent } from './purchase-request/purchase-request-review-detail/purchase-request-review-detail.component';

// import LineItems components
// import { LineItemsListComponent } from './line-items/line-items-list/line-items-list.component';
import { LineItemsDetailComponent } from './line-items/line-items-detail/line-items-detail.component';
import { LineItemsCreateComponent } from './line-items/line-items-create/line-items-create.component';
import { LineItemsEditComponent } from './line-items/line-items-edit/line-items-edit.component';

// add more imports
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { injectComponentFactoryResolver } from '@angular/core/src/render3';

const routes: Routes = [
  {path: '', redirectTo: '/users/login', pathMatch: 'full'},  

  {path: 'users/list', component: UserListComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},// want the detail of this dude, so we use :id
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'users/login', component: UserLoginComponent},

  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent},

  {path: 'products/list', component: ProductListComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'products/create', component: ProductCreateComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},

  {path: 'prs/list', component: PurchaseRequestListComponent},
  {path: 'prs/detail/:id', component: PurchaseRequestDetailComponent},
  {path: 'prs/create', component: PurchaseRequestCreateComponent},
  {path: 'prs/edit/:id', component: PurchaseRequestEditComponent},
  {path: 'prs/lines/:id', component: PurchaseRequestLinesComponent},
  {path: 'prs/review-list', component: PurchaseRequestReviewListComponent},
  {path: 'prs/review-detail', component: PurchaseRequestReviewDetailComponent},

  // {path: 'prlis/list', component: LineItemsListComponent},
  {path: 'prlis/detail/:id', component: LineItemsDetailComponent},
  {path: 'prlis/create', component: LineItemsCreateComponent},
  {path: 'prlis/edit/:id', component: LineItemsEditComponent},

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
