import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name = '';
  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  edit(){
    this.auth.currentUser.then((result) => { 
      result?.updateProfile({
          displayName: this.name
        }) 
    }); 
  }

}
