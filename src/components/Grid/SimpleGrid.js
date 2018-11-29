import React, { Component } from 'react'
import styled from "styled-components"

import SimpleGridItem from './SimpleGridItem';

const SimpleGridList = styled.ul`
  display: flex;
  margin: 100px 0;
  padding: 0;
  flex-wrap: wrap;
`;

export default class SimpleGrid extends Component {
  render() {
    const grid = this.props.gridData.map(
      (item, index) => <SimpleGridItem key={index} value={item} />
    )
    return (
      <SimpleGridList>
        {grid}
      </SimpleGridList>
    )
  }
}
