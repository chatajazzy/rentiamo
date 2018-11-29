import React from 'react'

import { StyledWrapper, SectionHeading, SectionSubheading } from '../components/Common/styles';
import Header from '../components/Header/Header';
import SimpleGrid from '../components/Grid/SimpleGrid';
import CardsGrid from '../components/Grid/CardsGrid';
import SimpleList from '../components/List/SimpleList';
import Footer from '../components/Footer/Footer';

const IndexPage = (props) => (
  <div>  
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
