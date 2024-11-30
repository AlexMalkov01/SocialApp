import { useTranslation } from "react-i18next";

const NotFoundPage = () => { 

    const { t } = useTranslation();

    return (
        <div>
            <h1>{ t("NotFoundPage")}</h1>
        </div>
    );
};

export default NotFoundPage;