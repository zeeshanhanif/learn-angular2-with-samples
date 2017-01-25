import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

import { CounterAction } from '../actions';

@Injectable()
export class CounterEpics {

    constructor() { }

    increment = (action$) =>
        action$.ofType(CounterAction.INCREMENT_COUNTER)
        .do((val)=> {
            console.log("In Counter Epic - Increment: "+val);
        })
        .switchMap(() => {
            return Observable.of({
                type: CounterAction.INCREMENT_SUCCESS
            });
        });

    decrement = (action$) =>
        action$.ofType(CounterAction.DECREMENT_COUNTER)
        .do((val)=> {
            console.log("In Counter Epic - Decrement : "+val);
        })        
        .switchMap(() => {
            return Observable.of({
                type: CounterAction.DECREMENT_SUCCESS
            });
        });
}