import React, {useEffect, useState} from "react";
//styles
import * as S from './Header.styled';
//images
import Logo from '../../assets/images/logo.png';
import flagAM from '../../assets/images/flag.png';
import flagUSA from '../../assets/images/flagUSA.png';
//components
import {Navbar} from "../Navbar";
import {useTranslation} from "react-i18next";

export const Header: React.FC = () => {
    const { i18n } = useTranslation();
    const [language , setLanguage] = useState('am')
    const storageLanguage:string = window.localStorage.getItem('language')||'am';
    useEffect(() => {
        if (storageLanguage !== null) {
            window.localStorage.setItem('language', language);
            i18n.changeLanguage(storageLanguage);
        }
    }, [storageLanguage,language]);
    return (
        <S.HeaderWrapper>
            <S.HeaderLogo src={Logo} alt={'vaga-pharm-logo'}/>
            <S.NavbarWrapper>
                <Navbar/>
                <S.Languages>
                    <S.LanguageItem onClick={()=>setLanguage('am')}>
                        <S.LanguageImg src={flagAM}/>
                    </S.LanguageItem>
                    <S.LanguageItem onClick={()=>setLanguage('en')}>
                        <S.LanguageImg src={flagUSA}/>
                    </S.LanguageItem>
                </S.Languages>
            </S.NavbarWrapper>
        </S.HeaderWrapper>
    );
};