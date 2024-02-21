import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorserviceService } from '../behaviorservice.service';

@Component({
  selector: 'app-behaviorchild1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviorchild1.component.html',
  styleUrl: './behaviorchild1.component.css'
})
export class Behaviorchild1Component {
  constructor(public behavior: BehaviorserviceService){}
public behavior_array:any=[
  {
    firstname: 'johnson',
    lastname: 'herbert',
    age:'30',
    email:'herbertaa@gmail.com',
  },
  {
    firstname: 'captain',
    lastname: 'college',
    age:'30',
    email:'captaincollege@gmail.com',
  },
  {
    firstname: 'dele',
    lastname: 'ademola',
    age:'30',
    email:'deleademola@gmail.com',
  },
]
// next is a function that we use to update, here, we update our list value from the other page.
sendlist(list:any){
this.behavior.behavior.next(list)
}
}
