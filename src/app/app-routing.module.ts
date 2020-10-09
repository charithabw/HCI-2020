import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBodyComponent } from './home_components/home-body/home-body.component';
import { AddBookComponent } from './Sellar_components/add-book/add-book.component';
import { SellarHomeComponent } from './Sellar_components/sellar-home/sellar-home.component';
import { SellarOrdersComponent } from './Sellar_components/sellar-orders/sellar-orders.component';
import { SellarUpdateComponent } from './Sellar_components/sellar-update/sellar-update.component';
import { CartComponent } from './cart_components/cart/cart.component';
import { PaymentComponent } from './payment_components/payment/payment.component';
import { TrackMyOrderComponent } from './tracking_components/track-my-order/track-my-order.component';
import { UserProfileComponent } from './Buyer_component/user-profile/user-profile.component';
import { PersonalSettingComponent } from './Buyer_component/personal-setting/personal-setting.component';
import { PrivacySettingComponent } from './Buyer_component/privacy-setting/privacy-setting.component';
import { OrderDetailsComponent } from './Buyer_component/order-details/order-details.component';

const routes: Routes = [
   { path: "",component: HomeBodyComponent, pathMatch: "full" },
   { path: 'personal', component: PersonalSettingComponent }, 
   { path: 'privacy', component: PrivacySettingComponent },
   { path: 'b_order', component: OrderDetailsComponent },  
  { path: 'seller', component: SellarHomeComponent },
  { path: 'buyer', component: UserProfileComponent },
  { path: 'order', component: SellarOrdersComponent },
  { path: 'update', component: SellarUpdateComponent },
  { path: 'add_book', component: AddBookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment_methods', component: PaymentComponent },
  { path: 'track_my_order', component: TrackMyOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
