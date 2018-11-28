import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const FooterWrapper = styled.footer`
  width: 100%;
`;
const FooterCtaWrapper = styled.div`
  background: #4064d7;
  color: white;
`;
const FooterCopyrightWrapper = styled.div`
  background-color: #3a3a3a;
  color: white;
  padding: 20px 15px;
`;
const FooterCtaText = styled.div`
  @media (min-width: 768px) {
    width: 60%;
  }
`;
const FooterCtaHeading = styled.h3`
  color: white;
  font-size: 1.75em;
`;
const FooterCtaSubheading = styled.p`
  color: white;
  font-size: 16px;
`;

const FooterCtaBtn = styled.a`
  color: white;
  font-size: 20px;
  display: block;
  border-radius: 25px;
  border: 2px solid white;
  padding: 12px 25px;
  text-decoration: none;

  &:hover {
    background: white;
    color: #4064d7;
  }
`;
const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

const FooterInnerWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  @media (min-width: 1255px) {
    padding: 0 15px;
  }
`
const FooterCtaInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
  max-width: 1200px;
  margin: auto;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`
const Footer = ({ props }) => (
  <FooterWrapper>
    <FooterCtaWrapper>
      <FooterCtaInnerWrapper>      
        <FooterCtaText>   
          <FooterCtaHeading>Zadzwon juz teraz</FooterCtaHeading>
          <FooterCtaSubheading>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dicta. Reiciendis neque ab, pariatur, quam fugiat reprehenderit voluptatem, eligendi nobis voluptatibus tempore sit laborum tempora est vero. Maiores, beatae sequi?</FooterCtaSubheading>
        </FooterCtaText>
        <FooterCtaBtn href="tel:695931615">695 931 615</FooterCtaBtn>
      </FooterCtaInnerWrapper>
    </FooterCtaWrapper>
    <FooterCopyrightWrapper>
      <FooterInnerWrapper>      
        Rentiamo - zarządzanie nieruchomościami z gwarancją czynszu dla właściciela. Copyright&copy;2018
      </FooterInnerWrapper>
    </FooterCopyrightWrapper>
  </FooterWrapper>
)

export default Footer
