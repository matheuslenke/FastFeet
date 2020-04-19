import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, ProblemsList, Title } from './styles';

import api from '~/services/api';
import Background from '~/components/Background';
import ProblemItem from '~/components/ProblemItem';

export default function ShowProblems({ route }) {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(route.params.order);

  async function loadProblems() {
    try {
      const response = await api.get(`delivery/${order.id}/problems`, {
        params: {
          page,
        },
      });

      setProblems(response.data.rows);
    } catch (error) {}
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Background>
      <Container>
        <Title>{order.product}</Title>
        <ProblemsList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ProblemItem problem={item} />}
        />
      </Container>
    </Background>
  );
}
