import React, { Component } from 'react';
import List from '../List';
import { Container } from './styles';

export default class Board extends Component {
  render() {
    return (
      <Container>
        <List />
        <List />
        <List />
        <List />
      </Container>
    );
  }
}
