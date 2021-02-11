import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = 'kevin@comfeco.com';
  password = '123456';

  constructor(
    private auth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.signInWithEmailAndPassword(this.email,this.password)
    .then( res => {
      console.log(res);
      this.router.navigate(['profile']);
    })
    .catch(err => console.error('Error cl:',err));
  }

  register(){
    this.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then((user) => {
      // Signed in
      // ...
      console.log(user);
      this.router.navigate(['profile']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,': ',errorMessage);
    });
  }

}
