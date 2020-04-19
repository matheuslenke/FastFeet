import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

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
  const formRef = useRef(null);
  const [recipient, setRecipient] = useState(null);
  const [deliveryman, setDeliveryman] = useState(null);

  const dispatch = useDispatch();

  async function loadRecipients(InputValue) {
    const response = await api.get('/recipients', {
      params: {
        name: InputValue,
      },
    });
    if (response) {
      const data = response.data.rows.map((item) => ({
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
      const data = response.data.rows.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      return data;
    }
    return [];
  }

  async function handleSubmit({ product }, { reset }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        product: Yup.string().required('O nome do produto é obrigatório'),
      });

      await schema.validate(
        { product },
        {
          abortEarly: false,
        }
      );
      dispatch(postOrdersRequest(product, deliveryman, recipient));
      reset();
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
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

        <FormSection ref={formRef} onSubmit={handleSubmit} id="order-form">
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
              <Input ref={formRef} name="product" type="text" placeholder="Produto" />
            </InputDiv>
          </FormRow>
        </FormSection>
      </Content>
    </Container>
  );
}
