import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, Content, DeliverymanTable, Pagination } from './styles';

import SearchInput from '~/components/SearchInput';
import RegisterButton from '~/components/Buttons/RegisterButton';
import DeliverymansItem from './DeliverymansItem';

import { getDeliverymansRequest } from '~/store/modules/deliverymans/actions';
import api from '~/services/api';

export default function Orders() {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [endOfPages, setEndOfPages] = useState(false);

  const loading = useSelector((state) => state.deliverymans.loading);
  const { deliverymans } = useSelector((state) => state.deliverymans);
  const deliverymansCount = useSelector((state) => state.count);

  useEffect(() => {
    dispatch(getDeliverymansRequest(page, searchName));
  }, [page, searchName]);

  async function handleDelete(deliveryman_id) {
    try {
      if (window.confirm('Tem certeza que deseja deletar este entregador?')) {
        await api.delete(`deliverymans/${deliveryman_id}`);

        toast.success('Entregador deletado com sucesso!');
        dispatch(getDeliverymansRequest(page, searchName));
      }
    } catch (error) {
      toast.error('Erro ao deletar entregador, tente novamente');
    }
  }

  useEffect(() => {
    if (deliverymans.length < 6) {
      setEndOfPages(true);
    }
    if (page * 6 < deliverymansCount) {
      setEndOfPages(false);
    }
  }, [page, deliverymans]);

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
          <h1>Gerenciando Entregadores</h1>
          <div>
            <SearchInput
              type="text"
              value={searchName}
              placeholder=" Pesquisar por entregadores"
              onChange={(e) => setSearchName(e.target.value)}
            />
            <Link to="/deliverymans/new">
              <RegisterButton type="button">Cadastrar</RegisterButton>
            </Link>
          </div>
        </header>

        <DeliverymanTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliverymans.map((deliveryman) => (
              <DeliverymansItem
                deliveryman={deliveryman}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </DeliverymanTable>
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
