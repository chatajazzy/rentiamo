import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import CheckedIcon from '../../images/checked-icon.svg';

const SimpleGridList = styled.ul`
  display: flex;
  margin: 100px 0;
  padding: 0;
  flex-wrap: wrap;
`;
const SimpleGridItem = styled.li`
  text-align: center;
  padding: 25px;
  flex-basis: 0;
  flex: 33.33%;
`;

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

const SimpleGrid = ({ props }) => (
  <SimpleGridList>
    <SimpleGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer> 
      <SimpleGridContent>
        <SimpleGridContentHeading>Profesjonalizm</SimpleGridContentHeading>
        <SimpleGridContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </SimpleGridContentText>
      </SimpleGridContent>
    </SimpleGridItem>
    <SimpleGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer> 
      <SimpleGridContent>
        <SimpleGridContentHeading>Profesjonalizm</SimpleGridContentHeading>
        <SimpleGridContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </SimpleGridContentText>
      </SimpleGridContent>
    </SimpleGridItem>
    <SimpleGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer> 
      <SimpleGridContent>
        <SimpleGridContentHeading>Profesjonalizm</SimpleGridContentHeading>
        <SimpleGridContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </SimpleGridContentText>
      </SimpleGridContent>
    </SimpleGridItem>
    <SimpleGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer> 
      <SimpleGridContent>
        <SimpleGridContentHeading>Profesjonalizm</SimpleGridContentHeading>
        <SimpleGridContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </SimpleGridContentText>
      </SimpleGridContent>
    </SimpleGridItem>
    <SimpleGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer> 
      <SimpleGridContent>
        <SimpleGridContentHeading>Profesjonalizm</SimpleGridContentHeading>
        <SimpleGridContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </SimpleGridContentText>
      </SimpleGridContent>
    </SimpleGridItem>
    <SimpleGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer> 
      <SimpleGridContent>
        <SimpleGridContentHeading>Profesjonalizm</SimpleGridContentHeading>
        <SimpleGridContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </SimpleGridContentText>
      </SimpleGridContent>
    </SimpleGridItem>
  </SimpleGridList>
)

export default SimpleGrid
