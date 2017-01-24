import { Component, OnInit } from '@angular/core';
import { ToDoService } from './../../providers/ToDoService';
import { ToDo } from './../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  toDos : ToDo[];
  constructor(private todoService: ToDoService) {
    this.toDos = [];
    
    todoService.getToDoList()
    .do(todo=>console.log("Todo : "+todo.description))
    .subscribe(todo=>this.toDos.push(todo));

  }

  ngOnInit() {
  }

}
