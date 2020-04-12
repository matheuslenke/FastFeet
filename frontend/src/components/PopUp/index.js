import React from 'react';
import Popup from 'reactjs-popup';

import { MdMoreHoriz } from 'react-icons/md';
import { MoreButton } from './styles';

export default function PopUp({ children }) {
  return (
    <Popup
      trigger={(open) => (
        <MoreButton>
          <MdMoreHoriz color="#999" size={16} />
        </MoreButton>
      )}
      position="bottom center"
      contentStyle={{
        width: '150px',
        border: 'none',
        background: 'transparent',
        style: 'none',
        filter: 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
        boxShadow: '0',
      }}
      closeOnDocumentClick
      arrow={false}
    >
      <div>{children}</div>
    </Popup>
  );
}
