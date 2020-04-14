import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MdVisibility, MdCreate, MdDelete } from 'react-icons/md';
import { Container, ActionsList, Visualize, Edit, Delete } from './styles';

import history from '~/services/history';

export default function Actions({ handleVisibleModal, order, handleDelete }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <ActionsList>
        <Visualize onClick={handleVisibleModal}>
          <MdVisibility color="#8E5BE8" size={16} />
          <span>Visualizar</span>
        </Visualize>
        <Link
          to={{
            pathname: '/orders/edit',
            state: {
              order,
            },
          }}
        >
          <Edit>
            <MdCreate color="#4D85EE" size={16} />
            <span>Editar</span>
          </Edit>
        </Link>
        <Delete onClick={() => handleDelete(order.id)}>
          <MdDelete color="#DE3B3B" size={16} />
          <span>Excluir</span>
        </Delete>
      </ActionsList>
    </Container>
  );
}
