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
    icon: 'user-tie',
    title: 'Kim jesteśmy',
    text: 'W swojej działalności kierujemy się bliskimi nam i sprawdzonymi wartościami. Dzięki nim budujemy mocne, oparte na zaufaniu relacje i niestrudzenie realizujemy misję. Pragniemy stworzyć markę dominującą na poznańskim rynku wynajmu pokoi i kwater pracowniczych, kojarzoną z profesjonalizmem, rzetelnością i skutecznością. '
  },
  {
    icon: 'rocket',
    title: 'Nasza misja',
    text: 'Naszą misją jest budowanie trwałych relacji z właścicielami nieruchomości poprzez zagwarantowanie im czynszu z wynajmu oraz profesjonalną opiekę nad powierzonym nam obiektem. Swoją misję realizujemy poprzez jasne i przejrzyste reguły naszej współpracy z właścicielami, sprawne zarządzanie oraz nadzór nad obiektami.'
  }, 
  {
    icon: 'gem',
    title: 'Nasze wartości',
    text: 'Rzetelność – robimy wszystko, aby nasi partnerzy wiedzieli, że mogą na nas polegać. Uczciwość – cenimy i stosujemy jasne, sprawiedliwe i przejrzyste reguły. Zaangażowanie – dajemy z siebie 100% w każdym aspekcie działalności. Właścicielom nieruchomości udzielamy gwarancji czynszu. Wobec wszystkich partnerów postępujemy tak, jak sami chcielibyśmy być traktowani. Cenimy przyjazną atmosferę – wśród najemców, partnerów i w zespole.'
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
