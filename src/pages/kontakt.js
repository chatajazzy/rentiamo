import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import ContactMap from '../components/ContactMap';

import ContactImage from '../images/contact-image.jpg';

const SubpageContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 100%;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;
const MapWrapper = styled.div`
  margin: 20px 0;
`;

const SubpageContentHeading = styled.h3`
  font-size: 1.75em;
`;

const IndexPage = () => ( 
  <div>
    <Header/>
    <SubpageHero image={ContactImage}/>
    <SubpageIntroText>
      <SubpageHeading>Kontakt</SubpageHeading>
      <SubpageSubheading>Skontaktuj sie z nami</SubpageSubheading>
    </SubpageIntroText>
    <StyledWrapper>
      <SubpageContent>      
        <SubpageContentWrapper>
          <div>
            <SubpageContentHeading>
              Czekamy na Twoją wiadomość
            </SubpageContentHeading>
            <p>
              <FontAwesomeIcon icon="map-marker-alt" style={{ marginRight: '10px'}} />
              Górna Wilda 71/72, 61-564 Poznań
            </p>
            <p>
              <FontAwesomeIcon icon="envelope" style={{ marginRight: '10px'}} />
              kontakt@rentiamo.pl
            </p>
            <p>
              <FontAwesomeIcon icon="phone" style={{ marginRight: '10px'}} />
              695 931 615
            </p>
          </div>
          <MapWrapper>
            <ContactMap isMarkerShown/>
          </MapWrapper>
        </SubpageContentWrapper>
      </SubpageContent>  
    </StyledWrapper>
    <Footer/>
  </div>
)

export default IndexPage
