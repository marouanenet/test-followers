import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactMethods = [{id:1,name:"email"},{id:2,name:"phone"},{id:3,name:"sms"}];

  log(string: any) {
    console.log(string);
  }

  submit(f: any) {
    console.log(f);
  }


}
