import React, { useState, useMemo, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  OrderItem,
  DeliverymanDiv,
  AvatarDefault,
  StatusTag,
  ModalInfo,
} from './styles';
import Actions from './Actions';
import Modal from '../Modal';
import PopUp from '~/components/PopUp';

import colors from '~/styles/colors';

export default function OrdersItem({ order, handleDelete }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [statusColor, setStatusColor] = useState('#fff');
  const [statusText, setStatusText] = useState('');

  function handleVisibleModal() {
    setVisibleModal(!visibleModal);
  }

  const startDateFormatted = useMemo(() => {
    if (order.start_date) {
      return format(parseISO(order.start_date), "d 'de' MMMM 'de' yyyy", {
        locale: pt,
      });
    }
  }, [order.start_date]);

  const endDateFormatted = useMemo(() => {
    if (order.end_date) {
      return format(parseISO(order.end_date), "d 'de' MMMM 'de' yyyy", {
        locale: pt,
      });
    }
  }, [order.end_date]);

  useEffect(() => {
    if (order.canceled_at !== null) {
      setStatusColor(colors.status.canceled);
      setStatusText('CANCELADO');
      return;
    }
    if (order.end_date !== null) {
      setStatusColor(colors.status.delivered);
      setStatusText('ENTREGUE');
      return;
    }
    if (order.start_date === null) {
      setStatusColor(colors.status.pending);
      setStatusText('PENDENTE');
      return;
    }
    if (order.start_date !== null) {
      setStatusColor(colors.status.withdrawal);
      setStatusText('RETIRADO');
    }
  }, [order]);

  return (
    <OrderItem>
      <td>#{order.id}</td>
      <td>{order.recipient.name}</td>
      <td>
        <DeliverymanDiv>
          {order.deliveryman.avatar.url ? (
            <img
              src={order.deliveryman.avatar.url}
              alt={order.deliveryman.name}
            />
          ) : (
            <AvatarDefault>
              {' '}
              <span>JD</span>
            </AvatarDefault>
          )}
          <span>{order.deliveryman.name}</span>
        </DeliverymanDiv>
      </td>
      <td>{order.recipient.city}</td>
      <td>{order.recipient.state}</td>
      <td>
        <StatusTag color={statusColor}>
          <span>{statusText}</span>
        </StatusTag>
      </td>
      <td>
        <PopUp>
          <Actions
            handleDelete={handleDelete}
            order={order}
            handleVisibleModal={handleVisibleModal}
          />
        </PopUp>
      </td>
      <Modal visible={visibleModal} handleClose={handleVisibleModal}>
        <ModalInfo>
          <section>
            <h2>Informações da encomenda</h2>
            <p>
              {order.recipient.street}, {order.recipient.number}{' '}
            </p>
            <p>
              {order.recipient.city} - {order.recipient.state}
            </p>
            <p>{order.recipient.cep}</p>
          </section>
          <section>
            <h2>Datas</h2>
            <div>
              <h3>Retirada:</h3>
              <p>{startDateFormatted || 'Não retirada'}</p>
            </div>
            <div>
              <h3>Entrega:</h3>
              <p>{endDateFormatted || 'Não entregue'}</p>
            </div>
          </section>
          <section>
            <h2>Assinatura do Destinatário</h2>
            {order.signature ? (
              <img src={order.signature.url} alt="Assinatura " />
            ) : (
              <p>Sem assinatura</p>
            )}
          </section>
        </ModalInfo>
      </Modal>
    </OrderItem>
  );
}
