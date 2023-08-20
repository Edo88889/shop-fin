import React, {useEffect, useState} from "react";
//styles
import {HeaderLogo, HeaderWrapper, LanguageImg, LanguageItem, Languages, NavbarWrapper} from './Header.styled';
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
        <HeaderWrapper>
            <HeaderLogo src={Logo} alt={'vaga-pharm-logo'}/>
            <NavbarWrapper>
                <Navbar/>
                <Languages>
                    <LanguageItem onClick={()=>setLanguage('am')}>
                        <LanguageImg src={flagAM}/>
                    </LanguageItem>
                    <LanguageItem onClick={()=>setLanguage('en')}>
                        <LanguageImg src={flagUSA}/>
                    </LanguageItem>
                </Languages>
            </NavbarWrapper>
        </HeaderWrapper>
    );
};