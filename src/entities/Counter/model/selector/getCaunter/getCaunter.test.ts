import { StateShema } from "app/providers/StoreProvider/config/stateShema";
import { getCounter } from "./getCaunter";

describe("getCounter" , ()=> {
    test("test only" , () => {
        const state: StateShema = {
            counter: {
                value: 10
            }
        };
        expect(getCounter(state)).toEqual({value : 10});
    });
});