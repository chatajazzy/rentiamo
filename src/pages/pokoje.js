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
        <SubpageHeading data-aos="fade-right">
          Pokoje
        </SubpageHeading>
        <SubpageSubheading data-aos="fade-left" data-aos-delay="250">
          Zobacz nasze realizacje
        </SubpageSubheading>
      </SubpageIntroText>
      <StyledWrapper> 
        <SubpageContent>
          <EmptyInfo data-aos-delay="500">Zdjęcia już wkrótce!</EmptyInfo>
        </SubpageContent>
      </StyledWrapper>
      <Footer/>
    </div>
)

export default IndexPage
