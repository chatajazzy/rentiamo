import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import Navigation from '../Navigation/Navigation';
import HeaderImage from '../../images/hero-image.jpg';
import RentiamoLogo from '../../images/rentiamo-logo.png';

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${HeaderImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const HeaderBar = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1200px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }
`;
const LogoWrapper = styled.h1`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
const LogoLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
const HeaderTextContainer = styled.div`
  margin-top: 100px;
  @media (min-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 1200px) {
    max-width: 550px;
    margin-top: 200px;
  }
`;
const HeaderHeading = styled.h2`
  color: #434343;
  font-weight: 900;
  @media (min-width: 768px) {
    font-size: 180%
  }
  @media (min-width: 1200px) {
    font-size: 300%
  }
`;
const HeaderSubheading = styled.p`
  color: #434343;
  margin: 20px 0 40px;
  @media (min-width: 1200px) {
    font-size: 120%
  }
`;
const HeaderCtaBtn = styled.button`
  border: 2px solid #434343;
  background: transparent;
  border-radius: 20px;
  padding: 12px 25px;
  color: #434343;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    color: white;
    background: #4064d7;
    border-color: #4064d7;
  }
`;
const StyledRentiamoLogo = styled.img`
`;
const Header = ({ props }) => (
  <HeaderWrapper>
    <HeaderBar>
      <LogoWrapper>
        <LogoLink to={'/'}>
          <StyledRentiamoLogo src={RentiamoLogo} />
        </LogoLink>
      </LogoWrapper>
      <Navigation/>
    </HeaderBar>
    <div style={{maxWidth: '1200px', margin: 'auto', padding: '0 15px'}}>
      <HeaderTextContainer>
        <HeaderHeading>Zarządzanie najmem z gwarancją czynszu</HeaderHeading>
        <HeaderSubheading>Wynajmiemy mieszkanie na długi termin i zajmiemy się najmem za Ciebie!</HeaderSubheading>
        <HeaderCtaBtn>Sprawdź Ofertę</HeaderCtaBtn>
      </HeaderTextContainer>
    </div>

  </HeaderWrapper>
)

export default Header
