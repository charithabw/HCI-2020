import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home_components/header/header.component';
import { HomeBodyComponent } from './home_components/home-body/home-body.component';
import { CarouselComponent } from './home_components/carousel/carousel.component';
import { FooterComponent } from './home_components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SignINComponent } from './sign_components/sign-in/sign-in.component';
import { SellarHomeComponent } from './Sellar_components/sellar-home/sellar-home.component';
import { SellarOrdersComponent } from './Sellar_components/sellar-orders/sellar-orders.component';
import { SellarUpdateComponent } from './Sellar_components/sellar-update/sellar-update.component';



import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatGridListModule} from '@angular/material/grid-list';


import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';



import { AddBookComponent } from './Sellar_components/add-book/add-book.component';
import { LoginUserComponent } from './Signin_component/login-user/login-user.component';

import { CartComponent } from './cart_components/cart/cart.component';
import { PaymentComponent } from './payment_components/payment/payment.component';
import { TrackMyOrderComponent } from './tracking_components/track-my-order/track-my-order.component';
import { PlaceOrderComponent } from './Place_order_components/place-order/place-order.component';
import { UserProfileComponent } from './Buyer_component/user-profile/user-profile.component';
import { PersonalSettingComponent } from './Buyer_component/personal-setting/personal-setting.component';
import { PrivacySettingComponent } from './Buyer_component/privacy-setting/privacy-setting.component';
import { OrderDetailsComponent } from './Buyer_component/order-details/order-details.component';

import { OrderViewComponent } from './Buyer_component/order-details/order-view/order-view.component';

import { SignupComponent } from './signup_component/signup/signup.component';
import { SignupDetailsComponent } from './signup_component/signup-details/signup-details.component';

import { AboutusComponentComponent } from './aboutus_components/aboutus-component/aboutus-component.component';
import { FAQComponent } from './faq_components/f-aq/f-aq.component';



import { SellarPaymentsComponent } from './Sellar_components/sellar-payments/sellar-payments.component';
import { SellarMyBooksComponent } from './Sellar_components/sellar-my-books/sellar-my-books.component';
import { SellarSoldBooksComponent } from './Sellar_components/sellar-sold-books/sellar-sold-books.component';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { MatTabsModule } from '@angular/material/tabs';



//import { SigninComponentComponent } from './signin-component/signin-component.component';

import { FeedbackComponent } from './Feedback_component/feedback/feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './Contact_us/contact-us/contact-us.component';
import { TestimonialComponent } from './Testimonials/testimonial/testimonial.component';


import { SellarStteperComponent } from './Sellar_components/sellar-stteper/sellar-stteper.component';
import { SingleBookComponent } from './single_book_components/single-book/single-book.component';
import { PolicyComponentComponent } from './privacy_policy_Component/policy-component/policy-component.component';
import { AllBooksComponent } from './all_book_component/all-books/all-books.component';
import { TermsConditionComponent } from './TermsConditions_Components/terms-condition/terms-condition.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBodyComponent,
    CarouselComponent,
    FooterComponent,
    SignINComponent,
    SellarHomeComponent,
    SellarOrdersComponent,
    SellarUpdateComponent,
    AddBookComponent,
    LoginUserComponent,
    FeedbackComponent,
    ContactUsComponent,
    TestimonialComponent,
    CartComponent,
    PaymentComponent,
    TrackMyOrderComponent,
    PlaceOrderComponent,
    UserProfileComponent,
    PersonalSettingComponent,
    PrivacySettingComponent,
    OrderDetailsComponent,
    OrderViewComponent,
    SignupComponent,
    SignupDetailsComponent,

    AboutusComponentComponent,

    FAQComponent,

FAQComponent,



    SellarPaymentsComponent,
    SellarMyBooksComponent,
    SellarSoldBooksComponent,
    SellarStteperComponent,
    SingleBookComponent,

    PolicyComponentComponent,

    AllBooksComponent,
    TermsConditionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,

    MatGridListModule,

    MatTooltipModule,
    MatStepperModule,
    NgxSpinnerModule,



    MatProgressBarModule,
    MatRippleModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,

    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
