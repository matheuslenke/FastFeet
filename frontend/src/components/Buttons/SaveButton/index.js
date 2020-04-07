import React from 'react';

import { MdDone } from 'react-icons/md';

import { ButtonContainer } from './styles';

export default function SaveButton() {
  return (
    <ButtonContainer type="button">
      <MdDone color="#fff" size={16} />
      <span>Salvar</span>
    </ButtonContainer>
  );
}
