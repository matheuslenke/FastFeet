import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, Content, RecipientsTable, Pagination } from './styles';

import SearchInput from '~/components/SearchInput';
import RegisterButton from '~/components/Buttons/RegisterButton';
import RecipientsItem from './RecipientsItem';

import {
  getRecipientsRequest,
  deleteRecipientsRequest,
} from '~/store/modules/recipients/actions';
import api from '~/services/api';

export default function Orders() {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [endOfPages, setEndOfPages] = useState(false);

  const loading = useSelector((state) => state.recipients.loading);
  const { recipients } = useSelector((state) => state.recipients);
  const recipientsCount = useSelector((state) => state.recipients.count);

  useEffect(() => {
    dispatch(getRecipientsRequest(page, searchName));
  }, [page, searchName]);

  async function handleDelete(recipient_id) {
    try {
      if (window.confirm('Tem certeza que deseja deletar este destinatário?')) {
        await api.delete(`recipients/${recipient_id}`);

        dispatch(getRecipientsRequest(page, searchName));
        toast.success('Destinatário deletado com sucesso');
      }
    } catch (error) {
      toast.error('Falha ao deletar destinatário');
    }
  }

  useEffect(() => {
    if (recipients.length < 6) {
      setEndOfPages(true);
    }
    if (page * 6 < recipientsCount) {
      setEndOfPages(false);
    }
  }, [page, recipients]);

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
          <h1>Gerenciando Destinatários</h1>
          <div>
            <SearchInput
              type="text"
              value={searchName}
              placeholder="Pesquisar por destinatários"
              onChange={(e) => setSearchName(e.target.value)}
            />
            <Link to="/recipients/new">
              <RegisterButton type="button">Cadastrar</RegisterButton>
            </Link>
          </div>
        </header>

        <RecipientsTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map((recipient) => (
              <RecipientsItem
                recipient={recipient}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </RecipientsTable>
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
