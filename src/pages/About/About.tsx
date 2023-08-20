import React from "react";
import * as S from "./About.styled";
import doctorImg from '../../assets/images/doctors.png'
import gloves from '../../assets/images/gloves.png'
import ellipseFirst from '../../assets/images/aboueEllipseFirst.png'
import ellipseSecond from '../../assets/images/AboueEllipseSecond.png'

export const About: React.FC = () => {
    return (
        <S.AboutWrapper>
            <S.AboutTitle>
                ՄԵՐ ՄԱՍԻՆ
            </S.AboutTitle>
            <S.AboutInformationDiv position='first'>
                <S.AboutInformationImg src={doctorImg} alt='doctors'/>
                <S.AboutInformationDesc>
                    <S.AboutInformationDescStrong>
                        Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական
                        վիրակապեր արտադրող
                    </S.AboutInformationDescStrong>
                    ;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </S.AboutInformationDesc>
                <S.AboutInformationDescEllipseImg src={ellipseFirst} alt='ellipse'/>
            </S.AboutInformationDiv>
            <S.AboutInformationDiv position=''>
                <S.AboutInformationImg src={gloves} alt='doctors'/>
                <S.AboutInformationDesc>
                    <S.AboutInformationDescStrong>
                        Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական
                        վիրակապեր արտադրող
                    </S.AboutInformationDescStrong>
                    ;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </S.AboutInformationDesc>
                <S.AboutInformationDescEllipseImgSecond src={ellipseSecond} alt='ellipse'/>
            </S.AboutInformationDiv>
        </S.AboutWrapper>
    );
};