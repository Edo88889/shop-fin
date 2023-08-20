import React from "react";
import logo from '../../assets/images/footerlogo.png';
import tel from '../../assets/images/tel.png';
import posts from '../../assets/images/posts.png';
import location from '../../assets/images/location.png';
import facebook from '../../assets/images/facebooke.png';
import twiter from '../../assets/images/twiter.png';
import instagram from '../../assets/images/instagram.png';
import {
    FooterContacts,
    FooterContactsTitle,
    FooterContainer,
    FooterLogo,
    FooterLogoDiv,
    FooterProduct,
    FooterProductLi,
    FooterProductUl,
    FooterReference,
    FooterReferenceImg,
    FooterSocial, FooterSocialImg, FooterSocialReference,
    FooterSocialTitle,
    FooterTitleProduct,
    FooterWrapper
} from "./Footer.styled";

export const Footer: React.FC = () => {
    return (
        <FooterWrapper>
<FooterContainer>
    <FooterLogoDiv>
        <FooterLogo src={logo} alt='logo'/>
    </FooterLogoDiv>
    <FooterProduct>
        <FooterTitleProduct>ԱՐՏԱԴՐԱՆՔ</FooterTitleProduct>
        <FooterProductUl>
            <FooterProductLi> ՀԵՂՈՒԿՆԵՐ</FooterProductLi>
            <FooterProductLi>ՔՍՈՒՔՆԵՐ</FooterProductLi>
            <FooterProductLi>ՅՈՒՂԵՐ</FooterProductLi>
            <FooterProductLi>ՈԳԵԹՈՒՐՄԵՐ</FooterProductLi>
            <FooterProductLi>ՓՈՇԻՆԵՐ</FooterProductLi>
            <FooterProductLi>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</FooterProductLi>
        </FooterProductUl>
    </FooterProduct>
    <FooterContacts>
        <FooterContactsTitle>ԿԱՊ ՄԵԶ ՀԵՏ</FooterContactsTitle>

        <FooterReference href=''><FooterReferenceImg src={tel} alt='photo'/>  Զանգահարեք մեզ: +374 90 000 000</FooterReference>
        <FooterReference href=''> <FooterReferenceImg src={posts} alt='photo'/>  Էլ հասցե: @mail.ru</FooterReference>
        <FooterReference href=''><FooterReferenceImg src={location} alt='photo'/>  Երևան</FooterReference>
    </FooterContacts>
    <FooterSocial>
        <FooterSocialTitle>ՓՆՏՐԵՔ ՄԵԶ։</FooterSocialTitle>
        <FooterSocialReference href='#'><FooterSocialImg src={facebook} alt='facebook'/></FooterSocialReference>
    <FooterSocialReference href='#'> <FooterSocialImg src={twiter} alt='twiter'/></FooterSocialReference>
        <FooterSocialReference href='#'><FooterSocialImg src={instagram} alt='instagram'/></FooterSocialReference>
    </FooterSocial>
</FooterContainer>
        </FooterWrapper>
    );
};