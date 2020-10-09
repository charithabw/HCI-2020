import { Component, OnInit } from '@angular/core';


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

}
