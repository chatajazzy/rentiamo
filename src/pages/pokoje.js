import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';

import { 
  StyledWrapper, 
  SubpageHeading, 
  SubpageSubheading, 
  SubpageHero, 
  SubpageIntroText, 
  SubpageContent,
  EmptyInfo
} from '../components/Common/styles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import RoomImage from '../images/room-image.jpg';

const IndexPage = () => (
  <PageTransition transitionTime={1200}>
    <div>
      <Header/>
      <SubpageHero image={RoomImage}/>
      <SubpageIntroText>
        <SubpageHeading data-aos="fade-right">
          Pokoje
        </SubpageHeading>
        <SubpageSubheading data-aos="fade-left" data-aos-delay="250">
          Zobacz nasze realizacje
        </SubpageSubheading>
      </SubpageIntroText>
      <StyledWrapper> 
        <SubpageContent>
          <EmptyInfo data-aos-delay="500">Zdjecia juz wkrotce!</EmptyInfo>
        </SubpageContent>
      </StyledWrapper>
      <Footer/>
    </div>
  </PageTransition>
)

export default IndexPage
