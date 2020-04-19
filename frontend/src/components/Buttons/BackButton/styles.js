import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonContainer = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  background: #cccccc;
  margin: 5px 0 0;
  color: #fff;
  height: 36px;
  padding: 0 15px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.3, '#cccc')};
  }

  svg {
    margin-right: 6px;
  }
`;
