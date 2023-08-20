import React from "react";
import {
    AboutInformationDesc,
    AboutInformationDescEllipseImg,
    AboutInformationDescEllipseImgSecond,
    AboutInformationDescStrong,
    AboutInformationDiv,
    AboutInformationImg,
    AboutTitle,
    AboutWrapper
} from "./About.styled";
import doctorImg from '../../assets/images/doctors.png'
import gloves from '../../assets/images/gloves.png'
import ellipseFirst from '../../assets/images/aboueEllipseFirst.png'
import ellipseSecond from '../../assets/images/AboueEllipseSecond.png'

export const About: React.FC = () => {
    return (
        <AboutWrapper>
            <AboutTitle>
                ՄԵՐ ՄԱՍԻՆ
            </AboutTitle>
            <AboutInformationDiv position='first'>
                <AboutInformationImg src={doctorImg} alt='doctors'/>
                <AboutInformationDesc>
                    <AboutInformationDescStrong>
                        Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական
                        վիրակապեր արտադրող
                    </AboutInformationDescStrong>
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
                </AboutInformationDesc>
                <AboutInformationDescEllipseImg src={ellipseFirst} alt='ellipse'/>
            </AboutInformationDiv>
            <AboutInformationDiv position=''>
                <AboutInformationImg src={gloves} alt='doctors'/>
                <AboutInformationDesc>
                    <AboutInformationDescStrong>
                        Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական
                        վիրակապեր արտադրող
                    </AboutInformationDescStrong>
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
                </AboutInformationDesc>
                <AboutInformationDescEllipseImgSecond src={ellipseSecond} alt='ellipse'/>
            </AboutInformationDiv>
        </AboutWrapper>
    );
};