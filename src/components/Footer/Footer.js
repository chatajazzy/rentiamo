import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const FooterWrapper = styled.footer`
  width: 100%;
`;
const FooterCtaWrapper = styled.div`
  background: #4064d7;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
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
  font-size: 20px;
`;
const FooterCtaSubheading = styled.p`
  color: white;
  font-size: 20px;
`;

const FooterCtaBtn = styled.a`
  color: white;
  font-size: 20px;
  display: block;
  border-radius: 20px;
  border: 2px solid white;
  padding: 5px 15px;
  text-decoration: none;
`;
const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

const Footer = ({ props }) => (
  <FooterWrapper>
    <FooterCtaWrapper>
      <FooterCtaText>    
        <FooterCtaHeading>Zadzwon juz teraz</FooterCtaHeading>
        <FooterCtaSubheading>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dicta. Reiciendis neque ab, pariatur, quam fugiat reprehenderit voluptatem, eligendi nobis voluptatibus tempore sit laborum tempora est vero. Maiores, beatae sequi?</FooterCtaSubheading>
      </FooterCtaText>
      <FooterCtaBtn href="tel:695931615">695931615</FooterCtaBtn>
    </FooterCtaWrapper>
    <FooterCopyrightWrapper>Rentiamo - zarządzanie nieruchomościami z gwarancją czynszu dla właściciela. Copyright&copy;2018</FooterCopyrightWrapper>
  </FooterWrapper>
)

export default Footer
