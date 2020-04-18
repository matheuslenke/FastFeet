import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  border: 1px solid #ddd;
  align-self: stretch;
`;

export const Head = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const OrderTitle = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const OrderFooter = styled.View`
  margin-top: 20px;
  background: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OrderDate = styled.View`
  margin: 20px;
`;

export const DateTitle = styled.Text`
  font-size: 10px;
  color: #999;
  margin-bottom: 5px;
`;

export const DateInfo = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export const OrderCity = styled.View`
  margin: 20px;
`;

export const CityTitle = styled.Text`
  font-size: 10px;
  color: #999;
  margin-bottom: 5px;
`;

export const CityInfo = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export const OrderDetails = styled.TouchableOpacity`
  margin: 20px;
`;

export const DetailsTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #7d40e7;
`;
