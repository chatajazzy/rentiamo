import React from 'react'
import styled from "styled-components"

import { StyledWrapper, SectionHeading, SectionSubheading } from '../components/Common/styles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import RoomImage from '../images/room-image.jpg';

const SubpageHero = styled.div`
  width: 100%;
  background-image: url(${RoomImage});
  min-height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &:after {
    background-image: linear-gradient(180deg, #3a3a3a 0%, #1d1d23 100%);
    opacity: 0.5;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media (min-width: 768px) {
    min-height: 500px;
  }
`;

const SubpageIntroText = styled.div`
  width: 100%;
  position: absolute;
  top: 150px;
  @media (min-width: 768px) {
    top: 170px;
  }
`;

const SubpageContent = styled.div`
  margin: 50px 0;
`;
const EmptyInfo = styled.p`
  font-size: 1.75em;
  font-weight: 700;
  text-align: center;
`;
const IndexPage = () => (
  <div>
  <Header/>
  <SubpageHero />
  <SubpageIntroText>
    <SectionHeading>
      Pokoje
    </SectionHeading>
    <SectionSubheading>
      Zobacz nasze realizacje
    </SectionSubheading>
  </SubpageIntroText>
  <StyledWrapper> 
    <SubpageContent>
      <EmptyInfo>Zdjecia juz wkrotce!</EmptyInfo>
    </SubpageContent>
  </StyledWrapper>
  <Footer/>
</div>
)

export default IndexPage
