import styled from "styled-components";
import {NavLink} from "react-router-dom";
export const NavbarWrapper = styled.div`
align-items: center;
`;
export const MenuLink = styled(NavLink)`
  margin-left: 13px;
  text-decoration: none;
  color: #000;
  font-family: Bokonique sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &.active{
    color: #12724F;
  }
`
