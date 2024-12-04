import { useSelector } from "react-redux";
import { StateShema } from "app/providers/StoreProvider/config/stateShema";
import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCaunter/getCaunter";
import { CounterShema } from "../../types/counterShema";

export const getCounterValue = createSelector(
    getCounter,
    (counter:CounterShema) => counter.value
);