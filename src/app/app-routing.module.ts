import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBodyComponent } from './home_components/home-body/home-body.component';
import { AddBookComponent } from './Sellar_components/add-book/add-book.component';
import { SellarHomeComponent } from './Sellar_components/sellar-home/sellar-home.component';
import { SellarOrdersComponent } from './Sellar_components/sellar-orders/sellar-orders.component';
import { SellarUpdateComponent } from './Sellar_components/sellar-update/sellar-update.component';

const routes: Routes = [
   { path: "",component: HomeBodyComponent, pathMatch: "full" }, 
  { path: 'seller', component: SellarHomeComponent },
  { path: 'order', component: SellarOrdersComponent },
  { path: 'update', component: SellarUpdateComponent },
  { path: 'add_book', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
