import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorserviceService {

  constructor() { }
  public behavior=new BehaviorSubject<any>({
    firstname: 'Herbert',
    lastname: 'dele',
    age: '23',
    email:'herbert@gmail.com'
  })
}
