import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  

  constructor(private router: Router) { }
  myForm = new FormGroup({
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    
  }
  get Email(){return this.myForm.get('Email')}
  get Password(){return this.myForm.get('Password')}
  go(){    
    let email = this.myForm.get('Email').value;
    let password = this.myForm.get('Password').value;
    console.log(email);
    if (email === 'buyer@gmail.com' && password === 'buyer123'){      
      this.router.navigate(['/buyer']);
    }
    else if (email === 'sellar@gmail.com' && password === 'sellar123'){      
      this.router.navigate(['/seller']);
    }
    else{
      alert("Email or password Incorrect!!!");
    }  
  }
}
