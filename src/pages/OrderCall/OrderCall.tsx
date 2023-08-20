import React from "react";
import {
    OrderCallClose,
    OrderCallWrapper,
    OrderCloseImg,
    OrderForm, OrderFormButton, OrderFormMessageInput, OrderFormShortInput, OrderFormShortInputBlock, OrderFormTelInput,
    OrderTitle
} from "./OrderCall.styled";
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
        <OrderCallWrapper>
            <OrderCallClose onClick={handleClose}>
                <OrderCloseImg src={close} alt='close'/>
            </OrderCallClose>
            <OrderTitle>
                Պատվիրել զանգ
            </OrderTitle>
            <OrderForm onSubmit={handleOrderCall}>
                <OrderFormShortInputBlock>
                    <OrderFormShortInput type='text' placeholder='Անուն'/>
                    <OrderFormShortInput type='text' placeholder='Ազգանուն'/>
                </OrderFormShortInputBlock>
                <OrderFormTelInput type='tel' placeholder='Հեռախեսահամար'/>
                <OrderFormMessageInput type='text' placeholder='Ծառայության անվանումը'/>
                <OrderFormButton>
                    ՊԱՏՎԻՐԵԼ
                </OrderFormButton>
            </OrderForm>
        </OrderCallWrapper>
    );
}
