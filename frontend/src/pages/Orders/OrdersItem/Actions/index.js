import React, { useState } from 'react';
import { MdVisibility, MdCreate, MdDelete } from 'react-icons/md';
import {
  Container,
  ActionsButton,
  ActionsList,
  Visualize,
  Edit,
  Delete,
} from './styles';

export default function Actions({ handleVisibleModal }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <ActionsButton type="button" onClick={handleToggleVisible}>
        ...
      </ActionsButton>
      <ActionsList visible={visible}>
        <Visualize onClick={handleVisibleModal}>
          <MdVisibility color="#8E5BE8" size={16} />
          <span>Visualizar</span>
        </Visualize>
        <Edit>
          <MdCreate color="#4D85EE" size={16} />
          <span>Editar</span>
        </Edit>
        <Delete>
          <MdDelete color="#DE3B3B" size={16} />
          <span>Excluir</span>
        </Delete>
      </ActionsList>
    </Container>
  );
}
