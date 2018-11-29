import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import Navigation from '../Navigation/Navigation';
import HeaderImage from '../../images/hero-image.jpg';
import RentiamoLogo from '../../images/rentiamo-logo.png';

const HeaderWrapper = styled.div`
  width: 100%;
  background-image: ${props => (props.isHeroVisible ? `url(${HeaderImage})` : 'none')};
  min-height: ${props => (props.isHeroVisible ? '100vh' : 'none')};
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
  margin: 15px 0;
  max-height: 50px;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
const LogoLink = styled(Link)`
  color: black;
  text-decoration: none;
  max-width: 150px;
  display: block;
`;
const HeaderTextContainer = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
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
const HeaderCtaBtn = styled.a`
  border: 2px solid #434343;
  background: transparent;
  border-radius: 25px;
  padding: 12px 25px;
  color: #434343;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.9em;
  &:hover {
    color: white;
    background: #4064d7;
    border-color: #4064d7;
  }
`;
const StyledRentiamoLogo = styled.img`
`;
const Header = ({ props }) => (
  <HeaderWrapper isHeroVisible={props && props.path === '/*' ? true : false}>
    <HeaderBar>
      <LogoWrapper>
        <LogoLink to={'/'}>
          <StyledRentiamoLogo src={RentiamoLogo} />
        </LogoLink>
      </LogoWrapper>
      <Navigation />
    </HeaderBar>
    <div style={{maxWidth: '1200px', margin: 'auto', padding: '0 15px'}}>
      <HeaderTextContainer isVisible={props && props.path === '/*' ? true : false}>
        <HeaderHeading data-aos="fade-up">
          Zarządzanie najmem z gwarancją czynszu
        </HeaderHeading>
        <HeaderSubheading data-aos="fade-up" data-aos-delay="250">
          Wynajmiemy mieszkanie na długi termin i zajmiemy się najmem za Ciebie!
        </HeaderSubheading>
        <HeaderCtaBtn href="#intro-section" data-aos="fade-down" data-aos-delay="500">Sprawdź</HeaderCtaBtn>
      </HeaderTextContainer>
    </div>
  </HeaderWrapper>
)

export default Header
