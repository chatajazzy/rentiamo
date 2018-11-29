import React from 'react'

import { StyledWrapper, SectionHeading, SectionSubheading } from '../components/Common/styles';
import Header from '../components/Header/Header';
import SimpleGrid from '../components/Grid/SimpleGrid';
import CardsGrid from '../components/Grid/CardsGrid';
import SimpleList from '../components/List/SimpleList';
import Footer from '../components/Footer/Footer';

import { gridData, listData, cardsGridData } from '../data/data';

const IndexPage = (props) => (
  <div>  
    <Header props={props}/>
    <StyledWrapper>
      <SectionHeading>
        Potrzebujesz zarządzania z gwarancją czynszu?
      </SectionHeading>
      <SectionSubheading>
        Jeśli na któreś z poniższych pytań odpowiadasz twierdząco odezwij sie do nas! Jesteśmy pewni, że mozemy Ci pomóc.
      </SectionSubheading>
      <SimpleGrid gridData={gridData} />
      <SectionHeading>
        Mamy na to sposób
      </SectionHeading>
      <SectionSubheading>
        Zobacz co możemy zrobić dla Ciebie i twojego mieszkania.
      </SectionSubheading>
      <SimpleList listData={listData}/>
      <SectionHeading>
        Dlaczego wybrac Rentiamo?
      </SectionHeading>
      <SectionSubheading>
        Jeśli na któreś z poniższych pytań odpowiadasz twierdząco odezwij sie do nas! Jesteśmy pewni, że mozemy Ci pomóc.
      </SectionSubheading>
      <CardsGrid gridData={cardsGridData}/>
    </StyledWrapper>
    <Footer/>
  </div>
)

export default IndexPage
