import React from "react";
import * as S from "../../pages/Products/Products.styled";
import {AboutItems} from "./AboutItems";
interface iCart {productCategory:string, selectedProduct:number, setSelectedProduct: any}
export const ProductCard: React.FC <iCart> = ({productCategory,selectedProduct,setSelectedProduct}) => {
    return (
        <S.FilteredItems>
            {selectedProduct
                ? AboutItems.filter(e => e.id === selectedProduct).map(({id, img, title, size, count, layers}) => (
                    <S.SingleProductBlock key={id}>
                        <S.SingleProductImageBlock>
                            <S.FilterBandagesImg src={img} alt='bandage'/>
                        </S.SingleProductImageBlock>
                        <S.SingleProductInfoBlock>
                            <S.SingleProductInfoTitle>{title}</S.SingleProductInfoTitle>
                            <S.SingleProductInfoAdBlock>
                                {size ? <S.FilterBandageSize>{size}</S.FilterBandageSize> : null}
                                {layers ? <S.FilterBandageLayers>{layers}</S.FilterBandageLayers> : null}
                                {count ? <S.FilterBandageCount>{count}</S.FilterBandageCount> : null}
                            </S.SingleProductInfoAdBlock>
                            <S.SingleProductInfoDesc>
                                Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ
                                մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries, but also the leap into electronic
                                typesetting,
                            </S.SingleProductInfoDesc>
                        </S.SingleProductInfoBlock>
                    </S.SingleProductBlock>
                ))
                : AboutItems.filter(e => e.category === productCategory).map(({id, img, title, size, count, layers}) => (
                    <S.FilterDivMocks key={id}>
                        <S.FilterBandagesImg src={img} alt='bandage'/>
                        <S.FilterBandageTitle>{title}</S.FilterBandageTitle>
                        <S.FilterBandageSize>{size}</S.FilterBandageSize>
                        <S.FilterBandageLayers>{layers}</S.FilterBandageLayers>
                        <S.FilterBandageCount>{count}</S.FilterBandageCount>
                        <S.FilteredItemsButtons onClick={() => setSelectedProduct(id)}>ՏԵՍՆԵԼ Ավելին</S.FilteredItemsButtons>
                    </S.FilterDivMocks>
                ))
            }
        </S.FilteredItems>
    );
}