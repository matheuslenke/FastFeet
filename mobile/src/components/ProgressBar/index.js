import React from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import customStyles from './styles';

export default function ProgressBar({ currentStep = 1 }) {
  return (
    <StepIndicator
      stepCount={3}
      customStyles={customStyles}
      currentPosition={currentStep}
      labels={['Aguardando Retirada', 'Retirada', 'Entregue']}
    />
  );
}
