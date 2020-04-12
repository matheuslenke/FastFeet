import React from 'react';

import { MdDone } from 'react-icons/md';

import { ButtonContainer } from './styles';

export default function SaveButton({ ...rest }) {
  return (
    <ButtonContainer type="button" {...rest}>
      <MdDone color="#fff" size={16} />
      <span>SALVAR</span>
    </ButtonContainer>
  );
}
