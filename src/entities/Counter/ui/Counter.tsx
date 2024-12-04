import { classNames } from "shared/lib/classNames/classNames";
import style from "./Counter.module.scss";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/CounterSlice";
import { StateShema } from "app/providers/StoreProvider/config/stateShema";
import { getCounterValue } from "../model/selector/getCaunterValue/getCaunterValue";
import { useTranslation } from "react-i18next";
export const Counter = () => {

    const disputch = useDispatch();
    const counterValue = useSelector<StateShema>(getCounterValue);
    const {t , i18n} = useTranslation();

    const increment = () => {
        disputch(counterActions.increment());
    };

    const decrement = () => {
        disputch(counterActions.decrement());
    };

    return (
        <div className={classNames(style.counter , {} , [])}>
            <h1 data-testid="value-title" >
                {t("counter")} : {counterValue}
            </h1>
            <Button 
            data-testid="increment-btn"
            size={ButtonSize.SMALL} 
            theme={ButtonTheme.OUTLINE} 
            onClick={increment}>
                { t("increment")}
            </Button>
            <Button 
            data-testid="decrement-btn"
            size={ButtonSize.SMALL} 
            theme={ButtonTheme.OUTLINE} 
            onClick={decrement}>
                {t("decrement")}
            </Button>
        </div>
    );
};