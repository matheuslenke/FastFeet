import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, Content, ProblemsTable, Pagination } from './styles';
import ProblemsItem from './ProblemsItem';

import { getProblemsRequest } from '~/store/modules/problems/actions';
import api from '~/services/api';

export default function Orders() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [endOfPages, setEndOfPages] = useState(false);

  const loading = useSelector((state) => state.problems.loading);
  const { problems } = useSelector((state) => state.problems);
  const problemsCount = useSelector((state) => state.problems.count);

  useEffect(() => {
    dispatch(getProblemsRequest(page));
  }, [page]);

  async function handleDelete(problem_id) {
    try {
      if (window.confirm('Tem certeza que deseja cancelar esta encomenda?')) {
        await api.delete(`problem/${problem_id}/cancel-delivery`);
        toast.success('Encomenda Cancelada com sucesso');
        dispatch(getProblemsRequest(page));
      }
    } catch (error) {
      toast.error('Falha ao cancelar Encomenda');
    }
  }

  useEffect(() => {
    if (!problemsCount || page * 6 >= problemsCount) {
      setEndOfPages(true);
    } else {
      setEndOfPages(false);
    }
  }, [page, problems]);

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
          <h1>Problemas na entrega</h1>
        </header>

        <ProblemsTable>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems ? (
              problems.map((problem) => (
                <ProblemsItem problem={problem} handleDelete={handleDelete} />
              ))
            ) : (
              <span>vazio</span>
            )}
          </tbody>
        </ProblemsTable>
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
