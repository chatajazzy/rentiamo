import React from 'react'
import styled from "styled-components"

import { StyledWrapper, SectionHeading, SectionSubheading } from '../components/Common/styles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactImage from '../images/contact-image.jpg';
import Map from '../components/Map';

const SubpageHero = styled.div`
  width: 100%;
  background-image: url(${ContactImage}); 
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

const SubpageContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 100%;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;
const MapWrapper = styled.div`
  margin: 20px 0;
`;
const SubpageContent = styled.div`
  margin: 50px 0;
`;
const SubpageContentHeading = styled.h3`
  font-size: 1.75em;
`;

const IndexPage = () => (
  <div>
    <Header/>
    <SubpageHero />
    <SubpageIntroText>
      <SectionHeading>Kontakt</SectionHeading>
      <SectionSubheading>Skontaktuj sie z nami</SectionSubheading>
    </SubpageIntroText>
    <StyledWrapper>
      <SubpageContent>      
        <SubpageContentWrapper>
          <div>
            <SubpageContentHeading>
              Czekamy na Twoją wiadomość
            </SubpageContentHeading>
            <p>Adres: Górna Wilda 71/72, 61-564 Poznań</p>
            <p>Email: kontakt@rentiamo.pl</p>
            <p>Tel: 695 931 615</p>
          </div>
          <MapWrapper>
            <Map isMarkerShown/>
          </MapWrapper>
        </SubpageContentWrapper>
      </SubpageContent>  
    </StyledWrapper>
    <Footer/>
  </div>
)

export default IndexPage
