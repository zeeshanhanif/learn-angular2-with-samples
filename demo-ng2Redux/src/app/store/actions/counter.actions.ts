import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../';
//import { ILogin } from '../models';

@Injectable()
export class CounterAction {

    static INCREMENT_COUNTER: string = 'INCREMENT_COUNTER';
    static DECREMENT_COUNTER: string = 'DECREMENT_COUNTER';
    static INCREMENT_SUCCESS: string = 'INCREMENT_SUCCESS';
    static DECREMENT_SUCCESS: string = 'DECREMENT_SUCCESS';
    
    constructor(private ngRedux: NgRedux<IAppState>) {        
    }

    increment():void {
        this.ngRedux.dispatch({type : CounterAction.INCREMENT_COUNTER});
    }

    decrement(): void {
        this.ngRedux.dispatch({ type: CounterAction.DECREMENT_COUNTER });
    }
   

}