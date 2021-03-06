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
import { SellarStteperComponent } from './Sellar_components/sellar-stteper/sellar-stteper.component';
import { SingleBookComponent } from './single_book_components/single-book/single-book.component';
import { AboutusComponentComponent } from './aboutus_components/aboutus-component/aboutus-component.component';
import { PolicyComponentComponent } from './privacy_policy_Component/policy-component/policy-component.component';
import { AllBooksComponent } from './all_book_component/all-books/all-books.component';
import { FeedbackComponent } from './Feedback_component/feedback/feedback.component';
import { ContactUsComponent } from './Contact_us/contact-us/contact-us.component';
import { FAQComponent } from './faq_components/f-aq/f-aq.component';
import { TermsConditionComponent } from './TermsConditions_Components/terms-condition/terms-condition.component';
import { TestimonialComponent } from './Testimonials/testimonial/testimonial.component';



const routes: Routes = [
  { path: "",component: HomeBodyComponent, pathMatch: "full" },
  { path: 'personal', component: PersonalSettingComponent },
  { path: 'privacy', component: PrivacySettingComponent },
  { path: 'b_order', component: OrderDetailsComponent },
  { path: 'policy', component: PolicyComponentComponent },
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
  { path: 'sellar_stepper', component: SellarStteperComponent },
  { path: 'single_book', component: SingleBookComponent },
  { path: 'aboutus', component: AboutusComponentComponent },
  { path: 'book_list', component: AllBooksComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'term&condition', component: TermsConditionComponent },
  { path: 'review', component: TestimonialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
