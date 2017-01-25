import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState, CounterAction } from '../../store';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @select() counter$: Observable<number>;
  constructor(private counterAction: CounterAction, private ngRedux: NgRedux<IAppState>) {
    this.counter$.subscribe(val=>{
      console.log(val);
    })
   }

  ngOnInit() {
  }

  increment():void {
    this.counterAction.increment();
  }

  decrement(): void {
    this.counterAction.decrement();
  }

}
