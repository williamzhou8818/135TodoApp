import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  oneBigest: String;
  med_1: String;
  med_2: String;
  med_3: String;
  sml_1: String;
  sml_2: String;
  sml_3: String;
  sml_4: String;
  sml_5: String;
  constructor(private validateService: ValidateService,
              private ngFlashMessageService: NgFlashMessageService,
              private authService: AuthService,
              private router: Router ) { }

  onAddToDoSubmit() {
    const todos = {
      tOne: this.oneBigest,
      tMed_1: this.med_1,
      tMed_2: this.med_2,
      tMed_3: this.med_3,
      tSmall_1: this.sml_1,
      tSmall_2: this.sml_2,
      tSmall_3: this.sml_3,
      tSmall_4: this.sml_4,
      tSmall_5: this.sml_5

    };
      // console.log(todos.tOne);
    // will make some validate
    //
    // create Todos

    // this.authService.createTodos(todos).subscribe(data => {
    //   if (data) {
    //     // show success create todo messagse
    //     this.router.navigate(['/tasks']);
    //   } else {
    //     this.router.navigate(['/register']);
    //   }
    // });

  }

  ngOnInit() {
  }

}
