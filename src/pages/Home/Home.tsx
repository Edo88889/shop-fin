import React from "react";
import img from '../../assets/images/img.png'
import decor from '../../assets/images/decor.png'
import accessories from '../../assets/images/accssesor.png'
import accessoriesdecor from '../../assets/images/accessesordecor.png'
import vaga from '../../assets/images/vaga.png'
import mapImg from '../../assets/images/map.png'
import mapDecor from '../../assets/images/mapdecor.png'
import {Mocks} from './Mocks'
import * as S from "./Home.styled";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (1 === 1) {
            navigate('/thank-you/contact')
        }
    }
    const {t} = useTranslation()
    return (
        <>
            <S.HomeWrapper>
                <S.Div>
                    <S.Title>{t('home_banner_title')}</S.Title>
                    <S.Text>{t('home_banner_desc')}</S.Text>
                    <S.ReadBtn>{t('home_banner_button')}</S.ReadBtn>
                </S.Div>
                <S.HomeImg src={img} alt='img'/>
                <S.ImgDecoration src={decor} alt='img-decoration'/>
            </S.HomeWrapper>
            <S.TitleProduct>ԱՐՏԱԴՐԱՆՔ</S.TitleProduct>
            <S.DivBandages>
                <>
                    {Mocks.map(({id, img, title, size, count, layers, vector}) => (
                        <S.DivMocks key={id}>
                            <S.BandagesImg src={img} alt='bandage'/>
                            <S.BandageTitle>{title}</S.BandageTitle>
                            <S.BandageSize>{size}</S.BandageSize>
                            <S.BandageLayers>{layers}</S.BandageLayers>
                            <S.BandageCount>{count}</S.BandageCount>
                            <S.BandageVector src={vector}/>
                            <S.BandageButton>{t('home_bandage_btns')}</S.BandageButton>
                        </S.DivMocks>
                    ))}
                </>
                <S.BandageBtn>{t('home_bandage_btn')}</S.BandageBtn>
            </S.DivBandages>
            <S.AccessoriesDiv>
                <S.AccessoriesInformation>
                    <S.AccessoriesTitle>{t('home_accessories_title')}</S.AccessoriesTitle>
                    <S.AccessoriesText>{t('home_accessories_text')}</S.AccessoriesText>
                    <S.AccessoriesBtn>{t('home_accessories_btn')}</S.AccessoriesBtn>
                </S.AccessoriesInformation>
                <S.AccessoriesImg src={accessories} alt='accessories'></S.AccessoriesImg>
                <S.AccessoriesDecor src={accessoriesdecor} alt='accessoriesdecor'></S.AccessoriesDecor>
            </S.AccessoriesDiv>
            <S.PartnersTitle>{t('partners_title')}</S.PartnersTitle>
            <S.VagaGlobalDiv>
            {Array.from({ length: 6 }).map((_, index) => (
                <S.VagaImg>
                <S.VagaFarmImg key={index} src={vaga} alt='vaga'/>
                </S.VagaImg>

            ))}
            </S.VagaGlobalDiv>
            <S.PartnersBtn>{t('partners_btn')}</S.PartnersBtn>
            <S.ContactGlobalDiv>
                <S.ContactDiv>
                    <S.ContactText>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the lik
                    </S.ContactText>
                    <S.ContactImg src={mapImg} alt='map'/>
                    <S.ContactDecorImg src={mapDecor} alt='mapdecor'/>
                </S.ContactDiv>
                <S.ContactForm onSubmit={handleSendMessage}>
                    <S.FormName type='text' placeholder='Անուն'/>
                    <S.FormEmail type='email' placeholder='Էլ․հասցե'/>
                    <S.FormMessage placeholder='Հաղորդագրություն'/>
                    <S.FormBtn type='submit'>ՈՒՂԱՐԿԵԼ</S.FormBtn>
                </S.ContactForm>
            </S.ContactGlobalDiv>
        </>
    );
};