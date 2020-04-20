import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const OrdersList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
  })``;
  
  export const OrderContainer = styled.View`
    margin: 10px 0;
  `;