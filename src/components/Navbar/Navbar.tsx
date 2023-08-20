import React from "react";
import {NavbarWrapper, MenuLink} from "./Navbar.styled";
import {useTranslation} from "react-i18next";
export const Navbar: React.FC = () => {
    const {t} = useTranslation()
    return (
        <NavbarWrapper>
            <MenuLink to='/'>{t('menu_main')}</MenuLink>
            <MenuLink to='/about'>{t('menu_about')}</MenuLink>
            <MenuLink to='/products'>{t('menu_products')}</MenuLink>
            <MenuLink to='/services'>{t('menu_services')}</MenuLink>
            <MenuLink to='/partners'>{t('menu_partners')}</MenuLink>
            <MenuLink to='/contactus'>{t('menu_feedback')}</MenuLink>
        </NavbarWrapper>
    )
};