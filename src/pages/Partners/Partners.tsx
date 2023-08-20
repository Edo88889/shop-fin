import React from "react";
import {PartnersVaga, PartnersWrapper, VagaFarmImg, VagaImg} from "./Partners.styled";
import vaga from "../../assets/images/vaga.png";

export const Partners: React.FC = () => {
    return (
        <PartnersWrapper>
            <PartnersVaga>
                {Array.from({ length: 6 }).map((_, index) => (
                    <VagaImg>
                        <VagaFarmImg key={index} src={vaga} alt='vaga'/>
                    </VagaImg>
                ))}
            </PartnersVaga>
        </PartnersWrapper>
    );
};