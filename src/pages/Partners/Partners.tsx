import React from "react";
import * as S from "./Partners.styled";
import vaga from "../../assets/images/vaga.png";

export const Partners: React.FC = () => {
    return (
        <S.PartnersWrapper>
            <S.PartnersVaga>
                {Array.from({ length: 6 }).map((_, index) => (
                    <S.VagaImg>
                        <S.VagaFarmImg key={index} src={vaga} alt='vaga'/>
                    </S.VagaImg>
                ))}
            </S.PartnersVaga>
        </S.PartnersWrapper>
    );
};