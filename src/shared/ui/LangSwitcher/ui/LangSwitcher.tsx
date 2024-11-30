import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

export interface ThemeSwitcherProps {
    className?:string;
}

export const LangSwitchers = ({ className }:ThemeSwitcherProps) => {

    const { t , i18n} = useTranslation(); 

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    
    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames("", {} , [ className ])}  onClick={toggleLanguage}>
             {t("translate")}
        </Button>
    );
};