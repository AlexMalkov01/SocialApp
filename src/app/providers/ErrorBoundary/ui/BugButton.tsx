/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";

export const BugButton = () => {

    const [error , setError] = useState<boolean>(false);

    const  toggleError = () => {
        setError(prev =>!prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error("Buggy code");
        }

        return () => {

        };
    },[error]);
 
    return (
        <Button size={ButtonSize.SMALL} theme={ButtonTheme.OUTLINE} onClick={toggleError}>
            Error
        </Button>
    );
};