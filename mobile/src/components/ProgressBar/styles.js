import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 30px 5px;
  padding: 0 30px;
`;

export const ProgressLine = styled.View`
  border: 1px solid #7d40e7;
  padding: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Progress = styled.View`
  background: #7d40e7;
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

export const ProgressLabels = styled.View`
  flex: 1;
  width: 70px;
  height: 40px;
  justify-content: center;
  margin-top: 10px;
  top: 0;
  left: -30px;
  position: absolute;
`;

export const ProgressText = styled.Text`
  text-align: center;
  font-size: 10px;
  margin-top: 5px;
  color: #666;
`;
