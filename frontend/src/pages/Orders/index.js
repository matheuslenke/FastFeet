import React from 'react';

import { Container, Content, OrdersTable } from './styles';

import SearchInput from '~/components/SearchInput';

import OrdersItem from './OrdersItem';

export default function Orders() {
  return (
    <Container>
      <Content>
        <header>
          <h1>Gerenciando encomendas</h1>
          <div>
            <SearchInput placeholder=" Pesquisar por encomendas" />
            <button type="button">Cadastrar</button>
          </div>
        </header>

        <OrdersTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <OrdersItem />
            <OrdersItem />
          </tbody>
        </OrdersTable>
      </Content>
    </Container>
  );
}
