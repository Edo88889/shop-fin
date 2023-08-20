import React from "react";
import mapImg from "../../assets/images/map.png";
import mapDecor from "../../assets/images/mapdecor.png";
import * as S from "./ContactUs.styled";
import {useNavigate} from "react-router-dom";



export const ContactUs: React.FC = () => {
    const navigate = useNavigate();
    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (1 === 1) {
            navigate('/thank-you/contact')
        }
    }
    return (
        <S.ContactWrapper>
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
                    <S.ContactTitle>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</S.ContactTitle>
                    <S.FormName type='text' placeholder='Անուն'/>
                    <S.FormEmail type='email' placeholder='Էլ․հասցե'/>
                    <S.FormMessage placeholder='Հաղորդագրություն'/>
                    <S.FormBtn type='submit'>ՈՒՂԱՐԿԵԼ</S.FormBtn>
                </S.ContactForm>
            </S.ContactGlobalDiv>
        </S.ContactWrapper>
    );
};