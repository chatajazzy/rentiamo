import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconContainer = styled.div`

`
const StyledIcon = styled.span`
  color: #4064d7;
  font-size: 4em;
`
const SimpleGridContent = styled.div`

`
const SimpleGridContentHeading = styled.h3`
  font-size: 1.35em;
`
const SimpleGridContentText = styled.p`

`
const StyledItem = styled.li`
  text-align: center;
  flex-basis: 0;
  flex: 100%;
  margin-bottom: 50px;
  @media (min-width: 500px) {
    flex: 50%;
  }
  @media (min-width: 768px) {
    flex: 33.33%;
    margin-bottom: unset;
    padding: 25px;
  }

  &:last-child {
    margin-bottom: unset;
  }
`

const SimpleGridItem = (props) => (
  <StyledItem data-aos="fade-up" data-delay="250">
    <IconContainer>
      <StyledIcon>      
        <FontAwesomeIcon icon={props.value.icon} />
      </StyledIcon>
    </IconContainer> 
    <SimpleGridContent>
      <SimpleGridContentHeading>
        {props.value.title}
      </SimpleGridContentHeading>
      <SimpleGridContentText>
        {props.value.text}
      </SimpleGridContentText>
    </SimpleGridContent>
  </StyledItem>
)

export default SimpleGridItem
