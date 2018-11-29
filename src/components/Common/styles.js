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
