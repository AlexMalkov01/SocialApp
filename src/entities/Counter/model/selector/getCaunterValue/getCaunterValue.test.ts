import { StateShema } from "app/providers/StoreProvider/config/stateShema";
import { getCounterValue } from "./getCaunterValue";

describe("getCounterValue" , ()=> {
    test("test only" , () => {
        const state: StateShema = {
            counter: {
                value: 10
            }
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});