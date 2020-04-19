import React, { useMemo } from 'react';

import { ProblemCard, ProblemLabel, ProblemDate } from './styles';

import formatDate from '~/utils/formatDate';

export default function ProblemItem({ problem }) {
  const date = useMemo(() => formatDate(problem.createdAt));

  return (
    <ProblemCard>
      <ProblemLabel>{problem.description}</ProblemLabel>
      <ProblemDate>{date}</ProblemDate>
    </ProblemCard>
  );
}
