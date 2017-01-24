import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from './../models/Todo';

@Injectable()
export class ToDoService {

    private toDos: ToDo[];
    constructor(){        
        this.generateToDos();
    }

    getToDoList(): Observable<ToDo>{
        //return Observable.from(this.toDos).filter(todo=> !todo.isCompleted);
        return Observable.from(this.toDos);
    }

    getCompletedToDoList(){
        return Observable.from(this.toDos).filter(todo=> todo.isCompleted);
    }

    private generateToDos(): void{
        this.toDos = [  
            new ToDo("First",false),
            new ToDo("Second",true),
            new ToDo("Thrid",true),
            new ToDo("Forth",false),
            new ToDo("Fifth",true),
            new ToDo("Sixth",false),
            new ToDo("Seventh",true),
            new ToDo("Eight",false),
            new ToDo("Ningth",false),
            new ToDo("Tenth",false),
        ];
    }
}