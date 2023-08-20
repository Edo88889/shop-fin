import styled from 'styled-components';

export const AboutWrapper = styled.div`
    
`
export const AboutTitle = styled.h2`
  color: #12724F;
  font-family: Bokonique , sans-serif;
  font-size: 40px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
  line-height: normal;
`

export const AboutInformationDiv = styled.div<{position:string}>`
  width: 100%;
  position: relative;
  margin-top:${({position})=>position === 'first' ? '69px' : '175px'};
  display: flex;
  justify-content: space-between;
  flex-direction: ${({position})=>position === 'first' ? 'row' : 'row-reverse'};
  margin-bottom: 288px;
`

export const AboutInformationImg = styled.img`
  width: 647px;
  height: 363px;
`
export const AboutInformationDesc = styled.p`
  color: #1E1E1E;
  font-family: Bokonique , sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 629px;
`
export const AboutInformationDescStrong = styled.strong`

`
export const AboutInformationDescEllipseImg = styled.img`
  z-index: -1;
  top: 260px;
  left: -50px;
  position: absolute;
`
export const AboutInformationDescEllipseImgSecond = styled.img`
  z-index: -1;
  top: 142px;
  right: -37px;
  position: absolute;
`