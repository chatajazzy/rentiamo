import React from 'react'

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
  <div>
  <Header/>
  <SubpageHero image={RoomImage}/>
  <SubpageIntroText>
    <SubpageHeading>
      Pokoje
    </SubpageHeading>
    <SubpageSubheading>
      Zobacz nasze realizacje
    </SubpageSubheading>
  </SubpageIntroText>
  <StyledWrapper> 
    <SubpageContent>
      <EmptyInfo>Zdjecia juz wkrotce!</EmptyInfo>
    </SubpageContent>
  </StyledWrapper>
  <Footer/>
</div>
)

export default IndexPage
