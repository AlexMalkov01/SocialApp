import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button";

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
        <Button onClick={toggleError}>
            Error
        </Button>
    );
};