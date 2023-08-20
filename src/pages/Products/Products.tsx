import React, {useState} from "react";
import * as S from"./Products.styled";
import {ProductCard} from "../../components/ProductCard";

export const Products: React.FC = () => {
    const [productCategory, setProductCategory] = useState('Բինտեր');
    const [selectedProduct, setSelectedProduct] = useState<number>(0)
    return (

        <S.ProductsWrapper>
            <S.ProductsFilterWrapper>
                <S.FilterButtons onClick={() => {
                    setProductCategory('Բինտեր')
                    setSelectedProduct(0)
                }}>Բինտեր</S.FilterButtons>
                <S.FilterButtons onClick={() => {
                    setProductCategory('թանզիֆՆԵՐ')
                    setSelectedProduct(0)
                }}>ԹանզիֆՆԵՐ</S.FilterButtons>
                <S.FilterButtons onClick={() => {
                    setProductCategory('անձեռոցիկներ')
                    setSelectedProduct(0)
                }}>Անձեռոցիկներ</S.FilterButtons>
                <S.FilterButtons onClick={() => {
                    setProductCategory('ԹՈՓԵՐ')
                    setSelectedProduct(0)
                }}>ԹՈՓԵՐ</S.FilterButtons>
            </S.ProductsFilterWrapper>
           <ProductCard productCategory={productCategory} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
        </S.ProductsWrapper>
    );
};