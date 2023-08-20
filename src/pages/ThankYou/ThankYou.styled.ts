import styled from 'styled-components';


export const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ThankYouBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ThankYouCallClose = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  width: 37px;
  height: 37px;
  align-self: flex-end;
`
export const ThankYouCloseImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

export const ThankYouTitle = styled.h3`
  color: #12724F;
  font-family: Bokonique , sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const ThankYouDesc = styled.p`
  color: #1D2130;
  font-family: Bokonique , sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export const ThankYouImagesBlock = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  margin-top: 100px;
`

export const ThankYouCheckImages = styled.img`
    position: absolute;
`
export const ThankYouCheckImagesMark = styled.img`
  position: absolute;
  top: 28%;
  right: 28%;
`
