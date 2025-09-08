import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  
 
    formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted:', this.formData);
      form.resetForm();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
