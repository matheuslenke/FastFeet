import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

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

export default function RecipientsmanForm() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmit(data, { reset }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        street: Yup.string().required('A rua é obrigatória'),
        number: Yup.string().required('O número é obrigatório'),
        complement: Yup.string(),
        city: Yup.string().required('A cidade é obrigatória'),
        state: Yup.string().required('O estado é obrigatório'),
        cep: Yup.string().required('O CEP é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(updateRecipientsRequest(data));

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
          <h1>Cadastro de destinatários</h1>
          <div>
            <BackButton onClick={() => history.goBack()} />
            <SaveButton type="submit" form="deliveryman-form" />
          </div>
        </header>

        <FormSection
          ref={formRef}
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
              <Input type="text" name="state" placeholder="SP" />
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
