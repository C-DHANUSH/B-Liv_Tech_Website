import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

   model = {
    fullName: '',
    email: '',
    message: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Submitted model:', this.model);
      // add your submission logic here (HTTP, service, etc.)
      alert('Message sent — check console (demo)');
      form.resetForm();
    } else {
      alert('Please fill required fields correctly.');
    }
  }
 
  
  constructor() { }

  ngOnInit(): void {
  }

}
