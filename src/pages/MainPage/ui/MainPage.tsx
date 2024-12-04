import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {

    const { t } = useTranslation("main");
    
    return (
        <div>
            <h1>{t("main-page")}</h1>
            <p>{t("main-page2")}</p>
            <Counter/>
        </div>
    );
};

export default MainPage;