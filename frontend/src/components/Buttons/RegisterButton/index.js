import React from 'react';

import { MdAdd } from 'react-icons/md';

import { ButtonContainer } from './styles';

export default function SaveButton({ ...rest }) {
  return (
    <ButtonContainer type="button" {...rest}>
      <MdAdd color="#fff" size={16} />
      <span>CADASTRAR</span>
    </ButtonContainer>
  );
}
