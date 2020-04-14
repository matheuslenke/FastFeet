import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Container, Content, OrdersTable, Pagination } from './styles';

import SearchInput from '~/components/SearchInput';
import RegisterButton from '~/components/Buttons/RegisterButton';

import OrdersItem from './OrdersItem';

import api from '~/services/api';
import history from '~/services/history';

import {
  getOrdersRequest,
  deleteOrdersRequest,
} from '~/store/modules/orders/actions';

export default function Orders() {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [endOfPages, setEndOfPages] = useState(false);

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    async function loadOrders() {
      dispatch(getOrdersRequest(page, searchName));
    }
    loadOrders();
  }, [page, searchName]);

  useEffect(() => {
    if (orders.length < 5) {
      setEndOfPages(true);
    }
    if (orders.length == 5) {
      setEndOfPages(false);
    }
  }, [page, orders]);

  function handleDelete(orderId) {
    dispatch(deleteOrdersRequest(orderId));
    dispatch(getOrdersRequest(page, searchName));
  }

  function handlePageBack() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  }
  function handlePageNext() {
    setPage(page + 1);
  }

  return (
    <Container>
      <Content>
        <header>
          <h1>Gerenciando encomendas</h1>
          <div>
            <SearchInput
              type="text"
              value={searchName}
              placeholder=" Pesquisar por encomendas"
              onChange={(e) => setSearchName(e.target.value)}
            />
            <Link to="/orders/new">
              <RegisterButton type="button">Cadastrar</RegisterButton>
            </Link>
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
            {orders.map((order) => (
              <OrdersItem
                order={order}
                key={order.id}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </OrdersTable>
        <Pagination>
          <button disabled={page <= 1} type="button" onClick={handlePageBack}>
            <MdArrowBack size={16} color="#fff" />
          </button>
          <span>{page}</span>
          <button disabled={endOfPages} type="button" onClick={handlePageNext}>
            <MdArrowForward size={16} color="#fff" />{' '}
          </button>
        </Pagination>
      </Content>
    </Container>
  );
}
