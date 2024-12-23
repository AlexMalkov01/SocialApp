import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateShema } from "../config/stateShema";

export interface StoreProviderProps {
    children?: ReactNode,
    initialState?: StateShema
}
export const StoreProvider = ({children , initialState}:StoreProviderProps) => {

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
        {children}
        </Provider>
    );
};