import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';

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
import SimpleList from '../components/List/SimpleList';

import OfferImage from '../images/offer-image.jpg';

import { listData } from '../data/data';

const IndexPage = () => (
  <PageTransition transitionTime={1200}>
    <div>
      <Header/>
      <SubpageHero image={OfferImage}/>
      <SubpageIntroText>
        <SubpageHeading data-aos="fade-right">
          Oferta
        </SubpageHeading>
        <SubpageSubheading data-aos="fade-left" data-aos-delay="250">
          Zobacz co mozemy Ci zaoferować
        </SubpageSubheading>
      </SubpageIntroText>
      <StyledWrapper> 
        <SubpageContent>
          <SimpleList listData={listData}  data-aos-delay="500" />
        </SubpageContent>
      </StyledWrapper>
      <Footer/>
    </div>
  </PageTransition>
)

export default IndexPage
