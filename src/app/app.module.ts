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
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AddBookComponent } from './Sellar_components/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
//import { SigninComponentComponent } from './signin-component/signin-component.component';
import { LoginUserComponent } from './Signin_component/login-user/login-user.component';
import { FeedbackComponent } from './Feedback_component/feedback/feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './Contact_us/contact-us/contact-us.component';


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
    //SigninComponentComponent,
    LoginUserComponent,
    FeedbackComponent,
    ContactUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatDialogModule,
    MatFormFieldModule,

    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
