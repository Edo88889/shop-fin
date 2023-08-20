import React from "react";
import * as S from "./ThankYou.styled";
import checkEllipse from '../../assets/images/checkEllipse.png'
import checkMark from '../../assets/images/checkMark.png'
import {useNavigate, useParams} from "react-router-dom";
import close from "../../assets/images/closeBtn.png";

export const ThankYou: React.FC = () => {
    const {method} = useParams();
    const navigate = useNavigate();
    const handleClose = ()=>{
        navigate('/')
    }
    return (
        <S.ThankYouWrapper>
            <S.ThankYouCallClose onClick={handleClose}>
                <S.ThankYouCloseImg src={close} alt='close'/>
            </S.ThankYouCallClose>
            <S.ThankYouBlock>
            <S.ThankYouTitle>
                ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ
            </S.ThankYouTitle>
            <S.ThankYouDesc>
                {method === 'order' ? 'ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿԱՊ ԿՀԱՍՏԱՏԻ ՁԵԶ ՀԵՏ':'ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ'}
            </S.ThankYouDesc>
            <S.ThankYouImagesBlock>
                <S.ThankYouCheckImages src={checkEllipse} alt='check'/>
                <S.ThankYouCheckImagesMark src={checkMark} alt='check'/>
            </S.ThankYouImagesBlock>
            </S.ThankYouBlock>
        </S.ThankYouWrapper>
    )
}
