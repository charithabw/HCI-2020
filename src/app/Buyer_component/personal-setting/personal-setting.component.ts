import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-setting',
  templateUrl: './personal-setting.component.html',
  styleUrls: ['./personal-setting.component.css']
})
export class PersonalSettingComponent implements OnInit {

  updateForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    dname: new FormControl('', Validators.required),
    adders: new FormControl('', Validators.required),
  })
    get fname(){return this.updateForm.get('fname')}
    get lname(){return this.updateForm.get('lname')}
    get dname(){return this.updateForm.get('dname')}
    get addres(){return this.updateForm.get('adders')}
  constructor() { }

  ngOnInit(): void {
  }

}
