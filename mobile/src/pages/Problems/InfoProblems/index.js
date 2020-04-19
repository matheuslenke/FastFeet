import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Form, FormInput, SubmitButton } from './styles';

import api from '~/services/api';

import Background from '~/components/Background';

export default function InfoProblems({ navigation, route }) {
  const [description, setDescription] = useState('');
  const [order, setOrder] = useState(route.params.order);

  async function handleSubmit() {
    try {
      await api.post(`delivery/${order.id}/problems`, {
        description,
      });

      Alert.alert('Sucesso!', 'Problema informado com sucesso');
      navigation.goBack();
    } catch (error) {
      console.tron.log(error);
      Alert.alert('Falha', 'Falha ao informar problema');
    }
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <Form>
          <FormInput
            multiline
            numberOfLines={10}
            autoCorrect
            autoCapitalize="sentences"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            onSubmitEditing={handleSubmit}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />
        </Form>
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Container>
    </Background>
  );
}

InfoProblems.propTypes = {
  navigation: PropTypes.func.isRequired,
};
