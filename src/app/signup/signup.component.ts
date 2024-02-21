import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface studentinterface {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  address: string,
  age: string
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})


export class SignupComponent {
constructor (public routes:Router){}
public signupinfo: studentinterface[]=[]
first_name= ''
last_name= ''
email= ''
password= ''
address= ''
age= '' 
message=''


ngOnInit (){
  const savedstudent = localStorage.getItem('student')
  if (savedstudent){
    this.signupinfo = JSON.parse(savedstudent)
  }
}

signup(){
  let newstudent = {
    firstname: this.first_name,
    lastname: this.last_name,
    email: this.email,
    password: this.password,
    address: this.address,
    age: this.age
}

 this.signupinfo.push(newstudent)
  console.log(this.signupinfo);
  localStorage.setItem('student',JSON.stringify(this.signupinfo))
  if(this.signupinfo){
    this.routes.navigate(['/signin'])
  }else {
    this.message= 'Registration fail'
  }
}
}