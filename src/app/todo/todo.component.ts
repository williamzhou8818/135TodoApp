import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: any;
  private url = 'http://localhost:3000/todo?email=william@com.au';
  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }

  ngOnInit() {
  }

}
