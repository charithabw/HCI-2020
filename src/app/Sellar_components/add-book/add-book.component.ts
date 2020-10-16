import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  url = "";
  file_remove = "";  
  box = ("box");
  x = ("");
  radius: number;
  conditon = 'x';

  isShow = (false);
  isProgrress = (false);
  constructor() { }

 

  ngOnInit(): void {
  }
 
  selectFile(event){
    if(event.target.files){
      
      
      this.isProgrress = !this.isProgrress;
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) =>{
        setTimeout(()=>{                         
          this.isProgrress = false;
     }, 3000);       
        this.isShow = !this.isShow;
        this.url = event.target.result;
        this.file_remove = ("file_remove");
        this.x = ("X");
      }
     
     
    }
  }
  closed(){    
    this.isShow = !this.isShow;
  }
  AddForm = new FormGroup({
    isbm:  new FormControl('', Validators.required),
    bname: new FormControl('', Validators.required),
    aname: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required)
  })
  get isbm(){return this.AddForm.get('isbm')}
  get bname(){return this.AddForm.get('bname')}
  get aname(){return this.AddForm.get('aname')}
  get year(){return this.AddForm.get('year')}
}
