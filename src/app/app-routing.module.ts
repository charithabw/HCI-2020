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
import { OrderViewComponent } from './Buyer_component/order-details/order-view/order-view.component';
import { SignupComponent } from './signup_component/signup/signup.component';
import { PlaceOrderComponent} from './Place_order_components/place-order/place-order.component';
import { SellarPaymentsComponent } from './Sellar_components/sellar-payments/sellar-payments.component';
import { SellarMyBooksComponent } from './Sellar_components/sellar-my-books/sellar-my-books.component';
import { SellarSoldBooksComponent } from './Sellar_components/sellar-sold-books/sellar-sold-books.component';
import { LoginUserComponent } from './Signin_component/login-user/login-user.component';
import { SingleBookComponent } from './single_book_components/single-book/single-book.component';


const routes: Routes = [
  { path: "",component: HomeBodyComponent, pathMatch: "full" },
  { path: 'personal', component: PersonalSettingComponent },
  { path: 'privacy', component: PrivacySettingComponent },
  { path: 'b_order', component: OrderDetailsComponent },
  { path: 'B_order_view', component: OrderViewComponent },

  { path: 'seller', component: SellarHomeComponent },
  { path: 'buyer', component: UserProfileComponent },
  { path: 'order', component: SellarOrdersComponent },
  { path: 'update', component: SellarUpdateComponent },
  { path: 'add_book', component: AddBookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment_methods', component: PaymentComponent },
  { path: 'track_my_order', component: TrackMyOrderComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'track_my_order', component: TrackMyOrderComponent },
  { path: 'place_order', component: PlaceOrderComponent },
  { path: 'payment', component: SellarPaymentsComponent },
  { path: 'my_books', component: SellarMyBooksComponent },
  { path: 'sold_books', component: SellarSoldBooksComponent },
  { path: 'place_order', component: PlaceOrderComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'singup', component: SignupComponent },
  { path: 'single_book', component: SingleBookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
