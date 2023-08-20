import React, {useState} from "react";
import {
    FilterBandageCount,
    FilterBandageLayers,
    FilterBandagesImg,
    FilterBandageSize,
    FilterBandageTitle,
    FilterButtons,
    FilterDivMocks,
    FilteredItems,
    FilteredItemsButtons,
    ProductsFilterWrapper,
    ProductsWrapper,
    SingleProductBlock,
    SingleProductImageBlock, SingleProductInfoAdBlock,
    SingleProductInfoBlock,
    SingleProductInfoDesc,
    SingleProductInfoTitle
} from "./Products.styled";
import {AboutItems} from "./AboutItems";

export const Products: React.FC = () => {
    const [productCategory, setProductCategory] = useState('Բինտեր');
    const [selectedProduct, setSelectedProduct] = useState<number>(0)
    return (

        <ProductsWrapper>
            <ProductsFilterWrapper>
                <FilterButtons onClick={() => {
                    setProductCategory('Բինտեր')
                    setSelectedProduct(0)
                }}>Բինտեր</FilterButtons>
                <FilterButtons onClick={() => {
                    setProductCategory('թանզիֆՆԵՐ')
                    setSelectedProduct(0)
                }}>ԹանզիֆՆԵՐ</FilterButtons>
                <FilterButtons onClick={() => {
                    setProductCategory('անձեռոցիկներ')
                    setSelectedProduct(0)
                }}>Անձեռոցիկներ</FilterButtons>
                <FilterButtons onClick={() => {
                    setProductCategory('ԹՈՓԵՐ')
                    setSelectedProduct(0)
                }}>ԹՈՓԵՐ</FilterButtons>
            </ProductsFilterWrapper>
            <FilteredItems>
                {selectedProduct
                    ? AboutItems.filter(e => e.id === selectedProduct).map(({id, img, title, size, count, layers}) => (
                        <SingleProductBlock key={id}>
                            <SingleProductImageBlock>
                                <FilterBandagesImg src={img} alt='bandage'/>
                            </SingleProductImageBlock>
                            <SingleProductInfoBlock>
                                <SingleProductInfoTitle>{title}</SingleProductInfoTitle>
                                <SingleProductInfoAdBlock>
                                    {size ? <FilterBandageSize>{size}</FilterBandageSize> : null}
                                    {layers ? <FilterBandageLayers>{layers}</FilterBandageLayers> : null}
                                    {count ? <FilterBandageCount>{count}</FilterBandageCount> : null}
                                </SingleProductInfoAdBlock>
                                <SingleProductInfoDesc>
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
                                </SingleProductInfoDesc>
                            </SingleProductInfoBlock>
                        </SingleProductBlock>
                    ))
                    : AboutItems.filter(e => e.category === productCategory).map(({id, img, title, size, count, layers}) => (
                        <FilterDivMocks key={id}>
                            <FilterBandagesImg src={img} alt='bandage'/>
                            <FilterBandageTitle>{title}</FilterBandageTitle>
                            <FilterBandageSize>{size}</FilterBandageSize>
                            <FilterBandageLayers>{layers}</FilterBandageLayers>
                            <FilterBandageCount>{count}</FilterBandageCount>
                            <FilteredItemsButtons onClick={() => setSelectedProduct(id)}>ՏԵՍՆԵԼ Ավելին</FilteredItemsButtons>
                        </FilterDivMocks>
                    ))
                }
            </FilteredItems>

        </ProductsWrapper>
    );
};