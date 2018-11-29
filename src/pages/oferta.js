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
import SimpleList from '../components/List/SimpleList';

import OfferImage from '../images/offer-image.jpg';

import { listData } from '../data/data';

const IndexPage = () => (
  <div>
    <Header/>
    <SubpageHero image={OfferImage}/>
    <SubpageIntroText>
      <SubpageHeading>
        Oferta
      </SubpageHeading>
      <SubpageSubheading>
        Zobacz co mozemy Ci zaoferować
      </SubpageSubheading>
    </SubpageIntroText>
    <StyledWrapper> 
      <SubpageContent>
        <SimpleList listData={listData}/>
      </SubpageContent>
    </StyledWrapper>
    <Footer/>
  </div>
)

export default IndexPage
