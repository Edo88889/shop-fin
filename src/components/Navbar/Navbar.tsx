import React from "react";
import * as S from "./Navbar.styled";
import {useTranslation} from "react-i18next";
export const Navbar: React.FC = () => {
    const {t} = useTranslation()
    return (
        <S.NavbarWrapper>
            <S.MenuLink to='/'>{t('menu_main')}</S.MenuLink>
            <S.MenuLink to='/about'>{t('menu_about')}</S.MenuLink>
            <S.MenuLink to='/products'>{t('menu_products')}</S.MenuLink>
            <S.MenuLink to='/services'>{t('menu_services')}</S.MenuLink>
            <S.MenuLink to='/partners'>{t('menu_partners')}</S.MenuLink>
            <S.MenuLink to='/contactus'>{t('menu_feedback')}</S.MenuLink>
        </S.NavbarWrapper>
    )
};