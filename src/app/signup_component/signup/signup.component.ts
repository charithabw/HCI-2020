import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  topics = ['Badulla','Malabe','Colombo'];

  topicHasError = true;

 

  validateTopic (value){

    if(value === 'default'){
      this.topicHasError = true;

    }
    else{
      this.topicHasError = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
