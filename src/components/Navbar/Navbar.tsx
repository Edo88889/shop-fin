import React from "react";
import {NavbarWrapper, Services, About, Partners, ContactUs, Home, Products} from "./Navbar.styled";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


export const Navbar: React.FC = () => {
    const {t} = useTranslation()
    return (
        <NavbarWrapper>
            <Home to='/'>{t('menu_main')}</Home>
            <About to='/about'>{t('menu_about')}</About>
            <Products to='/products'>{t('menu_products')}</Products>
            <Services to='/services'>{t('menu_services')}</Services>
            <Partners to='/partners'>{t('menu_partners')}</Partners>
            <ContactUs to='/contactus'>{t('menu_feedback')}</ContactUs>
        </NavbarWrapper>
    )
};