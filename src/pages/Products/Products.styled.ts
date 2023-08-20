import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ProductsFilterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 74px;
`;

export const FilterButtons = styled.button`
  color: #1E1E1E;
  font-family: Bokonique , sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const FilteredItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
margin-bottom: 119px;
`
export const FilteredItemsButtons = styled.button`
  display: flex;
  width: 190px;
  height: 62px;
  padding: 23px 28px 25.832px 32px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  background: #12724F;
  color: #FFF;
  font-family: Bokonique sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-left: 100px;
  margin-top: 32px;
`

export const FilterDivMocks = styled.div`
  width: 426px;
  height: 482px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #DDD;
  margin-bottom: 71px;
  margin-right: 30px;
`
export const FilterBandageSize = styled.span`
  margin-left: 25px;
  width: 123px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid var(--green, #12724F);
  padding: 2px 6px;
`
export const FilterBandageLayers = styled.span`
  margin-left: 35px;
`
export const FilterBandageCount = styled.span`
  margin-left: 35px;
`
export const FilterBandagesImg = styled.img`
  margin-top: 70px;
  height: 212px;
  width: 397px;
  object-fit: cover;
`
export const FilterBandageTitle = styled.h4`
  margin-left: 25px;
  margin-bottom: 25px;
`
export const SingleProductInfoDesc = styled.p`
  color: #1E1E1E;
  font-family: Bokonique , sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
`
export const SingleProductInfoAdBlock = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`
export const SingleProductInfoTitle = styled.h4`
  color: #12724F;
  font-family: Bokonique , sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`
export const SingleProductInfoBlock = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  height: 407px;
  justify-content: space-between;
`
export const  SingleProductBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const  SingleProductImageBlock = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 17.742px;
  background: #DDD;
  height: 407px;
`
