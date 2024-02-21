import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  public firstname: any= ''
  constructor(public formbuilder:FormBuilder){}
    public formone = this.formbuilder.group({
      firstname:['',Validators.required],
      email:['', [Validators.email, Validators.required]],
      password:['']
    })

    ngOnInit(){
      // console.log(this.formone.value);
      console.log(this.formone.value['email']);
      this.firstname= this.formone.value['email']
      console.log(this.firstname)

      
      this.formone.controls['firstname'].setValue('')
      this.formone.controls['email'].setValue('')
      this.formone.controls['password'].setValue('')
    }
}
