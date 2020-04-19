import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import AvatarInput from './AvatarInput';

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

import { storeDeliverymansRequest } from '~/store/modules/deliverymans/actions';
import history from '~/services/history';

export default function DeliverymanForm() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O email é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(storeDeliverymansRequest(data));
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
          <h1>Cadastro de entregadores</h1>
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
              <AvatarInput name="avatar_id" />
            </InputDiv>
          </FormRow>
          <FormRow>
            <InputDiv>
              <InputLabel>Entregador</InputLabel>
              <Input type="text" placeholder="Nome do entregador" name="name" />
            </InputDiv>
          </FormRow>
          <FormRow>
            <InputDiv>
              <InputLabel>Email</InputLabel>
              <Input
                type="text"
                name="email"
                placeholder="exemplo@exemplo.com"
              />
            </InputDiv>
          </FormRow>
        </FormSection>
      </Content>
    </Container>
  );
}
