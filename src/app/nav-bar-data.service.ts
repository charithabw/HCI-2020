import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarDataService {

  private subject = new Subject<any>();
  text$ = this.subject.asObservable();

  
  constructor() { }
    setText(x: string){
      this.subject.next(x);
    }

}
