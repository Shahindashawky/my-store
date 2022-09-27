import { ProductItemComponent } from './components/product-item/product-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutformComponent } from './components/checkoutform/checkoutform.component';
const routes: Routes = [
  { path: '', component: ProductlistComponent },
  { path: 'details/:id', component:  ProductdetailsComponent},
  { path: 'product', component:  ProductItemComponent},
  { path: 'cart', component: ShoppingcartComponent  },
  { path: 'checkout', component: CheckoutformComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
