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
    message: '',
    phone:''
  };

  onSubmit(form: any) {
    if (form.valid) {
      // handle submission (API call etc.)
      console.log('Form submitted', this.model);
      alert('Message sent (demo). Check console for payload.');
      form.resetForm();
    } else {
      alert('Please fill required fields correctly.');
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
