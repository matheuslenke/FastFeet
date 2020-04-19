import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Container, Content } from './styles';
import {
  FormSection,
  FormRow,
  InputDiv,
  InputLabel,
} from '~/components/Form/styles';

import BackButton from '~/components/Buttons/BackButton';
import SaveButton from '~/components/Buttons/SaveButton';
import Input from '~/components/Form/FormInput';

import { updateRecipientsRequest } from '~/store/modules/recipients/actions';
import history from '~/services/history';

export default function RecipientsForm() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { recipient } = location.state;

  function handleSubmit(data, { reset }) {
    const newData = { recipient_id: recipient.id, ...data };
    dispatch(updateRecipientsRequest(newData));
  }
  const initialData = {
    name: recipient.name,
    street: recipient.street,
    number: recipient.number,
    complement: recipient.complement,
    state: recipient.state,
    city: recipient.city,
    cep: recipient.cep,
  };

  return (
    <Container>
      <Content>
        <header>
          <h1>Cadastro de entregadores</h1>
          <div>
            <BackButton onClick={() => history.goBack()} />
            <SaveButton type="submit" form="deliveryman-form" />
          </div>
        </header>

        <FormSection
          initialData={initialData}
          onSubmit={handleSubmit}
          id="deliveryman-form"
        >
          <FormRow>
            <InputDiv>
              <InputLabel>Nome</InputLabel>
              <Input
                type="text"
                placeholder="Nome do destinatário"
                name="name"
              />
            </InputDiv>
          </FormRow>
          <FormRow>
            <InputDiv style={{ flexGrow: 2 }}>
              <InputLabel>Rua</InputLabel>
              <Input
                type="text"
                placeholder="Rua do destinatário"
                name="street"
              />
            </InputDiv>

            <InputDiv style={{ flexGrow: 1 }}>
              <InputLabel>Número</InputLabel>
              <Input
                type="text"
                placeholder="Numero da residência"
                name="number"
              />
            </InputDiv>
            <InputDiv style={{ flexGrow: 1 }}>
              <InputLabel>Complemento</InputLabel>
              <Input
                type="text"
                placeholder="Apartamento 301 bloco A"
                name="complement"
              />
            </InputDiv>
          </FormRow>
          <FormRow>
            <InputDiv>
              <InputLabel>Cidade</InputLabel>
              <Input type="text" name="city" placeholder="São Paulo" />
            </InputDiv>
            <InputDiv>
              <InputLabel>Estado</InputLabel>
              <Input type="text" name="state" placeholder="São Paulo" />
            </InputDiv>
            <InputDiv>
              <InputLabel>CEP</InputLabel>
              <Input type="text" name="cep" placeholder="00000-000" />
            </InputDiv>
          </FormRow>
        </FormSection>
      </Content>
    </Container>
  );
}
