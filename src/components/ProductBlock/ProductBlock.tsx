import React from "react";
import * as S from "./ProductBlock.styled";
import {ProductProps} from '../../helpers/productsType'

interface ProductBlockProps extends ProductProps {}

export const ProductBlock: React.FC <ProductBlockProps> = ({ img, title, size, count, layers,desc }) => (
    <S.SingleProductBlock>
        <S.SingleProductImageBlock>
            <S.SingleProductImg src={img} alt='bandage'/>
        </S.SingleProductImageBlock>
        <S.SingleProductInfoBlock>
            <S.SingleProductInfoTitle>{title}</S.SingleProductInfoTitle>
            <S.SingleProductInfoAdBlock>
                {size ? <S.SingleProductSize>{size}</S.SingleProductSize> : null}
                {layers ? <S.SingleProductLayers>{layers}</S.SingleProductLayers> : null}
                {count ? <S.SingleProductCount>{count}</S.SingleProductCount> : null}
            </S.SingleProductInfoAdBlock>
            <S.SingleProductInfoDesc>
                {desc}
            </S.SingleProductInfoDesc>
        </S.SingleProductInfoBlock>
    </S.SingleProductBlock>
);
