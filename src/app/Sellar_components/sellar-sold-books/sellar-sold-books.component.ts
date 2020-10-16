import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sellar-sold-books',
  templateUrl: './sellar-sold-books.component.html',
  styleUrls: ['./sellar-sold-books.component.css']
})
export class SellarSoldBooksComponent implements OnInit {
  

  isShow1 = (true);
  isShow2 = (true);
  isShow3 = (true);
  isShow4 = (true);
  isShow5 = (true);
  isShow6 = (true);

  constructor() { 
   
  }

  ngOnInit(): void {
  }
  remove1(){
    alert("Do you want to delete this book!!!");
    this.isShow1 = false;
  }
  remove2(){
    alert("Do you want to delete this book!!!");
    this.isShow2 = false;
  }
  remove3(){
    alert("Do you want to delete this book!!!");
    this.isShow3 = false;
  }
  remove4(){
    alert("Do you want to delete this book!!!");
    this.isShow4 = false;
  }
  remove5(){
    alert("Do you want to delete this book!!!");
    this.isShow5 = false;
  }
  remove6(){
    alert("Do you want to delete this book!!!");
    this.isShow6 = false;
  }
}
