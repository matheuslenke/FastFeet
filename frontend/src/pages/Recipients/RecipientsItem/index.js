import React, {  useMemo } from 'react';

import { RecipientItem } from './styles';
import PopUp from '~/components/PopUp';

import Actions from './Actions';

export default function RecipientsItem({ recipient, handleDelete }) {

  const formattedAdress = useMemo(() => {
    const adress = `${recipient.street}, ${recipient.cep}, ${recipient.city}, ${recipient.state}`;
    return adress;
  }, [recipient.city, recipient.street, recipient.cep, recipient.state]);

  return (
    <RecipientItem>
      <td>#{recipient.id}</td>
      <td>
        <span>{recipient.name}</span>
      </td>
      <td>{formattedAdress}</td>
      <td>
        <PopUp>
          <Actions recipient={recipient} handleDelete={handleDelete} />
        </PopUp>
      </td>
    </RecipientItem>
  );
}
