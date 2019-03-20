// // BK
// import { Component, OnInit } from '@angular/core';
// import { ToDoModel } from '../models/todolist.model';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   model = new ToDoModel('', '', '', '', '', '', '', '', '');

//   private url = 'http://localhost:3000/todo';

//   constructor(private http: HttpClient) { }
//   // const httpOptions = {
//   //   headers: new HttpHeader({
//   //     'Content-Type': 'application/json'
//   //   });
//   // };
//   title = 'todo135';
//   oneBigest: String;
//   // AddOneToDo = [];
//   // addMeds = [];
//   // addFiveThings = [];
//   // msg = '';
//   // nCnt = 0;
//   // nCnt2 = 0;
//   // nCnt3 = 0;

// onAddToDoSubmit() {
//   // tslint:disable-next-line:prefer-const
//   let  data = {
//     tOne: this.model.oneBigest,
//     tMed_1: this.model.med_1,
//     tMed_2: this.model.med_2,
//     tMed_3: this.model.med_3,
//     tSmall_1: this.model.sml_1,
//     tSmall_2: this.model.sml_2,
//     tSmall_3: this.model.sml_3,
//     tSmall_4: this.model.sml_4,
//     tSmall_5: this.model.sml_5
//   };
//   this.http.post(this.url, data)
//     .subscribe(response => {
//       console.log(response);
//     });
//   // console.log(this.model.oneBigest);
//   // console.log(this.model.med_1);
//   // console.log(this.model.med_2);
//   // console.log(this.model.med_3);



//   // const data = this.model;
//   // this.http.post(this.url, data)
//   //  .subscribe( response => {
//   //    console.log(response);
//   //  });
// }
//   // addToDo(newToDo: string) {
//   //   this.nCnt = this.nCnt + 1 ;
//   //   if ((this.nCnt) === 3 ) {
//   //       // this.msg = `Please Only Add One Bigest TODO`;
//   //       alert('Please only add One Bigest ToDo');
//   //   } else if (newToDo) {
//   //        this.AddOneToDo.push(newToDo);
//   //   }
//   // }


//   // AddMed(newMed: string) {
//   //  this.nCnt2 = this.nCnt2 + 1;
//   //   if ((this.nCnt2) === 5 ) {
//   //    // this.msg = `Please Only Add Three Mid TODO`;
//   //     alert('Please only add Three Med ToDo');
//   //     // save to database;
//   //   } else if (newMed) {
//   //        this.addMeds.push(newMed);
//   //   }

//   // }

//   // AddFiveThings(newFiveThings: string) {
//   //  // this.nCnt3 = this.nCnt3 + 1;
//   //   if ((newFiveThings)) {
//   //     this.addFiveThings.push(newFiveThings);
//   //   }
//   // }

//   ngOnInit() {
//   }

// }



