import React from 'react'
import styled from "styled-components"

const IconContainer = styled.div`

`
const StyledIcon = styled.img`

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
  padding: 25px;
  flex-basis: 0;
  flex: 33.33%;
`

const SimpleGridItem = (props) => (
  <StyledItem>
    <IconContainer>
      <StyledIcon src={props.value.icon}/>
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
