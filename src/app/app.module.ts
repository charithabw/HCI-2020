import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

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
import { AddBookComponent } from './Sellar_components/add-book/add-book.component';
import { CartComponent } from './cart_components/cart/cart.component';
import { PaymentComponent } from './payment_components/payment/payment.component';
import { TrackMyOrderComponent } from './tracking_components/track-my-order/track-my-order.component';
import { UserProfileComponent } from './Buyer_component/user-profile/user-profile.component';
import { PersonalSettingComponent } from './Buyer_component/personal-setting/personal-setting.component';
import { PrivacySettingComponent } from './Buyer_component/privacy-setting/privacy-setting.component';
import { OrderDetailsComponent } from './Buyer_component/order-details/order-details.component';
import { OrderViewComponent } from './Buyer_component/order-details/order-view/order-view.component';


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
    CartComponent,
    PaymentComponent,
    TrackMyOrderComponent,
    UserProfileComponent,
    PersonalSettingComponent,
    PrivacySettingComponent,
    OrderDetailsComponent,
    OrderViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    
    MatDialogModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
