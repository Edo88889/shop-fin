import styled from 'styled-components';


export const OrderCallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const OrderCallClose = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  width: 37px;
  height: 37px;
  align-self: flex-end;
`
export const OrderCloseImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
export const OrderForm = styled.form`
  width: 826px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const OrderTitle = styled.h3`
  color:#12724F;
  font-family: Bokonique , sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`
export const OrderFormShortInputBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const OrderFormShortInput = styled.input`
  width: 48%;
  height: 95px;
  flex-shrink: 0;
  border-radius: 14px;
  background: rgba(217, 217, 217, 0.85);
  border: none;
  outline: none;
  color: #000;
  font-family: Bokonique , sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`
export const OrderFormTelInput = styled.input`
  height: 95px;
  width: 100%;
  flex-shrink: 0;
  border-radius: 14px;
  background: rgba(217, 217, 217, 0.85);
  color: #000;
  font-family: Bokonique , sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  outline: none;
  margin-top: 30px;
`

export const OrderFormMessageInput = styled.input`
  height: 261px;
  width: 100%;
  flex-shrink: 0;
  border-radius: 14px;
  background: rgba(217, 217, 217, 0.85);
  color: #000;
  font-family: Bokonique , sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  outline: none;
  margin-top: 30px;
`
export const OrderFormButton = styled.button `
  display: inline-flex;
  height: 62px;
  padding: 21px 74px 21px 67px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  background: #12724F;
  outline: none;
  border: none;
  cursor: pointer;
  color: #FFF;
  font-family: Bokonique, sans-serif;
  font-size: 16.475px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 45px;
`
