import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validating-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './validating-form.component.html',
  styleUrl: './validating-form.component.css'
})
export class ValidatingFormComponent {
  public firstname = ''
  public city = ''
  public check = ''
  submit(){

  }
}
