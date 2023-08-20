import React, {useState} from "react";
import * as S from "./Products.styled";
import {AboutItems} from "./AboutItems";
import {ProductBlock} from "../../components/ProductBlock";
import {FilteredItems} from "../../components/FilteredProducts";
interface CategoryLabels {
    [key: string]: string;
}

const categoryLabels: CategoryLabels = {
    'Բինտեր': 'Բինտեր',
    'թանզիֆՆԵՐ': 'ԹանզիֆՆԵՐ',
    'անձեռոցիկներ': 'Անձեռոցիկներ',
    'ԹՈՓԵՐ': 'ԹՈՓԵՐ',
};
export const Products: React.FC = () => {
    const [productCategory, setProductCategory] = useState<string>('Բինտեր');
    const [selectedProduct, setSelectedProduct] = useState<number>(0)
    return (
        <S.ProductsWrapper>
            <S.ProductsFilterWrapper>
                {Object.entries(categoryLabels).map(([categoryValue, categoryLabel]) => (
                    <S.FilterButtons
                        key={categoryValue}
                        selected={productCategory === categoryValue}
                        onClick={() => {
                        setProductCategory(categoryValue);
                        setSelectedProduct(0);
                    }}>
                        {categoryLabel}
                    </S.FilterButtons>
                ))}
            </S.ProductsFilterWrapper>
            <S.FilteredItems>
                {selectedProduct
                    ? AboutItems.filter(item => item.id === selectedProduct).map(item => (
                        <ProductBlock key={item.id} {...item} />
                    ))
                    : AboutItems.filter(item => item.category === productCategory).map(item => (
                        <FilteredItems key={item.id} {...item} onSelect={setSelectedProduct}/>
                    ))}
            </S.FilteredItems>
        </S.ProductsWrapper>
    );
};
