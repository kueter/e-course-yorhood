import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  AuthForm: FormGroup;

  @Input() _c: boolean;

  spin = false;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.AuthForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
        ),
      ]),
      password: new FormControl('', [Validators.required])
    });
  }

  get password() {
    return this.AuthForm.get('password');
  }

  get email() {
    return this.AuthForm.get('email');
  }

  login() {
    this.spin = true;
    setTimeout(() => {
      this.spin = false;
    }, 1000);
  }


}
