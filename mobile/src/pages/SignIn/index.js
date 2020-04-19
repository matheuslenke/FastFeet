import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Text, StatusBar, ActivityIndicator } from 'react-native';

import { Container, Form, FormInput } from './styles';
import logo from '~/assets/logo-white.png';

import Button from '~/components/Button';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const idRef = useRef();

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Image source={logo} />
      <Form>
        <FormInput
          icon="account-circle"
          secureTextEntry
          placeholder="Informe seu ID de cadastro"
          ref={idRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={id}
          onChangeText={setId}
        />
        <Button loading={false} onPress={handleSubmit}>
          <Text>Entrar no sistema</Text>
        </Button>
      </Form>
    </Container>
  );
}
