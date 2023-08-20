import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ServicesInformationDiv = styled.div<{position:string}>`
  width: 100%;
  position: relative;
  margin-top:${({position})=>position === 'first' ? '69px' : '175px'};
  display: flex;
  justify-content: space-between;
  flex-direction: ${({position})=>position === 'first' ? 'row' : 'row-reverse'};
  margin-bottom: 193px;
`

export const ServicesInformationImg = styled.img`
  width: 555px;
  height: 363px;
  margin-top: 110px;
  margin-right: 50px;
`
export const ServicesInformationFarmImg = styled.img`
  width: 555px;
  height: 363px;
  margin-top: 50px;
  margin-left: 50px;
`
export const ServicesInformationDesc = styled.p`
  color: #1E1E1E;
  font-family: Bokonique , sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 629px;
`
export const ServicesInformationTitle = styled.h3`
  color: #12724F;
  font-family: Bokonique sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const ServicesColl = styled.button`
  display: inline-flex;
  height: 62px;
  padding: 20px 24px 22px 28px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  background: #12724F;
  color: #FFF;
  font-family: Bokonique sans-serif;
  font-size: 16.475px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 30px;
`
export const ServicesInformationText = styled.p`
  color: #1E1E1E;
  font-family: Bokonique sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ServicesInformationDescEllipseImg = styled.img`
  width: 366px;
  height: 366px;
  z-index: -1;
  top: 245px;
  right: -70px;
  position: absolute;
`
export const ServicesInformationDescEllipseImgSecond = styled.img`
  width: 366px;
  height: 366px;
  z-index: -1;
  top: 245px;
  left: -70px;
  position: absolute;
`