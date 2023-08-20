import React from "react";
import * as S from "./Services.styled";
import decor from '../../assets/images/decor.png'
import accessories from '../../assets/images/accssesor.png'
import servicesFarm from "../../assets/images/farm.png";
import decorPhoto from "../../assets/images/farmdecoration.png";
import {useNavigate} from "react-router-dom";
export const Services: React.FC = () => {
    const navigate = useNavigate();

    const handleOrderCall = ()=>{
        navigate('/order-call')
    }
    return (
        <S.ServicesWrapper>S.
            <S.ServicesInformationDiv position='first'>
                <S.ServicesInformationDesc>
                    <S.ServicesInformationTitle>
                        ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ
                    </S.ServicesInformationTitle>
                    <S.ServicesInformationText>
                    Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական
                    անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,
                    </S.ServicesInformationText>
                    <S.ServicesColl onClick={() => handleOrderCall()}>ՊԱՏՎԻՐԵԼ ԶԱՆԳ</S.ServicesColl>
                </S.ServicesInformationDesc>
                <S.ServicesInformationImg src={accessories} alt='doctors'/>


                <S.ServicesInformationDescEllipseImg src={decor} alt='ellipse'/>
            </S.ServicesInformationDiv>
            <S.ServicesInformationDiv position=''>
                <S.ServicesInformationDesc>
                    <S.ServicesInformationTitle>
                        ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ
                    </S.ServicesInformationTitle>
                <S.ServicesInformationText>
                    Մենք կպատրաստենք արտադրանք ձեր իսկ լոգոյով։
                    orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
            </S.ServicesInformationText>
                    <S.ServicesColl onClick={() => handleOrderCall()}>ՊԱՏՎԻՐԵԼ ԶԱՆԳ</S.ServicesColl>
                </S.ServicesInformationDesc>
                <S.ServicesInformationFarmImg src={servicesFarm} alt='doctors'/>


                <S.ServicesInformationDescEllipseImgSecond src={decorPhoto} alt='ellipse'/>
            </S.ServicesInformationDiv>
        </S.ServicesWrapper>
    );
};