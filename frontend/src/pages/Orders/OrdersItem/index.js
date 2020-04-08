import React, { useState } from 'react';
import {
  OrderItem,
  DeliverymanDiv,
  Avatar,
  StatusTag,
  ModalInfo,
} from './styles';

import Actions from './Actions';
import Modal from '../Modal';

import colors from '~/styles/colors';

export default function OrdersItem() {
  const [visibleModal, setVisibleModal] = useState(false);

  function handleVisibleModal() {
    setVisibleModal(!visibleModal);
  }

  return (
    <OrderItem>
      <td>#01</td>
      <td>Ludwig Van Beethoven</td>
      <td>
        <DeliverymanDiv>
          <Avatar>
            {' '}
            <span>JD</span>
          </Avatar>
          <span>John Doe</span>
        </DeliverymanDiv>
      </td>
      <td>Rio do Sul</td>
      <td>Santa Catarina</td>
      <td>
        <StatusTag color={colors.status.pending}>
          <span>PENDENTE</span>
        </StatusTag>
      </td>
      <td>
        <Actions handleVisibleModal={handleVisibleModal} />
      </td>
      <Modal visible={visibleModal} handleClose={handleVisibleModal}>
        <ModalInfo>
          <section>
            <h2>Informações da encomenda</h2>
            <p>Rua Beethoven, 1729</p>
            <p>Diadema - SP</p>
            <p>09960-580</p>
          </section>
          <section>
            <h2>Datas</h2>
            <div>
              <h3>Retirada:</h3>
              <p>25/01/2020</p>
            </div>
            <div>
              <h3>Entrega:</h3>
              <p>25/01/2020</p>
            </div>
          </section>
          <section>
            <h2>Assinatura do Destinatário</h2>
            <p>imagem aqui</p>
          </section>
        </ModalInfo>
      </Modal>
    </OrderItem>
  );
}
