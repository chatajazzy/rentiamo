import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const NavigationWrapper = styled.ul`
  width: 100%;
  max-width: 300px;
  display: flex;
  margin: 0;
  padding: 0;
`;
const NavigationItem = styled.li`
  color: black;
  padding: 15px;
  text-decoration: none;
  list-style-type: none;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

const CardsGrid = ({ props }) => (
  <ul>
    <li>ikona nagłówek tekst</li>
    <li>ikona nagłówek tekst</li>
    <li>ikona nagłówek tekst</li>
    <li>ikona nagłówek tekst</li>
    <li>ikona nagłówek tekst</li>
    <li>ikona nagłówek tekst</li>
  </ul>
)

export default CardsGrid
