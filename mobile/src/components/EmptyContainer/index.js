import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, SText } from './styles';

export default function EmptyContainer({ children }) {
  return (
    <Container>
      <Icon name="info" size={30} color="#333" />
      <SText> {children}</SText>
    </Container>
  );
}
