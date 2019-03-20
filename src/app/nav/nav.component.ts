import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
              private ngFlashMessageService: NgFlashMessageService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  onLogoutClick() {
    this.authService.logout();
    this.ngFlashMessageService.showFlashMessage({
          messages: ['Success LogOut'],
          dismissible: true,
          timeout: 3000,
          type: 'success'
       });
    this.router.navigate(['/register']);

  }
}
