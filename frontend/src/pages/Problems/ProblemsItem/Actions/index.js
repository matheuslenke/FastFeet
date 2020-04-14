import React from 'react';
import { Link } from 'react-router-dom';

import { MdVisibility, MdDelete } from 'react-icons/md';
import { Container, ActionsList, Visualize, Delete } from './styles';

export default function Actions({ handleVisibleModal, problem, handleDelete }) {
  return (
    <Container>
      <ActionsList>
        <Visualize onClick={handleVisibleModal}>
          <MdVisibility color="#8E5BE8" size={16} />
          <span>Visualizar</span>
        </Visualize>
        <Delete onClick={() => handleDelete(problem.id)}>
          <MdDelete color="#DE3B3B" size={16} />
          <span>Cancelar encomenda</span>
        </Delete>
      </ActionsList>
    </Container>
  );
}
