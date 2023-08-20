import React from "react";
import {
    ThankYouCheckImages, ThankYouCheckImagesMark,
    ThankYouDesc,
    ThankYouImagesBlock,
    ThankYouTitle,
    ThankYouWrapper,
    ThankYouBlock, ThankYouCallClose, ThankYouCloseImg
} from "./ThankYou.styled";
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
        <ThankYouWrapper>
            <ThankYouCallClose onClick={handleClose}>
                <ThankYouCloseImg src={close} alt='close'/>
            </ThankYouCallClose>
            <ThankYouBlock>
            <ThankYouTitle>
                ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ
            </ThankYouTitle>
            <ThankYouDesc>
                {method === 'order' ? 'ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿԱՊ ԿՀԱՍՏԱՏԻ ՁԵԶ ՀԵՏ':'ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ'}
            </ThankYouDesc>
            <ThankYouImagesBlock>
                <ThankYouCheckImages src={checkEllipse} alt='check'/>
                <ThankYouCheckImagesMark src={checkMark} alt='check'/>
            </ThankYouImagesBlock>
            </ThankYouBlock>
        </ThankYouWrapper>
    )
}
