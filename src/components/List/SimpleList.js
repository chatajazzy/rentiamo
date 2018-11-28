import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import CheckedIcon from '../../images/checked-icon.svg';

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  color: black;
  padding: 15px;
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;

  }
`;

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

const StyledIcon = styled.img`
  display: block;
  height: 20px;
  width: 20px;
  margin-right: 15px;
`;
const SimpleList = ({ props }) => (
  <StyledList>
    <ListItem>
      <StyledIcon src={CheckedIcon}/>
      <p>Wynajmiemy Twoją nieruchomość na kilka lat.</p>
    </ListItem>
    <ListItem>
      <StyledIcon src={CheckedIcon}/>
      <p>Odświeżymy mieszkanie, jeśli jest to potrzebne.</p>
    </ListItem>
    <ListItem>
      <StyledIcon src={CheckedIcon}/>
      <p>Wynajmiemy Twoją nieruchomość na kilka lat.</p>
    </ListItem>
    <ListItem>
      <StyledIcon src={CheckedIcon}/>
      <p>Odświeżymy mieszkanie, jeśli jest to potrzebne.</p>
    </ListItem>
    <ListItem>
      <StyledIcon src={CheckedIcon}/>
      <p>Wynajmiemy Twoją nieruchomość na kilka lat.</p>
    </ListItem>
    <ListItem>
      <StyledIcon src={CheckedIcon}/>
      <p>Odświeżymy mieszkanie, jeśli jest to potrzebne.</p>
    </ListItem>
    <ListItem>
      <StyledIcon src={CheckedIcon}/>
      <p>Wynajmiemy Twoją nieruchomość na kilka lat.</p>
    </ListItem>
    <ListItem>
      <StyledIcon src={CheckedIcon}/>
      <p>Odświeżymy mieszkanie, jeśli jest to potrzebne.</p>
    </ListItem>
  </StyledList>
)

export default SimpleList
