import styled from 'styled-components';
import { Form } from '@unform/web';

export const FormSection = styled(Form)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
`;

export const FormRow = styled.div`
  display: flex;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputLabel = styled.span`
  font-weight: bold;
  margin: 0 10px;
`;

export const Option = styled.option``;
