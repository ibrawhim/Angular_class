import { Component } from '@angular/core';
import { BehaviorserviceService } from '../behaviorservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behaviorchild2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviorchild2.component.html',
  styleUrl: './behaviorchild2.component.css'
})
export class Behaviorchild2Component {
  constructor(public behavior:BehaviorserviceService){}
  public behavior_obj:any={}
  ngOnInit(){
    this.behavior.behavior.subscribe(response=>{
      this.behavior_obj=response
      console.log(this.behavior_obj);
      
    })
  }
}
