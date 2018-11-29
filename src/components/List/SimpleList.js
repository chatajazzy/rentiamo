import React, { Component } from 'react'
import styled from "styled-components"

import SimpleListItem from './SimpleListItem';

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export default class SimpleList extends Component {
  render() {
    const list = this.props.listData.map(
      (item, index) => <SimpleListItem key={index} value={item} />
    )
    return (
      <StyledList>
        {list}
      </StyledList>
    )
  }
}
