import { configureStore } from "@reduxjs/toolkit";
import { StateShema } from "./stateShema";
import { counterActions, counterSlice } from "entities/Counter/model/slice/CounterSlice";

export function createReduxStore (initialState?: StateShema) {

    return configureStore<StateShema>({
        reducer: {
            counter: counterSlice.reducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
