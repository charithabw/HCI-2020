import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sellar-update',
  templateUrl: './sellar-update.component.html',
  styleUrls: ['./sellar-update.component.css']
})
export class SellarUpdateComponent {
  
  updateForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    sname: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    addrs1: new FormControl('', Validators.required),
    addrs2: new FormControl('', Validators.required),
  })
  get fname(){return this.updateForm.get('fname')}
  get lname(){return this.updateForm.get('lname')}
  get email(){return this.updateForm.get('email')}
  get sname(){return this.updateForm.get('sname')}
  get city(){return this.updateForm.get('city')}
  get addrs1(){return this.updateForm.get('addrs1')}
  get addrs2(){return this.updateForm.get('addrs2')}
 

  constructor() { }

  ngOnInit(): void {
  }
        

}
