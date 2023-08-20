import React from "react";
import logo from '../../assets/images/footerlogo.png';
import tel from '../../assets/images/tel.png';
import posts from '../../assets/images/posts.png';
import location from '../../assets/images/location.png';
import facebook from '../../assets/images/facebooke.png';
import twiter from '../../assets/images/twiter.png';
import instagram from '../../assets/images/instagram.png';
import * as S from "./Footer.styled";

export const Footer: React.FC = () => {
    return (
        <S.FooterWrapper>
<S.FooterContainer>
    <S.FooterLogoDiv>S.
        <S.FooterLogo src={logo} alt='logo'/>
    </S.FooterLogoDiv>
    <S.FooterProduct>
        <S.FooterTitleProduct>ԱՐՏԱԴՐԱՆՔ</S.FooterTitleProduct>
        <S.FooterProductUl>
            <S.FooterProductLi> ՀԵՂՈՒԿՆԵՐ</S.FooterProductLi>
            <S.FooterProductLi>ՔՍՈՒՔՆԵՐ</S.FooterProductLi>
            <S.FooterProductLi>ՅՈՒՂԵՐ</S.FooterProductLi>
            <S.FooterProductLi>ՈԳԵԹՈՒՐՄԵՐ</S.FooterProductLi>
            <S.FooterProductLi>ՓՈՇԻՆԵՐ</S.FooterProductLi>
            <S.FooterProductLi>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</S.FooterProductLi>
        </S.FooterProductUl>
    </S.FooterProduct>
    <S.FooterContacts>
        <S.FooterContactsTitle>ԿԱՊ ՄԵԶ ՀԵՏ</S.FooterContactsTitle>

        <S.FooterReference href=''><S.FooterReferenceImg src={tel} alt='photo'/>  Զանգահարեք մեզ: +374 90 000 000</S.FooterReference>
        <S.FooterReference href=''> <S.FooterReferenceImg src={posts} alt='photo'/>  Էլ հասցե: @mail.ru</S.FooterReference>
        <S.FooterReference href=''><S.FooterReferenceImg src={location} alt='photo'/>  Երևան</S.FooterReference>
    </S.FooterContacts>
    <S.FooterSocial>
        <S.FooterSocialTitle>ՓՆՏՐԵՔ ՄԵԶ։</S.FooterSocialTitle>
        <S.FooterSocialReference href='#'><S.FooterSocialImg src={facebook} alt='facebook'/></S.FooterSocialReference>
    <S.FooterSocialReference href='#'> <S.FooterSocialImg src={twiter} alt='twiter'/></S.FooterSocialReference>
        <S.FooterSocialReference href='#'><S.FooterSocialImg src={instagram} alt='instagram'/></S.FooterSocialReference>
    </S.FooterSocial>
</S.FooterContainer>
        </S.FooterWrapper>
    );
};