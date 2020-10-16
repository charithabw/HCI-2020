import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellar-orders',
  templateUrl: './sellar-orders.component.html',
  styleUrls: ['./sellar-orders.component.css']
})
export class SellarOrdersComponent implements OnInit {

  isShow1 = true;
  isShow2 = true;
  isShow3 = true;
  isShow4 = true;
  isShow5 = true; 
  constructor() { }

  ngOnInit(): void {
  }

  delete1(){
    this.isShow1 = !this.isShow1;
  }
  delete2(){
    this.isShow2 = !this.isShow2;
  }
  delete3(){
    this.isShow3 = !this.isShow3;
  }
  delete4(){
    this.isShow4 = !this.isShow4;
  }
  delete5(){
    this.isShow5 = !this.isShow5;
  }
  accept(){

  }
}
