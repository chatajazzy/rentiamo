import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { 
  faEnvelope, 
  faKey, 
  faLock, 
  faAward, 
  faChartLine, 
  faSmile,
  faGlobe,
  faCity,
  faUsers,
  faClock,
  faHouseDamage,
  faExclamation,
  faMapMarkerAlt,
  faPhone,
  faGem,
  faRocket,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

import { StyledWrapper, SectionHeading, SectionSubheading } from '../components/Common/styles';
import Header from '../components/Header/Header';
import SimpleGrid from '../components/Grid/SimpleGrid';
import CardsGrid from '../components/Grid/CardsGrid';
import SimpleList from '../components/List/SimpleList';
import Footer from '../components/Footer/Footer';

import { gridData, listData, cardsGridData } from '../data/data';

library.add(faEnvelope, faKey, faLock, faAward, faChartLine, faSmile, faGlobe, faCity, faUsers, faClock, faHouseDamage, faExclamation, faMapMarkerAlt, faPhone, faGem, faRocket, faUserTie);



export default class IndexPage extends React.Component {
  componentDidMount() {
    try {
      AOS.init({ duration: 1200, once: true });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div>  
      <Header props={this.props}/>
      <StyledWrapper>
        <SectionHeading id="intro-section" data-aos="fade-up">
          Potrzebujesz zarządzania z gwarancją czynszu?
        </SectionHeading>
        <SectionSubheading data-aos="fade-up" data-aos-delay="50">
          Jeśli na któreś z poniższych pytań odpowiadasz twierdząco odezwij sie do nas! Jesteśmy pewni, że mozemy Ci pomóc.
        </SectionSubheading>
        <SimpleGrid gridData={gridData} />
        <SectionHeading data-aos="fade-up">
          Mamy na to sposób
        </SectionHeading>
        <SectionSubheading data-aos="fade-up" data-aos-delay="50">
          Zobacz co możemy zrobić dla Ciebie i twojego mieszkania.
        </SectionSubheading>
        <SimpleList listData={listData}/>
        <SectionHeading data-aos="fade-up">
          Dlaczego wybrac Rentiamo?
        </SectionHeading>
        <SectionSubheading data-aos="fade-up" data-aos-delay="50">
          Jeśli na któreś z poniższych pytań odpowiadasz twierdząco odezwij sie do nas! Jesteśmy pewni, że mozemy Ci pomóc.
        </SectionSubheading>
        <CardsGrid gridData={cardsGridData}/>
      </StyledWrapper>
      <Footer/>
    </div>
    )
  }
}

