import React from 'react';

import { MdArrowBack } from 'react-icons/md';

import { ButtonContainer } from './styles';

export default function BackButton() {
  return (
    <ButtonContainer type="button">
      <MdArrowBack color="#fff" size={16} />
      <span>Voltar</span>
    </ButtonContainer>
  );
}
