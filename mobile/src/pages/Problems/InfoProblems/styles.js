import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 20px 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  height: 46px;
  background: ${colors.primary};
`;

export const Form = styled.View`
  justify-content: flex-start;
`;

export const FormInput = styled(Input)`
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
  height: 300px;
  margin: 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
