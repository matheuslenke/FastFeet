import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 50px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;

  header {
    display: flex;
    align-self: center;
    align-content: center;
    flex-wrap: wrap;

    h1 {
      width: 100%;
      align-self: center;
      padding-bottom: 30px;
    }

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 30px auto;
    }
  }
`;

export const OrdersTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;

  thead {
    border-bottom: 30px solid transparent;
  }

  tbody {
  }
`;
