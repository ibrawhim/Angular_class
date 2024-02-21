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
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  constructor (public routes:Router){}
  public email = '';
  public password = ''
  public message = ''
  public studarray: studentinterface[]=[]
  
  ngOnInit (){
    this.studarray = JSON.parse(localStorage['student'])
    console.log(this.studarray);
    
  }
  signin(){
    let currentuser = this.studarray.find((student, index)=> this.email===student.email && this.password===student.password)
    console.log(currentuser);
    if(currentuser){
      console.log('user found');
      localStorage.setItem('currentuser',JSON.stringify(currentuser))
      this.routes.navigate(['dashboard'])
    }else {
      this.message = 'user not found'
    }
  }
}
