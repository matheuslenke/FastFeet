import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdVisibility, MdCreate, MdDelete } from 'react-icons/md';
import { Container, ActionsList, Visualize, Edit, Delete } from './styles';

import history from '~/services/history';

export default function Actions({ recipient, handleDelete }) {
  return (
    <Container>
      <ActionsList>
        <Link
          to={{
            pathname: '/recipients/edit',
            state: {
              recipient,
            },
          }}
        >
          <Edit>
            <MdCreate color="#4D85EE" size={16} />
            <span>Editar</span>
          </Edit>
        </Link>
        <Delete onClick={() => handleDelete(recipient.id)}>
          <MdDelete color="#DE3B3B" size={16} />
          <span>Excluir</span>
        </Delete>
      </ActionsList>
    </Container>
  );
}
