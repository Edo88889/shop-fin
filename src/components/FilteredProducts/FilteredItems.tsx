import React from "react";
import * as S from "./FilteredItems.styled";
import {ProductProps} from '../../helpers/productsType'

interface FilteredItemProps extends ProductProps {
    onSelect: (id: number) => void;
}

export const FilteredItems: React.FC <FilteredItemProps> = ({id, img, title, size, count, layers, onSelect}) => {
    return (
        <S.FilterDivMocks>
            <S.FilterBandagesImg src={img} alt='bandage'/>
            <S.FilterBandageTitle>{title}</S.FilterBandageTitle>
            <S.FilterBandageSize>{size}</S.FilterBandageSize>
            <S.FilterBandageLayers>{layers}</S.FilterBandageLayers>
            <S.FilterBandageCount>{count}</S.FilterBandageCount>
            <S.FilteredItemsButtons onClick={() => onSelect(id)}>ՏԵՍՆԵԼ Ավելին</S.FilteredItemsButtons>
        </S.FilterDivMocks>
    )
}
