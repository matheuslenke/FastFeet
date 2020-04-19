import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 30px 50px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;

  header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;

    h1 {
      color: #444444;
      font-size: 24px;
      font-weight: bold;
      margin: 5px 0;
    }
    div {
      display: flex;

      button:first-of-type {
        margin-right: 10px;
      }
    }
  }
`;
