import React from "react";
import img from '../../assets/images/img.png'
import decor from '../../assets/images/decor.png'
import accessories from '../../assets/images/accssesor.png'
import accessoriesdecor from '../../assets/images/accessesordecor.png'
import vaga from '../../assets/images/vaga.png'
import mapImg from '../../assets/images/map.png'
import mapDecor from '../../assets/images/mapdecor.png'
import {Mocks} from './Mocks'
import {
    HomeWrapper,
    Title,
    Text,
    ReadBtn,
    HomeImg,
    ImgDecoration,
    Div,
    DivBandages,
    DivMocks,
    BandagesImg,
    BandageTitle,
    BandageSize,
    BandageLayers,
    BandageCount,
    TitleProduct,
    BandageBtn,
    AccessoriesDiv,
    AccessoriesTitle,
    AccessoriesText,
    AccessoriesBtn,
    AccessoriesImg,
    AccessoriesDecor,
    AccessoriesInformation,
    PartnersTitle,
    VagaFarmImg,
    PartnersBtn,
    ContactDiv,
    ContactText,
    ContactImg,
    ContactDecorImg,
    ContactGlobalDiv,
    ContactForm, FormName, FormEmail, FormMessage, FormBtn, VagaImg, VagaGlobalDiv, BandageVector, BandageButton
} from "./Home.styled";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const handleSendMessage = () => {
        if (1 === 1) {
            navigate('/thank-you/contact')
        }
    }
    const {t} = useTranslation()
    return (
        <>
            <HomeWrapper>
                <Div>
                    <Title>{t('home_banner_title')}</Title>
                    <Text>{t('home_banner_desc')}</Text>
                    <ReadBtn>{t('home_banner_button')}</ReadBtn>
                </Div>
                <HomeImg src={img} alt='img'/>
                <ImgDecoration src={decor} alt='img-decoration'/>
            </HomeWrapper>
            <TitleProduct>ԱՐՏԱԴՐԱՆՔ</TitleProduct>
            <DivBandages>
                <>
                    {Mocks.map(({id, img, title, size, count, layers, vector}) => (
                        <DivMocks key={id}>
                            <BandagesImg src={img} alt='bandage'/>
                            <BandageTitle>{title}</BandageTitle>
                            <BandageSize>{size}</BandageSize>
                            <BandageLayers>{layers}</BandageLayers>
                            <BandageCount>{count}</BandageCount>
                            <BandageVector src={vector}/>
                            <BandageButton>ՏԵՍՆԵԼ Ավելին</BandageButton>
                        </DivMocks>
                    ))}
                </>
                <BandageBtn>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</BandageBtn>
            </DivBandages>
            <AccessoriesDiv>
                <AccessoriesInformation>
                    <AccessoriesTitle>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</AccessoriesTitle>
                    <AccessoriesText>Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</AccessoriesText>
                    <AccessoriesBtn>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</AccessoriesBtn>
                </AccessoriesInformation>
                <AccessoriesImg src={accessories} alt='accessories'></AccessoriesImg>
                <AccessoriesDecor src={accessoriesdecor} alt='accessoriesdecor'></AccessoriesDecor>
            </AccessoriesDiv>
            <PartnersTitle>ԳՈՐԾԸՆԿԵՐՆԵՐ</PartnersTitle>
            <VagaGlobalDiv>
            {Array.from({ length: 6 }).map((_, index) => (
                <VagaImg>
                <VagaFarmImg key={index} src={vaga} alt='vaga'/>
                </VagaImg>

            ))}
            </VagaGlobalDiv>
            <PartnersBtn>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</PartnersBtn>
            <ContactGlobalDiv>
                <ContactDiv>
                    <ContactText>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the lik
                    </ContactText>
                    <ContactImg src={mapImg} alt='map'/>
                    <ContactDecorImg src={mapDecor} alt='mapdecor'/>
                </ContactDiv>
                <ContactForm>
                    <FormName type='text' placeholder='Անուն'/>
                    <FormEmail type='email' placeholder='Էլ․հասցե'/>
                    <FormMessage placeholder='Հաղորդագրություն'/>
                    <FormBtn type='submit' onClick={() => handleSendMessage()}>ՈՒՂԱՐԿԵԼ</FormBtn>
                </ContactForm>
            </ContactGlobalDiv>
        </>
    );
};