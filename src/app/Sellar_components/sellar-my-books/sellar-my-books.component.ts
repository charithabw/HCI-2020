import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellar-my-books',
  templateUrl: './sellar-my-books.component.html',
  styleUrls: ['./sellar-my-books.component.css']
})
export class SellarMyBooksComponent implements OnInit {

  isShow1 = (true);
  isShow2 = (true);
  isShow3 = (true);
  isShow4 = (true);
  isShow5 = (true);
  isShow6 = (true);

  constructor() { }

  ngOnInit(): void {
  }
  remove1(){
    this.isShow1 = false;
  }
  remove2(){
    this.isShow2 = false;
  }
  remove3(){
    this.isShow3 = false;
  }
  remove4(){
    this.isShow4 = false;
  }
  remove5(){
    this.isShow5 = false;
  }
  remove6(){
    this.isShow6 = false;
  }

}
