import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToDoModel } from '../models/todolist.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  // todos: Object;
  delIdTemp = '5c8f876fa8f562b3de047960';
  bigTodos = [];
  oneBigThing: string;
  idForBigThing: number;
  setMaxBigTodo: number;
  lengthforBigTodo: number;
  displayInputBigTodo = true;
  medTodos  = [];
  medTodoString: string;
  idFormedTodo: number;
  setMaxMedTodo = 3;
  lengthforMedTodo: number;
  displayInputMedTodo = true;

  smlTodos  = [];
  smlTodoString: string;
  idForsmlTodo: number;
  setMaxSmlTodo = 5;
  lengthforSmlTodo = 0;
  displayInputSmlTodo = true;

  todos: any;
  medtodos: any;
  smltodos: any;
  id: String;

  completed = false;
  completedMed = false;

  constructor(private authService: AuthService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.oneBigThing = '';
    this.setMaxBigTodo = 1;
    this.lengthforBigTodo = 0;
    this.bigTodos = [];
    // medTodos array
    this.lengthforMedTodo = 0;

    // smlTodos array
    this.lengthforSmlTodo = 0;

    this.authService.getToDo().subscribe( todos => {
      this.bigTodos = todos;
      console.log(this.bigTodos);

    },
    err => {
      console.log(err);
      return false;
    });

    this.authService.getMedToDo().subscribe( medtodos => {
    this.medTodos = medtodos;
      console.log(this.medTodos);
    },
    err => {
      console.log(err);
      return false;
    });

      this.authService.getSmlToDo().subscribe( smltodos => {
      this.smlTodos = smltodos;
      console.log(this.smlTodos);
    },
    err => {
      console.log(err);
      return false;
    });

    // this.authService.getSmlToDo().subscribe( smltodos => {
    // this.smlTodos = smltodos;
    //   console.log(this.smlTodos);
    // },
    // err => {
    //   console.log(err);
    //   return false;
    // });


  }
  addOneBigThing() {
    if (this.oneBigThing.trim().length === 0) {
      return;
    }
    const getId = JSON.parse( localStorage.getItem('user') );
    console.log(getId.id);
    this.authService.addBigestThing(this.oneBigThing);
    //   this.bigTodos.push({
    //   id: this.idFormedTodo,
    //   bigestone: this.oneBigThing,
    //   completed: false,
    //   editig: false
    // });
      this.authService.getToDo().subscribe( todos => {
      this.bigTodos = todos;
      console.log(this.bigTodos);
    },
    err => {
      console.log(err);
      return false;
    });

      //  this.authService.getToDo().subscribe( res => {
      //         this.todos = res;
      //         console.log(this.todos);
      //       },
      //       err => {
      //         console.log(err);
      //         return false;
      //       });

    // do get data for api later
    this.oneBigThing = '';
    this.idForBigThing++;
    // this.lengthforBigTodo = this.bigTodos.length;
     this.lengthforBigTodo++;

    if ( this.bigTodos.length === 0) {
      console.log('BigestTodo Done');
      this.displayInputBigTodo = false;
    }
    // USE Concat to make one array list ??
     this.todos = [].concat(this.bigTodos);
     console.log(this.todos);
  }

  addMedTodo() {
    if (this.medTodoString.trim().length === 0) {
      return;
    }
    this.authService.addMedTodo(this.medTodoString);
    // this.medTodos.push({
    //   id: this.idFormedTodo,
    //   MedThingTitle: this.medTodoString,
    //   completed: false,
    //   editig: false
    // });


    this.authService.getMedToDo().subscribe( medtodos => {
    this.medTodos = medtodos;
      console.log(this.medTodos);
    },
    err => {
      console.log(err);
      return false;
    });

    // this.authService.getMedToDo().subscribe( medtodos => {
    //   this.medtodos = medtodos;
    //   console.log(this.medtodos);
    // },
    // err => {
    //   console.log(err);
    //   return false;
    // });


    this.medTodoString = '';
    this.idFormedTodo++;
    // this.lengthforMedTodo = this.medTodos.length;
    this.lengthforMedTodo++;

    if ( this.medTodos.length === 2) {
      console.log('MedTodo Done');
      this.displayInputMedTodo = false;
    }

    this.todos = [].concat(this.bigTodos, this.medTodos);
    console.log(this.todos);
  }

  addSmlTodo() {
    if (this.smlTodoString.trim().length === 0) {
      return;
    }
    this.authService.addSmlTodo(this.smlTodoString);
    // this.smlTodos.push({
    //   id: this.idFormedTodo,
    //   SmlThingTitle: this.smlTodoString,
    //   completed: false,
    //   editig: false
    // });

    // this.authService.getSmlToDo().subscribe( smltodos => {
    //   this.smltodos = smltodos;
    //   console.log(this.smltodos);
    // },
    // err => {
    //   console.log(err);
    //   return false;
    // });
      this.authService.getSmlToDo().subscribe( smltodos => {
      this.smlTodos = smltodos;
      console.log(this.smltodos);
    },
    err => {
      console.log(err);
      return false;
    });


    this.smlTodoString = '';
    this.idForsmlTodo++;
    // this.lengthforSmlTodo = this.smlTodos.length;
    this.lengthforSmlTodo++;

    if ( this.smlTodos.length === 4) {
      console.log('SmlTodo Done');
      this.displayInputSmlTodo = false;
    }

    this.todos = [].concat(this.bigTodos, this.medTodos, this.smlTodos);
    console.log(this.todos);
  }

deleteTodo(id: string): any {
    this.authService.loadToken();
    console.log('try to delete todo' + id);
    const url = `http://localhost:3000/users/todobigest/${id}`;
    const httpOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.authService.authToken.substring(3)
        });
    this.http.delete(url, {headers: httpOptions})
      .subscribe((res: any) => {
      });
            console.log('try to delete todo' + id);
            console.log(url);
    this.bigTodos = this.bigTodos.filter(bigestone => bigestone._id !== id);


}

// delete med todo front to api
deleteMedTodo(id: string): any {
    this.authService.loadToken();
    console.log('try to delete Med todo' + id);
    const url = `http://localhost:3000/users/delmedtodo/${id}`;
    const httpOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.authService.authToken.substring(3)
        });
    this.http.delete(url, {headers: httpOptions})
      .subscribe((res: any) => {
      });
            console.log('try to delete todo' + id);
            console.log(url);
    this.medTodos = this.medTodos.filter(medtodo => medtodo._id !== id);

    // this.bigTodos  = this.bigTodos.filter(  bigestone => bigestone.bigestone === );

}


// delete smltodo
deleteSmlTodo(id: string): any {
    this.authService.loadToken();
    console.log('try to delete Med todo' + id);
    const url = `http://localhost:3000/users/delsmltodo/${id}`;
    const httpOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.authService.authToken.substring(3)
        });
    this.http.delete(url, {headers: httpOptions})
      .subscribe((res: any) => {
      });
            console.log('try to delete todo' + id);
            console.log(url);
    this.smlTodos = this.smlTodos.filter(smltodo => smltodo._id !== id);

    // this.bigTodos  = this.bigTodos.filter(  bigestone => bigestone.bigestone === );

}


}
