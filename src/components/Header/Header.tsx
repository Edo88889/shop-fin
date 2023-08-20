import React from "react";

//styles
import * as S from './Header.styled';

//images
// @ts-ignore
import Logo from '../../assets/images/logo.png';

//components
import { Navbar } from "../Navbar";

export const Header: React.FC = () => {
    return (
        <S.HeaderWrapper>
            <S.HeaderLogo src={Logo} alt={'vaga-pharm-logo'}/>
            <S.NavbarWrapper>
                <Navbar />
                <S.Languages>
                    <S.LanguageItem>
                        <S.LanguageImg src={''} />
                    </S.LanguageItem>
                    <S.LanguageItem>
                        <S.LanguageImg src={''} />
                    </S.LanguageItem>
                    <S.LanguageItem>
                        <S.LanguageImg src={''} />
                    </S.LanguageItem>
                </S.Languages>
            </S.NavbarWrapper>
        </S.HeaderWrapper>
    );
};