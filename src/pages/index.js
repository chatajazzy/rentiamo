import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from "styled-components"

import Header from '../components/Header/Header';
import SimpleGrid from '../components/Grid/SimpleGrid';
import CardsGrid from '../components/Grid/CardsGrid';
import SimpleList from '../components/List/SimpleList';
import Footer from '../components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    // color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: Roboto, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat;
  }
  ul, 
  li {
    list-style-type: none;
  }
  a {
    transition: all 0.25s ease-in-out;
  }
`;
const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  @media (min-width: 768px) {
    padding: unset;
  }
`;
const SectionHeading = styled.h2`
  text-align: center;
  color: purple;
`;
const SectionSubheading = styled.p`
  text-align: center;
  color: blue;
`;
const IndexPage = () => (
  <div>  
    <GlobalStyle/>
    <Header/>
    <StyledWrapper>
      <SectionHeading>Potrzebujesz zarządzania z gwarancją czynszu?</SectionHeading>
      <SectionSubheading>Jeśli na któreś z poniższych pytań odpowiadasz twierdząco odezwij sie do nas! Jesteśmy pewni, że mozemy Ci pomóc.</SectionSubheading>
      <SimpleGrid/>
      <SectionHeading>Mamy na to sposób</SectionHeading>
      <SectionSubheading>Zobacz co możemy zrobić dla Ciebie i twojego mieszkania.</SectionSubheading>
      <SimpleList/>
      <SectionHeading>Dlaczego wybrac Rentiamo?</SectionHeading>
      <SectionSubheading>Jeśli na któreś z poniższych pytań odpowiadasz twierdząco odezwij sie do nas! Jesteśmy pewni, że mozemy Ci pomóc.</SectionSubheading>
      <CardsGrid/>
      </StyledWrapper>
      <Footer/>
  </div>
)

export default IndexPage
