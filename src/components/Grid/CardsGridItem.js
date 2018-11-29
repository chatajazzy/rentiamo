import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledItem = styled.li`
  text-align: center;
  padding: 25px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background: white;
  width: auto;
  margin: 15px;
  flex-basis: 0;
  flex: 1;
`;

const IconContainer = styled.div`

`
const StyledIcon = styled.span`
  color: #4064d7;
  font-size: 4em;
`
const CardContent = styled.div`

`
const CardContentHeading = styled.h3`
  font-size: 1.35em;
`
const CardContentText = styled.p`

`
const CardsGridItem = (props) => (
  <StyledItem data-aos="flip-left" data-aos-delay="250">
    <IconContainer>
      <StyledIcon>      
        <FontAwesomeIcon icon={props.value.icon} />
      </StyledIcon>
    </IconContainer> 
    <CardContent>
      <CardContentHeading>
        {props.value.title}
      </CardContentHeading>
      <CardContentText>
        {props.value.text}
      </CardContentText>
    </CardContent>
  </StyledItem>
)

export default CardsGridItem
