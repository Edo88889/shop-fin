import React from "react";
import * as S from "./OrderCall.styled";
import close from '../../assets/images/closeBtn.png'
import {useNavigate} from "react-router-dom";

export const OrderCall: React.FC = () => {
    const navigate = useNavigate();
    const handleOrderCall = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (1===1){
            navigate('/thank-you/order')
        }
    }

    const handleClose = ()=>{
        navigate('/services')
    }
    return (
        <S.OrderCallWrapper>
            <S.OrderCallClose onClick={handleClose}>
                <S.OrderCloseImg src={close} alt='close'/>
            </S.OrderCallClose>
            <S.OrderTitle>
                Պատվիրել զանգ
            </S.OrderTitle>
            <S.OrderForm onSubmit={handleOrderCall}>
                <S.OrderFormShortInputBlock>
                    <S.OrderFormShortInput type='text' placeholder='Անուն'/>
                    <S.OrderFormShortInput type='text' placeholder='Ազգանուն'/>
                </S.OrderFormShortInputBlock>
                <S.OrderFormTelInput type='tel' placeholder='Հեռախեսահամար'/>
                <S.OrderFormMessageInput type='text' placeholder='Ծառայության անվանումը'/>
                <S.OrderFormButton>
                    ՊԱՏՎԻՐԵԼ
                </S.OrderFormButton>
            </S.OrderForm>
        </S.OrderCallWrapper>
    );
}
