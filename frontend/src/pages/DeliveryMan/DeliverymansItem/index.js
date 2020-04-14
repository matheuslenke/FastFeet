import React, { useState, useMemo } from 'react';

import {
  DeliverymanItem,
  DeliverymanDiv,
  AvatarDefault,
  StatusTag,
} from './styles';
import PopUp from '~/components/PopUp';
import colors from '~/styles/colors';

import Actions from './Actions';

export default function DeliverymansItem({ deliveryman, handleDelete }) {
  const [visibleModal, setVisibleModal] = useState(false);

  function handleVisibleModal() {
    setVisibleModal(!visibleModal);
  }

  const nameInitials = useMemo(() => {
    return deliveryman.name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }, [deliveryman.name]);

  return (
    <DeliverymanItem>
      <td>#{deliveryman.id}</td>
      <td>
        <DeliverymanDiv>
          {deliveryman.avatar ? (
            <img src={deliveryman.avatar.url} alt={deliveryman.name} />
          ) : (
            <AvatarDefault>
              {' '}
              <span>{nameInitials}</span>
            </AvatarDefault>
          )}
        </DeliverymanDiv>
      </td>
      <td>
        <span>{deliveryman.name}</span>
      </td>
      <td>{deliveryman.email}</td>
      <td>
        <PopUp>
          <Actions
            deliveryman={deliveryman}
            handleVisibleModal={handleVisibleModal}
            handleDelete={handleDelete}
          />
        </PopUp>
      </td>
    </DeliverymanItem>
  );
}
