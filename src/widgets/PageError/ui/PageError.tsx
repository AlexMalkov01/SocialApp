import { classNames } from "shared/lib/classNames/classNames";
import style from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";


interface PageErrorProps {
    className?: string;
}


export const PageError = ({className}:PageErrorProps) => {

    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();  // Assuming window.location.reload() method reloads the page
    };

    return (
        <div className={classNames(style.PageError , {} , [className])}>
           <p>{t("Page Error")} </p>
            <Button onClick={reloadPage}>
                {t("rerender")}
            </Button>
        </div>
    );
};