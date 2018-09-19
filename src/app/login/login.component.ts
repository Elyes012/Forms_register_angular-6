import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password;
  constructor(public router: Router ) { }

  ngOnInit() {
  }

login() {
  console.log(this.username);
  console.log(this.password);

if (this.username === 'admin' && this.password === '12345') {
alert('Logged in successfully');
this.router.navigateByUrl('home');
} else {
  alert('Invalid Loged');
}
}
}
