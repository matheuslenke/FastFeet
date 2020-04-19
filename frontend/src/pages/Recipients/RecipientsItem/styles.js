import styled from 'styled-components';

export const RecipientItem = styled.tr`
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  border-top: 20px solid transparent;

  td {
    padding: 20px;
    background: #fff;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
`;
