import React from 'react'

import { 
  StyledWrapper, 
  SubpageHeading, 
  SubpageSubheading, 
  SubpageHero, 
  SubpageIntroText, 
  SubpageContent 
} from '../components/Common/styles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SimpleGrid from '../components/Grid/SimpleGrid';

import AboutImage from '../images/about-image.jpg';

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
    <SubpageHero image={AboutImage}/>
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
