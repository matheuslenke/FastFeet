import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Content } from './styles';
import {
  FormSection,
  FormRow,
  InputDiv,
  InputLabel,
} from '~/components/Form/styles';
import Input from '~/components/Form/FormInput';
import SelectInput from '~/components/Form/SelectInput';

import BackButton from '~/components/Buttons/BackButton';
import SaveButton from '~/components/Buttons/SaveButton';

import history from '~/services/history';
import api from '~/services/api';

import { postOrdersRequest } from '~/store/modules/orders/actions';

export default function OrdersForm() {
  const [recipient, setRecipient] = useState(null);
  const [deliveryman, setDeliveryman] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);

  const dispatch = useDispatch();

  async function loadRecipients(InputValue) {
    const response = await api.get('/recipients', {
      params: {
        name: InputValue,
      },
    });
    if (response) {
      setRecipients(response.data);

      const data = response.data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      return data;
    }
    return [];
  }
  async function loadDeliverymans(InputValue) {
    const response = await api.get('/deliverymans', {
      params: {
        name: InputValue,
      },
    });

    if (response) {
      setDeliverymans(response.data);

      const data = response.data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      return data;
    }
    return [];
  }

  function handleSubmit({ product }, { reset }) {
    dispatch(postOrdersRequest(product, deliveryman, recipient));

    reset();
  }

  return (
    <Container>
      <Content>
        <header>
          <h1>Cadastro de Encomendas</h1>
          <div>
            <BackButton onClick={() => history.goBack()} />
            <SaveButton type="submit" form="order-form" />
          </div>
        </header>

        <FormSection onSubmit={handleSubmit} id="order-form">
          <FormRow>
            <InputDiv>
              <InputLabel>Destinatário</InputLabel>
              <SelectInput
                type="text"
                name="recipient_id"
                onChange={(option) => setRecipient(option.value)}
                defaultOptions
                loadOptions={(inputValue) => loadRecipients(inputValue)}
                noOptionsMessage={() => 'Nenhum Destinatário encontrado'}
                loadingMessage={() => 'Carregando'}
              />
            </InputDiv>
            <InputDiv>
              <InputLabel>Entregador</InputLabel>
              <SelectInput
                type="text"
                name="deliveryman_id"
                onChange={(option) => setDeliveryman(option.value)}
                defaultOptions
                loadOptions={(inputValue) => loadDeliverymans(inputValue)}
                noOptionsMessage={() => 'Nenhum entregador encontrado'}
                loadingMessage={() => 'Carregando'}
              />
            </InputDiv>
          </FormRow>
          <FormRow>
            <InputDiv>
              <InputLabel>Nome do produto</InputLabel>
              <Input name="product" type="text" placeholder="Produto" />
            </InputDiv>
          </FormRow>
        </FormSection>
      </Content>
    </Container>
  );
}
