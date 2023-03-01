import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      accept: ['', Validators.required]
    })
  }

  sendEmail(): any {
    let body = {
      name: this.contactForm.get('name').value,
      phone: this.contactForm.get('phone').value,
      email: this.contactForm.get('email').value,
      message: this.contactForm.get('message').value
    }
    console.log(body)
    this._http.post(environment.emailAPI + 'ajax/drdobreann@gmail.com', body).subscribe();
  }
}
