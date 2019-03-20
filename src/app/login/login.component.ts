import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authService: AuthService,
              private ngFlashMessageService: NgFlashMessageService,
              private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
   const user = {
     username: this.username,
     password: this.password
   };
   this.authService.authenticateUser(user).subscribe((data: any) => {
     if (data.success) {
       this.authService.storeUserData(data.token, data.user);
       this.ngFlashMessageService.showFlashMessage({
          messages: ['You Are now logged'],
          dismissible: true,
          timeout: false,
          type: 'success'
       });
          this.router.navigate(['/tasks']);
     } else {
          this.ngFlashMessageService.showFlashMessage({
          messages: [data.msg],
          dismissible: true,
          timeout: false,
          type: 'danger'
       });
          this.router.navigate(['/login']);
     }
     // console.log(data);
   });
  }

}
