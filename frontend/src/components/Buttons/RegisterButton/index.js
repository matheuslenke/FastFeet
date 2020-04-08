import React from 'react';

import { MdAdd } from 'react-icons/md';

import { ButtonContainer } from './styles';

export default function SaveButton() {
  return (
    <ButtonContainer type="button">
      <MdAdd color="#fff" size={16} />
      <span>CADASTRAR</span>
    </ButtonContainer>
  );
}
