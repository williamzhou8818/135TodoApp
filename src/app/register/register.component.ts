import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  bigestone: String;

  medone: String;
  medtwo: String;
  medthree: String;

  smlone: String;
  smltwo: String;
  smlthree: String;
  smlfour: String;
  smlfive: String;





  constructor(private validateService: ValidateService,
              private ngFlashMessageService: NgFlashMessageService,
              private authService: AuthService,
              private router: Router ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      bigestone: this.bigestone,
      medone: this.medone,
      medtwo: this.medtwo,
      medthree: this.medthree,
      smlone: this.smlone,
      smltwo: this.smltwo,
      smlthree: this.smlthree,
      smlfour: this.smlfour,
      smlfive: this.smlfive
    };
     if (!this.validateService.validateRegister(user)) {
       // this.flashMessage.danger('Please fill in all fields');
       // console.log('Please fill in all fields');
       this.ngFlashMessageService.showFlashMessage({
         // Array of messages each will be displayed in new line
      messages: ['Please fill in all fields'],
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true,
      // Time after which the flash disappears defaults to 2000ms
      timeout: false,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'danger'
       });
       return false;
     }
     if (!this.validateService.validateEmail(user.email)) {
       // this.flashMessage.warning('Please use validate Email');
       //  console.log('Please Use valideate Email');
              this.ngFlashMessageService.showFlashMessage({
         // Array of messages each will be displayed in new line
      messages: ['Please Use valideate Email'],
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true,
      // Time after which the flash disappears defaults to 2000ms
      timeout: false,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'danger'
       });
       return false;
     }

    // Register user
     this.authService.registerUser(user).subscribe(data => {
       if (data) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Thank you for registered, Login and View you Task'],
          dismissible: true,
          timeout: true,
          type: 'success'
       });
       this.router.navigate(['/login']);
       } else {
         this.ngFlashMessageService.showFlashMessage({
          messages: ['Someting went wrong'],
          dismissible: true,
          timeout: true,
          type: 'danger'
       });
          this.router.navigate(['/register']);
       }
     });
  }


}
