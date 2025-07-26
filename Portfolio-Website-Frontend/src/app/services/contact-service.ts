import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080/send-email'; // Change if deployed

  constructor(private http: HttpClient) {}

  sendMessage(data:ContactForm): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  
}
