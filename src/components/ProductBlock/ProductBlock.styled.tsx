import styled from "styled-components";

export const  SingleProductImageBlock = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 17.742px;
  background: #DDD;
  height: 407px;
`
export const SingleProductInfoBlock = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  height: 407px;
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
export const SingleProductInfoAdBlock = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`
export const SingleProductInfoDesc = styled.p`
  color: #1E1E1E;
  font-family: Bokonique , sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
`
export const  SingleProductBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const SingleProductSize = styled.span`
  margin-left: 25px;
  width: 123px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid var(--green, #12724F);
  padding: 2px 6px;
`
export const SingleProductLayers = styled.span`
  margin-left: 35px;
`
export const SingleProductCount = styled.span`
  margin-left: 35px;
`
export const SingleProductImg = styled.img`
  margin-top: 70px;
  height: 212px;
  width: 397px;
  object-fit: cover;
`
