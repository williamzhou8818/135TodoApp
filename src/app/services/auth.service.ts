import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService implements OnInit {
  authToken: any;
  user: any;
  bigTodos = [];
  medTodos = [];
  smlTodos = [];
  id: any;
  bigid: any;
  todos: any;

  constructor(private http: HttpClient) {
    //   this.getToDo().subscribe((res: []) => {
    //       this.bigTodos = res;
    //   });
    // //  console.log(`TEETT ${this.bigTodos}`);

    // // this.bigTodos = this.getToDo();
    // this.getMedToDo().subscribe((res: []) => {
    //     this.medTodos = res;
    // });

  }
ngOnInit() {

}
registerUser(user) {
       // tslint:disable-next-line:prefer-const
       let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
           .map(res => res); // don't need  make res.json()

   }
   // add One BigestThing

   addBigestThing(oneBigThing: any): void {
        if (oneBigThing.trim().length === 0) {
           return;
        }
        // const getId = localStorage.getItem('user'); // need to trasto json
        const getId = JSON.parse( localStorage.getItem('user') );
        console.log(getId.id);
        this.http.post('http://localhost:3000/users/bigesttodos/' + getId.id, {
           bigestone: oneBigThing
       }).subscribe((res: any) => {
           this.bigTodos.push({
               id: res.bigestone._id,
               bigestone: oneBigThing,
               completed: false
           });
       });

   }

   // add medtodo
   addMedTodo(medTodos: any): void {
       if (medTodos.trim().length === 0) {
           return;
       }
       const getId = JSON.parse(localStorage.getItem('user'));
       this.http.post('http://localhost:3000/users/medtodos/' + getId.id, {
         medtodo: medTodos
       }).subscribe((res: any) => {
            this.medTodos.push({
            id: res.medtodo._id,
            medtodo: medTodos,
            completed: false
            });
       });
   }

   // add smltodo
addSmlTodo(smlTodos: any): void {
       if (smlTodos.trim().length === 0) {
           return;
       }
       const getId = JSON.parse(localStorage.getItem('user'));
       this.http.post('http://localhost:3000/users/smltodos/' + getId.id, {
         smltodo: smlTodos
       }).subscribe((res: any) => {
            this.smlTodos.push({
            id: res.smltodo._id,
            smltodo: smlTodos,
            completed: false

            });

       });
}



   authenticateUser(user) {
       // tslint:disable-next-line:prefer-const
       let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/autheticate', user, {headers: headers})
           .map(res => res); // don't need  make res.json()
   }

   storeUserData(token, user) {
       localStorage.setItem('id_token', token);
       localStorage.setItem('user', JSON.stringify(user));
       this.authToken = token;
       this.user = user;
   }

   logout() {
       this.authToken = null;
       this.user = null;
       localStorage.clear();
   }



getToDo(): Observable<any>  {
     // tslint:disable-next-line:prefer-const
       this.loadToken();
        const httpOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.authToken.substring(3)
        });
        return this.http.get<any>('http://localhost:3000/users/todos', {headers: httpOptions})
                .map(res => res.user.bigestone);
                // don't need  make res.json()
}

getMedToDo(): Observable<any>  {
     // tslint:disable-next-line:prefer-const
       this.loadToken();
        const httpOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.authToken.substring(3)
        });
        return this.http.get<any>('http://localhost:3000/users/todosmed', {headers: httpOptions})
           .map(res => res.user.medtodo); // don't need  make res.json()
}

// deleteTodo(id: string): any {
//     console.log('try to delete todo' + id);
//     const url = `http://localhost:3000/users/todobigest/${id}`;
//     const httpOptions = new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'bearer ' + this.authToken.substring(3)
//         });
//     this.http.delete(url, {headers: httpOptions})
//       .subscribe((res: any) => {
//       });
//             console.log('try to delete todo' + id);
//             console.log(url);
//     // this.bigTodos  = this.bigTodos.filter(  bigestone => bigestone.bigestone === );

// }

getSmlToDo(): Observable<any>  {
     // tslint:disable-next-line:prefer-const
       this.loadToken();
        const httpOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.authToken.substring(3)
        });
        return this.http.get<any>('http://localhost:3000/users/todossml', {headers: httpOptions})
           .map(res => res.user.smltodo); // don't need  make res.json()
    }
  // fetch from localstroge
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

}
