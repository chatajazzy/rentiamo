import React from 'react'
import styled from "styled-components"

import { StyledWrapper, SubpageHeading, SubpageSubheading } from '../components/Common/styles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SimpleGrid from '../components/Grid/SimpleGrid';

import AboutImage from '../images/about-image.jpg';

const SubpageHero = styled.div`
  width: 100%;
  background-image: url(${AboutImage});
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

const gridData = [
  {
    title: 'Kim jesteśmy',
    text: 'atext test'
  },
  {
    title: 'Nasza misja',
    text: 'btext test'
  },
  {
    title: 'Nasze wartości',
    text: 'ctext test'
  },
]

const IndexPage = () => (
  <div>
    <Header/>
    <SubpageHero />
    <SubpageIntroText>
      <SubpageHeading>
        O nas
      </SubpageHeading>
      <SubpageSubheading>
        Parę informacji o Rentiamo
      </SubpageSubheading>
    </SubpageIntroText>
    <StyledWrapper> 
      <SubpageContent>
        <SimpleGrid gridData={gridData} />
      </SubpageContent>
    </StyledWrapper>
    <Footer/>
  </div>
)

export default IndexPage
