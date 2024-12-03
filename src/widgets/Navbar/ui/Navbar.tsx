/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal/ui/Modal";
import style from "widgets/Navbar/ui/Navbar.module.scss";

interface NavbarProps {
    className?: string;
}


export const Navbar = ({className}:NavbarProps) => {

    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev)=> !prev);
    },[]);

    return (
        <div className={classNames(style.navbar , {} , [className])}>
            <div>
                <h1>УБЛИКУС</h1>
                <p>Учебный центр для детей</p>
            </div>
            <Button theme={ButtonTheme.CLEAR_INVERTED} size={ButtonSize.MEDIUM} onClick={onToggleModal}>Войти</Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
            <h1>Hello!</h1>
            <p>This is a modal.</p>
            </Modal>
        </div>
    );
};