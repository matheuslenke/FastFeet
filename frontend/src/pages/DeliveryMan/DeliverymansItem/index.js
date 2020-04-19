import React, { useState, useMemo } from 'react';

import PropTypes from 'prop-types';
import { DeliverymanItem, DeliverymanDiv, AvatarDefault } from './styles';
import PopUp from '~/components/PopUp';

import Actions from './Actions';

export default function DeliverymansItem({ deliveryman, handleDelete }) {
  const [visibleModal, setVisibleModal] = useState(false);

  function handleVisibleModal() {
    setVisibleModal(!visibleModal);
  }

  const nameInitials = useMemo(
    () =>
      deliveryman.name
        .toUpperCase()
        .split(' ')
        .map((n) => n[0]),
    [deliveryman.name]
  );

  const randomColor = useMemo(() => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      const r = Math.floor(Math.random() * 256);
      rgb.push(r);
    }
    const stringrgb = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    return stringrgb;
  }, [deliveryman.avatar]);

  return (
    <DeliverymanItem>
      <td>#{deliveryman.id}</td>
      <td>
        <DeliverymanDiv>
          {deliveryman.avatar ? (
            <img src={deliveryman.avatar.url} alt={deliveryman.name} />
          ) : (
            <AvatarDefault color={randomColor}>
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

DeliverymanItem.propTypes = {
  deliveryman: PropTypes.object.isRequired,
};
