import React from 'react'
import styled from "styled-components"

import CheckedIcon from '../../images/checked-icon.svg';

const CardsGridList = styled.ul`
  display: flex;
  margin: 100px 0;
  padding: 0;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;
const CardsGridItem = styled.li`
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
const StyledIcon = styled.img`

`
const CardContent = styled.div`

`
const CardContentHeading = styled.h3`
  font-size: 1.35em;
`
const CardContentText = styled.p`

`
const CardsGrid = ({ props }) => (
  <CardsGridList>
    <CardsGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer>
      <CardContent>
        <CardContentHeading>Profesjonalizm</CardContentHeading>
        <CardContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </CardContentText>
      </CardContent>
    </CardsGridItem>
    <CardsGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer>
      <CardContent>
        <CardContentHeading>Profesjonalizm</CardContentHeading>
        <CardContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </CardContentText>
      </CardContent>
    </CardsGridItem>
    <CardsGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer>
      <CardContent>
        <CardContentHeading>Profesjonalizm</CardContentHeading>
        <CardContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </CardContentText>
      </CardContent>
    </CardsGridItem>
    <CardsGridItem>
      <IconContainer>
        <StyledIcon src={CheckedIcon}/>
      </IconContainer>
      <CardContent>
        <CardContentHeading>Profesjonalizm</CardContentHeading>
        <CardContentText>
          Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług.
        </CardContentText>
      </CardContent>
    </CardsGridItem>
  </CardsGridList>
)

export default CardsGrid
