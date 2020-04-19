import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdVisibility, MdCreate, MdDelete } from 'react-icons/md';
import { Container, ActionsList, Visualize, Edit, Delete } from './styles';

import history from '~/services/history';

export default function Actions({
  handleVisibleModal,
  deliveryman,
  handleDelete,
}) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <ActionsList>
        <Link
          to={{
            pathname: '/deliverymans/edit',
            state: {
              deliveryman,
            },
          }}
        >
          <Edit>
            <MdCreate color="#4D85EE" size={16} />
            <span>Editar</span>
          </Edit>
        </Link>
        <Delete onClick={() => handleDelete(deliveryman.id)}>
          <MdDelete color="#DE3B3B" size={16} />
          <span>Excluir</span>
        </Delete>
      </ActionsList>
    </Container>
  );
}
