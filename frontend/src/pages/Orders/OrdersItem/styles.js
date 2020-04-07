import styled from 'styled-components';

export const OrderItem = styled.tr`
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  border-top: 20px solid transparent;

  td {
    padding: 20px 5px;
    background: #fff;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }

    div {
      display: flex;
      align-items: center;

      div {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        background: #642346;
        justify-content: center;
        color: #fff;
        margin-right: 5px;
      }
    }
  }
`;
