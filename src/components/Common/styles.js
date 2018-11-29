import styled from "styled-components"

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const SectionHeading = styled.h2`
  text-align: center;
  color: black;
  font-size: 1.75em;
  margin: 100px auto 0;
  color: black;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    background: #4064d7;
    margin: 30px auto;
    
  }
  @media (min-width: 768px) {
    font-size: 2.5em;
    max-width: 650px;
  }
`;
export const SectionSubheading = styled.p`
  text-align: center;
  color: #545454;
  font-size: 14px;
  margin: 20px auto;
  color: black;

  @media (min-width: 768px) {
    max-width: 550px;
    font-size: 16px;
  }
`;

export const SubpageHeading = styled.h2`
  text-align: center;
  color: black;
  font-size: 1.75em;
  margin: 100px auto 0;
  color: white;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    background: #4064d7;
    margin: 30px auto;
    
  }
  @media (min-width: 768px) {
    font-size: 2.5em;
    max-width: 650px;
  }
`;
export const SubpageSubheading = styled.p`
  text-align: center;
  color: #545454;
  font-size: 14px;
  margin: 20px auto;
  color: white;

  @media (min-width: 768px) {
    max-width: 550px;
    font-size: 16px;
  }
`;


export const SubpageHero = styled.div`
  width: 100%;
  background-image: url(${props && props.image ? props.image : 'none'});
  min-height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &:after {
    background-image: linear-gradient(180deg, #3a3a3a 0%, #1d1d23 100%);
    opacity: 0.5;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media (min-width: 768px) {
    min-height: 500px;
  }
`;

export const SubpageIntroText = styled.div`
  width: 100%;
  position: absolute;
  top: 150px;
  @media (min-width: 768px) {
    top: 170px;
  }
`;

export const SubpageContent = styled.div`
  margin: 50px 0;
`;

export const EmptyInfo = styled.p`
  font-size: 1.75em;
  font-weight: 700;
  text-align: center;
`;
