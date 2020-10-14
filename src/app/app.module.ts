import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
<<<<<<< HEAD
import { AboutusComponentComponent } from './aboutus-component/aboutus-component.component';


=======
import { SellarPaymentsComponent } from './Sellar_components/sellar-payments/sellar-payments.component';
import { SellarMyBooksComponent } from './Sellar_components/sellar-my-books/sellar-my-books.component';
import { SellarSoldBooksComponent } from './Sellar_components/sellar-sold-books/sellar-sold-books.component';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { MatTabsModule } from '@angular/material/tabs';
>>>>>>> 770110ee712cea406d277763ee70303adb903c0c




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
<<<<<<< HEAD
    AboutusComponentComponent
    
    
    
    
=======
    SellarPaymentsComponent,
    SellarMyBooksComponent,
    SellarSoldBooksComponent,


>>>>>>> 770110ee712cea406d277763ee70303adb903c0c

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule, 
    MatRippleModule,   
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    
   

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
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
