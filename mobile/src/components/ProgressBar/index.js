import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Progress,
  ProgressLine,
  ProgressText,
  ProgressLabels,
} from './styles';

export default function ProgressBar() {
  return (
    <Container>
      <ProgressLine>
        <Progress>
          <ProgressLabels>
            <ProgressText>Aguardando Retirada</ProgressText>
          </ProgressLabels>
        </Progress>
        <Progress>
          <ProgressLabels>
            <ProgressText>Retirada</ProgressText>
          </ProgressLabels>
        </Progress>
        <Progress>
          <ProgressLabels>
            <ProgressText>Entregue</ProgressText>
          </ProgressLabels>
        </Progress>
      </ProgressLine>
    </Container>
  );
}
