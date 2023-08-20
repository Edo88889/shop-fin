import React from "react";
import {
    ServicesInformationDesc,
    ServicesInformationDescEllipseImg,
    ServicesInformationDescEllipseImgSecond,
    ServicesInformationTitle,
    ServicesInformationDiv,
    ServicesInformationImg,
    ServicesWrapper, ServicesColl, ServicesInformationText, ServicesInformationFarmImg
} from "./Services.styled";
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
        <ServicesWrapper>
            <ServicesInformationDiv position='first'>
                <ServicesInformationDesc>
                    <ServicesInformationTitle>
                        ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ
                    </ServicesInformationTitle>
                    <ServicesInformationText>
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
                    </ServicesInformationText>
                    <ServicesColl onClick={() => handleOrderCall()}>ՊԱՏՎԻՐԵԼ ԶԱՆԳ</ServicesColl>
                </ServicesInformationDesc>
                <ServicesInformationImg src={accessories} alt='doctors'/>


                <ServicesInformationDescEllipseImg src={decor} alt='ellipse'/>
            </ServicesInformationDiv>
            <ServicesInformationDiv position=''>
                <ServicesInformationDesc>
                    <ServicesInformationTitle>
                        ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ
                    </ServicesInformationTitle>
                <ServicesInformationText>
                    Մենք կպատրաստենք արտադրանք ձեր իսկ լոգոյով։
                    orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
            </ServicesInformationText>
                    <ServicesColl onClick={() => handleOrderCall()}>ՊԱՏՎԻՐԵԼ ԶԱՆԳ</ServicesColl>
                </ServicesInformationDesc>
                <ServicesInformationFarmImg src={servicesFarm} alt='doctors'/>


                <ServicesInformationDescEllipseImgSecond src={decorPhoto} alt='ellipse'/>
            </ServicesInformationDiv>
        </ServicesWrapper>
    );
};