import React from 'react';
import { Link } from 'react-router-dom';
import {  MdCreate, MdDelete } from 'react-icons/md';
import { Container, ActionsList, Edit, Delete } from './styles';


export default function Actions({
  deliveryman,
  handleDelete,
}) {


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
