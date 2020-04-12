import React from 'react';

import { MdArrowBack } from 'react-icons/md';

import { ButtonContainer } from './styles';

export default function BackButton({ ...rest }) {
  return (
    <ButtonContainer type="button" {...rest}>
      <MdArrowBack color="#fff" size={16} />
      <span>VOLTAR</span>
    </ButtonContainer>
  );
}
