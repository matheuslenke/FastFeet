import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

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

import { updateDeliverymansRequest } from '~/store/modules/deliverymans/actions';
import history from '~/services/history';

export default function DeliverymanForm() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { deliveryman } = location.state;

  function handleSubmit(data, { reset }) {
    const newData = { deliveryman_id: deliveryman.id, ...data };
    dispatch(updateDeliverymansRequest(newData));
  }
  const initialData = {
    name: deliveryman.name,
    email: deliveryman.email,
    avatar_id: {
      id: deliveryman.avatar ? deliveryman.avatar.id : null,
      url: deliveryman.avatar ? deliveryman.avatar.url : null,
    },
  };

  useEffect(() => {}, [initialData]);

  return (
    <Container>
      <Content>
        <header>
          <h1>Edição de entregadores</h1>
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
