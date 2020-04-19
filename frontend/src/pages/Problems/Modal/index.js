import React from 'react';

import { Container, Background, Content } from './styles';

export default function Modal({ visible, children, handleClose }) {
  return (
    <Container visible={visible}>
      <button type="button" onClick={handleClose}>
        <Background />
      </button>
      <Content>{children}</Content>
    </Container>
  );
}
