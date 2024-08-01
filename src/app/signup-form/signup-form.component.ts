import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validators';

@Component({
  selector: 'signup-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {

  form = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(3),UsernameValidator.cannotContainSpace]),
    password : new FormControl('',Validators.required)
  });

  get username() {
    return this.form.get("username");
  }

  get password() {
    return this.form.get("password");
  }
}
