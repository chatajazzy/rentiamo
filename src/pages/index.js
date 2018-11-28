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
  p {
    line-height: 1.5;
    color: #545454;
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
  color: black;
  font-size: 1.75em;
  margin: 100px auto 0;


  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    background: #4064d7;
    margin: 30px auto;
    
  }
  @media (min-width: 768px) {
    font-size: 2.5em;
    max-width: 650px;
  }
`;
const SectionSubheading = styled.p`
  text-align: center;
  color: #545454;
  font-size: 14px;
  margin: 20px auto;

  @media (min-width: 768px) {
    max-width: 550px;
    font-size: 16px;
  }
`;
const IndexPage = (props) => (
  <div>  
    <GlobalStyle/>
    <Header props={props}/>
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
