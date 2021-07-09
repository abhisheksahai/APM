import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductDetailGuard } from '../product/product-detail/product-detail.guard';
import { ProductListComponent } from '../product/products/product-list.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
