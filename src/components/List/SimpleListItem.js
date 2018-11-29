import React from 'react'
import styled from "styled-components"

const StyledItem = styled.li`
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

const StyledIcon = styled.img`
  display: block;
  height: 20px;
  width: 20px;
  margin-right: 15px;
`;
const SimpleListItem = (props) => (
  <StyledItem>
      <StyledIcon src={props.value.icon}/>
      <p>
        {props.value.text}
      </p>
  </StyledItem>
)

export default SimpleListItem
