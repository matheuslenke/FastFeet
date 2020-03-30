import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  padding: 60px 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    p {
      align-self: flex-start;
      font-size: 14px;
      font-weight: bold;
      color: #444;
      margin: 0 0 10px;
    }

    input {
      border-style: solid;
      background-color: #fff;
      border-color: #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      background-color: #7d40e7;
      height: 44px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.06, '#7d40e7')};
      }
    }
  }
`;
