import { Component } from '@angular/core';
import { ContactForm } from '../../models/contact-form';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ContactService } from '../../services/contact-service';

@Component({
  selector: 'app-get-in-touch',
  imports: [FormsModule, JsonPipe],
  templateUrl: './get-in-touch.html',
  styleUrl: './get-in-touch.css'
})
export class GetInTouch {
  formData: ContactForm = {
    firstName: '',
    lastName: '',
    emailId: '',
    service: '',
    message: ''
  };

  constructor(private contactService: ContactService) { }

  onSubmit() {
    console.log("Submitting", this.formData);
    this.contactService.sendMessage(this.formData).subscribe({
      next: (response) => {
        console.log("Email sent successfully", response);
        alert('Message sent');
        this.formData = {
          firstName: '',
          lastName: '',
          emailId: '',
          service: '',
          message: ''
        };
      },
      error: (err) => {
        console.log('Error sending message', err);
      }
    });
  }

}
