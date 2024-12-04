import { CounterShema } from '../types/counterShema';
import { counterActions, counterSlice } from './CounterSlice';

describe("CounterSlice" , ()=> {
    test("test only decrement" , () => {
        const state: CounterShema = {
                value: 10
        };
        expect(counterSlice.reducer(state , counterActions.decrement())).toEqual({value:9});
    });

    test("test only increment" , () => {
        const state: CounterShema = {
                value: 10
        };
        expect(counterSlice.reducer(state , counterActions.increment())).toEqual({value:11});
    });

    test("test " , () => {
       
        expect(counterSlice.reducer(undefined , counterActions.increment())).toEqual({value:1});
    });
});