import React from "react";
// @ts-ignore
import mapImg from "../../assets/images/map.png";
// @ts-ignore
import mapDecor from "../../assets/images/mapdecor.png";
import {
    ContactWrapper,
    ContactGlobalDiv,
    ContactForm,
    FormName, FormEmail,
    FormMessage,
    FormBtn,
    ContactText,
    ContactImg,
    ContactDecorImg,
    ContactDiv, ContactTitle
}
    from "./ContactUs.styled";
import {useNavigate} from "react-router-dom";

// @ts-ignore


export const ContactUs: React.FC = () => {
    const navigate = useNavigate();
    const handleSendMessage = () => {
        if (1 === 1) {
            navigate('/thank-you/contact')
        }
    }
    return (
        <ContactWrapper>
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
                    <ContactTitle>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</ContactTitle>
                    <FormName type='text' placeholder='Անուն'/>
                    <FormEmail type='email' placeholder='Էլ․հասցե'/>
                    <FormMessage placeholder='Հաղորդագրություն'/>
                    <FormBtn type='submit' onClick={() => {handleSendMessage()}}>ՈՒՂԱՐԿԵԼ</FormBtn>
                </ContactForm>
            </ContactGlobalDiv>
        </ContactWrapper>
    );
};