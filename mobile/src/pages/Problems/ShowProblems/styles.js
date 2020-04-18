import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  z-index: 2;
  margin: 20px 10px;
`;

export const ProblemsList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
