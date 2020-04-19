import styled from 'styled-components/native';

export const ProblemCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  height: auto;
`;
export const ProblemLabel = styled.Text`
  font-size: 16px;
  color: #999;
  flex-wrap: wrap;
  flex: 1;
`;

export const ProblemDate = styled.Text`
  color: #999;
`;
