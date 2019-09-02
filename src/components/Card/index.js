import React, { Component } from 'react';

import { Container, Label } from './styles';

export default class Card extends Component {
  render() {
    return (
      <Container>
        <header>
          <Label color="#7159c1" />
        </header>
        <p>Fazer a migração completa de servidor</p>
        <img
          src="https://api.adorable.io/avatars/102/abott@adorable.png"
          alt="Avatar"
        />
      </Container>
    );
  }
}
