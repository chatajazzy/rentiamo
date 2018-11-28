import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const NavigationWrapper = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;
const NavigationItem = styled.li`
  padding: 15px;
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #434343;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #4064d7;
  }
`;

const Navigation = ({ props }) => (
  <NavigationWrapper>
    <NavigationItem>
      <StyledLink to={'/o-nas'}>
        O nas
      </StyledLink>
    </NavigationItem>
    <NavigationItem>
      <StyledLink to={'/oferta'}>
        Oferta
      </StyledLink>
    </NavigationItem>
    <NavigationItem>
      <StyledLink to={'/pokoje'}>
        Pokoje
      </StyledLink>
    </NavigationItem>
    <NavigationItem>
      <StyledLink to={'/kontakt'}>
        Kontakt
      </StyledLink>
    </NavigationItem>
  </NavigationWrapper>
)

export default Navigation
