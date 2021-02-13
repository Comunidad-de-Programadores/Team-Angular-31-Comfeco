import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  mode !: string;
  actionCode !: string;
  actionCodeChecked = false;
  newPassword = '';
  confirmPassword = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      // if we didn't receive any parameters, 
      // we can't do anything
      if (!params) this.router.navigate(['/login']);

      this.mode = params['mode'];
      this.actionCode = params['oobCode'];

      if(params['mode'] === 'resetPassword') {
        // Verificar si el código de reseteo es válido
        this.auth.verifyPasswordResetCode(this.actionCode).then(email => {
          this.actionCodeChecked = true;
        }).catch(e => {
          // Invalid or expired action code
          alert(e);
          this.router.navigate(['/login']);
        });
      }
     });

  }

  handleResetPassword(){
    if (this.newPassword != this.confirmPassword) { 
      alert('New Password and Confirm Password do not match'); 
      return; 
    } 
    // Save the new password.   
    this.auth.confirmPasswordReset(
      this.actionCode, 
      this.newPassword
    ).then(resp => { 
      // Password reset has been confirmed and new password updated.    
      alert('New password has been saved');
      this.router.navigate(['/login']); }).catch(e => { 
        // Error occurred during confirmation. 
        alert(e); 
      }); 
  }
}
