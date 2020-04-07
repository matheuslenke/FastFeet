import React from 'react';

import { Container, Content } from './styles';
import {
  FormSection,
  FormRow,
  InputDiv,
  InputLabel,
  Input,
  Select,
  Option,
} from '~/components/Form/styles';

import BackButton from '~/components/Buttons/BackButton';
import SaveButton from '~/components/Buttons/SaveButton';

export default function OrdersForm() {
  return (
    <Container>
      <Content>
        <header>
          <h1>Edição de Encomendas</h1>
          <div>
            <BackButton />
            <SaveButton />
          </div>
        </header>

        <FormSection>
          <FormRow>
            <InputDiv>
              <InputLabel>Destinatário</InputLabel>
              <Select type="text">
                <Option>Opção</Option>
              </Select>
            </InputDiv>
            <InputDiv>
              <InputLabel>Entregador</InputLabel>
              <Select type="text">
                <Option>Opção</Option>
              </Select>
            </InputDiv>
          </FormRow>
          <FormRow>
            <InputDiv>
              <InputLabel>Nome do produto</InputLabel>
              <Input type="text" placeholder="Produto" />
            </InputDiv>
          </FormRow>
        </FormSection>
      </Content>
    </Container>
  );
}
