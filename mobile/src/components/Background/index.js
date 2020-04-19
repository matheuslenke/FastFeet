import React from 'react';
import { View } from 'react-native';

import { Container, BackgroundRoxo, Content } from './styles';

export default function Background({ children }) {
  return (
    <Container>
      <BackgroundRoxo />
      <Content>{children}</Content>
    </Container>
  );
}
