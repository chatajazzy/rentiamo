import React, { Component } from 'react'
import styled from "styled-components"

import CardsGridItem from './CardsGridItem';

const CardsGridList = styled.ul`
  display: flex;
  margin: 100px 0;
  padding: 0;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

export default class CardsGrid extends Component {
  render() {
    const grid = this.props.gridData.map(
      (item, index) => <CardsGridItem key={index} value={item} />
    )
    return (
      <CardsGridList>
        {grid}
      </CardsGridList>
    )
  }
}
