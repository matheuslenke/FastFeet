import React from 'react';

import { OrderItem } from './styles';

export default function OrdersItem() {
  return (
    <OrderItem>
      <td>#01</td>
      <td>Ludwig Van Beethoven</td>
      <td>
        <div>
          <div>JD</div>
          <span>John Doe</span>
        </div>
      </td>
      <td>Rio do Sul</td>
      <td>Santa Catarina</td>
      <td>Pendente</td>
      <td>...</td>
    </OrderItem>
  );
}
