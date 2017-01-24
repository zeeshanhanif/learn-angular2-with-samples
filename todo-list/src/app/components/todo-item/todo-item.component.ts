import { Component, OnInit } from '@angular/core';
import { ToDo } from './../../models/Todo';

@Component({
  selector: 'app-todo-item',
  inputs : ['todo'],
  host: {'class': 'app-todo-item'},
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  todo : ToDo
  constructor() { }

  ngOnInit() {
  }

}
