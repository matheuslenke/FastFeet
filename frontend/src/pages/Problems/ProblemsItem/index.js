import React, { useState } from 'react';
import { ProblemItem, ModalInfo } from './styles';

import Actions from './Actions';
import Modal from '../Modal';
import PopUp from '~/components/PopUp';

export default function ProblemsItem({ handleDelete, problem }) {
  const [visibleModal, setVisibleModal] = useState(false);

  function handleVisibleModal() {
    setVisibleModal(!visibleModal);
  }

  return (
    <>
      <ProblemItem>
        <td>#{problem.id}</td>
        <td>
          <span>{problem.description}</span>
        </td>
        <td>
          <PopUp>
            <Actions
              handleVisibleModal={handleVisibleModal}
              handleDelete={handleDelete}
              problem={problem}
            />
          </PopUp>
        </td>
      </ProblemItem>
      <Modal visible={visibleModal} handleClose={handleVisibleModal}>
        <ModalInfo>
          <section>
            <h2>Visualizar Problema</h2>
            <p>{problem.description}</p>
          </section>
        </ModalInfo>
      </Modal>
    </>
  );
}
