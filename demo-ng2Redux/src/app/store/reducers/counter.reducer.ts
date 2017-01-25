import { CounterAction } from '../actions/counter.actions';
import {ICounter} from '../models/ICounter';

const INITIAL_STATE: number = 0;

interface IInitialState {
    counter: ICounter;
}

const InitialState: IInitialState = {
    counter: {counter:0}
}

export function counterReducer(state: IInitialState = InitialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case CounterAction.INCREMENT_COUNTER:
      return Object.assign({}, state, {counter:{ counter: state.counter.counter+1 }});
    case CounterAction.DECREMENT_COUNTER:
  return Object.assign({}, state, {counter:{ counter: state.counter.counter-1 }});
    default:
      return state;
  }
}
