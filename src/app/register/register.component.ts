import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator, passValidator } from '../register/validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username;
  password;
  confirmpwd;
  email;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.minLength(8)],
      confirmpwd: ['', passValidator],
      email: ['', emailValidator],
    });
  }

  onSubmit() {
    // console.log(this.form.controls.email);

    // this.form.markAsTouched();

    if (this.form.valid) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
  }

}
